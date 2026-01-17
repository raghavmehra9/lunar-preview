import { createSubscriptionOrderId } from "@/api/subscription";
import useStripePayment from "@/hooks/useStripePayment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";
import { Alert } from "react-native";

interface PaymentError {
  code: string;
  message: string;
}

const QUERY_KEYS = {
  userSubscription: ["fetch-user-subscription"],
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

const useCreateOrderId = () => {
  const queryClient = useQueryClient();
  const { handlePayment, presentPaymentSheet, retrievePaymentIntent } =
    useStripePayment();

  const showErrorAlert = (title: string, message: string) => {
    Alert.alert(title, message);
  };

  const invalidateQueries = () => {
    queryClient.invalidateQueries({ queryKey: QUERY_KEYS.userSubscription });
    queryClient.invalidateQueries({ queryKey: QUERY_KEYS.userDetails });
  };

  const navigateToVerification = (paymentIntentId: string) => {
    router.replace({
      pathname: "/(app)/subscription/verify-payment",
      params: {
        paymentIntentId,
        successPathname: `/(app)/subscription/status`,
        successParams: JSON.stringify({
          type: "success",
          successRoute: "/(app)/(tabs)",
        }),
        errorPathname: "/(app)/subscription/status",
        errorParams: JSON.stringify({
          type: "error",
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

      queryClient.invalidateQueries({
        queryKey: [
          "service-ascendant-report",
          "service-celestial-clock",
          "service-cosmic-council",
          "service-lucky-unlucky",
          "service-moon-report",
          "service-moon-calendar",
        ],
      });

      invalidateQueries();
      setIsProcessingPayment(false);
      navigateToVerification(paymentIntentId);
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

      await openPaymentSheet(clientSecret, setIsProcessingPayment);
    } catch (error) {
      console.error("Payment success handling error:", error);
      showErrorAlert("Payment Error", ERROR_MESSAGES.unexpectedError);
    }
  };

  return useMutation({
    mutationFn: async (planId: string) => {
      const response = await createSubscriptionOrderId(planId);
      return response;
    },
    onSuccess: async (response) => {
      const clientSecret = response?.clientSecret;
      if (!clientSecret) {
        showErrorAlert("Payment Error", "Invalid payment response received.");
        return;
      }
      await handlePaymentSuccess(clientSecret);
    },
  });
};

export default useCreateOrderId;
