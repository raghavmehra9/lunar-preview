import { createIndividualPayment } from "@/api/purchase";
import {
  CreatePaymentPayload,
  IndividualPlans,
} from "@/components/purchase/Types";
import useStripePayment from "@/hooks/useStripePayment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";
import { Alert } from "react-native";

interface ServiceConfig {
  key: string;
  route: string;
}

interface PaymentError {
  code: string;
  message: string;
}

const SERVICE_CONFIG: Record<IndividualPlans, ServiceConfig> = {
  "ascendent-report": {
    key: "ascendent_report_enabled",
    route: "/(app)/reports/ascendant",
  },
  gemstone: {
    key: "gemstone_enabled",
    route: "/(app)/gem-stone",
  },
  "cosmic-crew": {
    key: "cosmic_crew_enabled",
    route: "/(app)/cosmic-crew",
  },
  "moon-sign": {
    key: "moon_sign_enabled",
    route: "/(app)/reports/moon",
  },
} as const;

const QUERY_KEYS = {
  userPurchase: ["fetch-user-purchase"],
  userDetails: ["user-details"],
} as const;

const ERROR_MESSAGES = {
  paymentFailed: "Payment failed",
  verificationFailed: "Payment verification failed",
  noPaymentInfo: "No payment information found.",
  initializationFailed: "Unable to initialize payment.",
  unexpectedError: "Unexpected error occurred. Please try again.",
  paymentProcessError: "Something went wrong during the payment process.",
  initiationFailed: "Failed to initiate the payment. Please try again.",
} as const;

const useMutateIndividualPayment = (service: IndividualPlans) => {
  const queryClient = useQueryClient();
  const { handlePayment, presentPaymentSheet, retrievePaymentIntent } =
    useStripePayment();

  const showErrorAlert = (title: string, message: string) => {
    Alert.alert(title, message);
  };

  const invalidateQueries = () => {
    queryClient.invalidateQueries({ queryKey: QUERY_KEYS.userPurchase });
    queryClient.invalidateQueries({ queryKey: QUERY_KEYS.userDetails });
  };

  const navigateToVerification = (
    paymentIntentId: string,
    successRoute: string
  ) => {
    console.log(
      `paymentIntentId => ${paymentIntentId}\nsuccessRoute => ${successRoute}\nVERIFYING PAYMENT FUNCTION`
    );
    router.replace({
      pathname: "/(app)/subscription/verify-payment",
      params: {
        paymentIntentId,
        successPathname: successRoute,
        errorPathname: "/(app)/purchase/status",
        errorParams: JSON.stringify({
          type: "error",
          heading: "Plan Purchased \nFailed",
        }),
      },
    });
  };

  const handlePaymentError = (
    error: PaymentError,
    setIsProcessingPayment: (value: boolean) => void
  ) => {
    if (error.code === "Canceled") return;

    showErrorAlert(
      `${ERROR_MESSAGES.paymentFailed}: ${error.code}`,
      error.message
    );
    setIsProcessingPayment(false);
  };

  const verifyPayment = async (
    clientSecret: string,
    setIsProcessingPayment: (value: boolean) => void
  ) => {
    try {
      const result = await retrievePaymentIntent(clientSecret);
      const paymentIntent = result.paymentIntent;

      if (!paymentIntent?.id) {
        showErrorAlert(
          ERROR_MESSAGES.verificationFailed,
          ERROR_MESSAGES.noPaymentInfo
        );
        setIsProcessingPayment(false);
        return null;
      }

      return paymentIntent.id;
    } catch (error) {
      console.error("Payment verification error:", error);
      showErrorAlert(
        ERROR_MESSAGES.verificationFailed,
        ERROR_MESSAGES.unexpectedError
      );
      setIsProcessingPayment(false);
      return null;
    }
  };

  const openPaymentSheet = async (
    clientSecret: string,
    service: string,
    setIsProcessingPayment: (value: boolean) => void
  ) => {
    try {
      const { error } = await presentPaymentSheet();

      if (error) {
        handlePaymentError(error, setIsProcessingPayment);
        return;
      }

      const paymentIntentId = await verifyPayment(
        clientSecret,
        setIsProcessingPayment
      );
      if (!paymentIntentId) return;

      const config = SERVICE_CONFIG[service as IndividualPlans];
      if (!config) {
        console.error(`Invalid service: ${service}`);
        setIsProcessingPayment(false);
        return;
      }

      invalidateQueries();
      setIsProcessingPayment(false);
      navigateToVerification(paymentIntentId, config.route);
    } catch (error) {
      console.error("Error during payment process:", error);
      showErrorAlert("Payment Error", ERROR_MESSAGES.paymentProcessError);
      setIsProcessingPayment(false);
    }
  };

  const handlePaymentSuccess = async (clientSecret: string) => {
    try {
      const { initError, setIsProcessingPayment } = await handlePayment(
        clientSecret
      );

      if (initError) {
        showErrorAlert(
          "Payment Initialization Failed",
          ERROR_MESSAGES.initializationFailed
        );
        return;
      }
      console.log(`clientSecret => ${clientSecret}\nservice => ${service}`);
      await openPaymentSheet(clientSecret, service, setIsProcessingPayment);
    } catch (error) {
      console.error("Payment success handling error:", error);
      showErrorAlert("Payment Error", ERROR_MESSAGES.unexpectedError);
    }
  };

  return useMutation({
    mutationFn: async (data: CreatePaymentPayload) => {
      return await createIndividualPayment(data);
    },

    onSuccess: async (response) => {
      const clientSecret = response?.clientSecret;
      if (!clientSecret) {
        showErrorAlert("Payment Error", "Invalid payment response received.");
        return;
      }
      console.log("clientSecret =>", clientSecret);
      await handlePaymentSuccess(clientSecret);
    },

    onError: (error: any) => {
      console.error("Payment mutation error:", error);
      showErrorAlert("Payment Error", ERROR_MESSAGES.initiationFailed);
    },
  });
};

export default useMutateIndividualPayment;
