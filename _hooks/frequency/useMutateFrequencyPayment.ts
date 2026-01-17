import { frequencyOrder } from "@/api/frequency";
import useStripePayment from "@/hooks/useStripePayment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";
import { Alert } from "react-native";

interface PaymentError {
  code: string;
  message: string;
}

interface FrequencyOrderResponse {
  clientSecret: string;
}

const ERROR_MESSAGES = {
  paymentFailed: "Payment failed",
  verificationFailed: "Payment verification failed",
  noPaymentInfo: "No payment information found.",
  initializationFailed: "Unable to initialize payment.",
  unexpectedError: "Unexpected error occurred. Please try again.",
  paymentProcessError: "Something went wrong during the payment process.",
  invalidResponse: "Invalid payment response received.",
  initiationFailed: "Failed to initiate frequency payment. Please try again.",
} as const;

const ROUTES = {
  verifyPayment: "/(app)/subscription/verify-payment" as const,
  purchaseStatus: "/(app)/purchase/status" as const,
  frequency: (freqId: string) => `/(app)/frequency/${freqId}` as const,
};

const QUERY_KEYS = {
  frequencyDetail: (freqId: string) => ["frequency-detail", freqId] as const,
};

const ERROR_PARAMS = {
  frequencyPurchaseFailed: {
    type: "error",
    heading: "Frequency Purchase \nFailed",
  },
} as const;

const useMutateFrequencyPayment = (freqId: string) => {
  const queryClient = useQueryClient();
  const { handlePayment, presentPaymentSheet, retrievePaymentIntent } =
    useStripePayment();

  const showAlert = (title: string, message: string) => {
    Alert.alert(title, message);
  };

  const refetchFrequencyData = async () => {
    await queryClient.refetchQueries({
      queryKey: QUERY_KEYS.frequencyDetail(freqId),
    });
  };

  const navigateToVerification = (paymentIntentId: string) => {
    router.push({
      pathname: ROUTES.verifyPayment,
      params: {
        paymentIntentId,
        successPathname: ROUTES.frequency(freqId),
        errorPathname: ROUTES.purchaseStatus,
        errorParams: JSON.stringify(ERROR_PARAMS.frequencyPurchaseFailed),
      },
    });
  };

  const handlePaymentSheetError = (
    error: PaymentError,
    setIsProcessingPayment: (value: boolean) => void
  ) => {
    if (error.code === "Canceled") return;

    showAlert(`${ERROR_MESSAGES.paymentFailed}: ${error.code}`, error.message);
    setIsProcessingPayment(false);
  };

  const verifyPaymentIntent = async (
    clientSecret: string,
    setIsProcessingPayment: (value: boolean) => void
  ) => {
    try {
      const result = await retrievePaymentIntent(clientSecret);
      const paymentIntent = result.paymentIntent;

      if (!paymentIntent?.id) {
        showAlert(
          ERROR_MESSAGES.verificationFailed,
          ERROR_MESSAGES.noPaymentInfo
        );
        setIsProcessingPayment(false);
        return null;
      }

      return paymentIntent.id;
    } catch (error) {
      showAlert(
        ERROR_MESSAGES.verificationFailed,
        ERROR_MESSAGES.unexpectedError
      );
      setIsProcessingPayment(false);
      return null;
    }
  };

  const finalizePayment = async (
    paymentIntentId: string,
    setIsProcessingPayment: (value: boolean) => void
  ) => {
    try {
      await refetchFrequencyData();
      setIsProcessingPayment(false);
      navigateToVerification(paymentIntentId);
    } catch (error) {
      showAlert(
        "Payment Error",
        "Payment successful but failed to update data. Please refresh."
      );
      setIsProcessingPayment(false);
    }
  };

  const processPaymentSheet = async (
    clientSecret: string,
    setIsProcessingPayment: (value: boolean) => void
  ) => {
    try {
      const { error } = await presentPaymentSheet();

      if (error) {
        handlePaymentSheetError(error, setIsProcessingPayment);
        return;
      }

      const paymentIntentId = await verifyPaymentIntent(
        clientSecret,
        setIsProcessingPayment
      );

      if (!paymentIntentId) return;

      await finalizePayment(paymentIntentId, setIsProcessingPayment);
    } catch (error) {
      showAlert("Payment Error", ERROR_MESSAGES.paymentProcessError);
      setIsProcessingPayment(false);
    }
  };

  const initializePayment = async (clientSecret: string) => {
    try {
      const { initError, setIsProcessingPayment } = await handlePayment(
        clientSecret
      );

      if (initError) {
        showAlert(
          "Payment Initialization Failed",
          ERROR_MESSAGES.initializationFailed
        );
        return;
      }

      await processPaymentSheet(clientSecret, setIsProcessingPayment);
    } catch (error) {
      showAlert("Payment Error", ERROR_MESSAGES.unexpectedError);
    }
  };

  const handleSuccessfulOrder = async (response: FrequencyOrderResponse) => {
    const clientSecret = response?.clientSecret;

    if (!clientSecret) {
      showAlert("Payment Error", ERROR_MESSAGES.invalidResponse);
      return;
    }

    await initializePayment(clientSecret);
  };

  const handleOrderError = () => {
    showAlert("Payment Error", ERROR_MESSAGES.initiationFailed);
  };

  return useMutation({
    mutationFn: async (freqId: string) => {
      return await frequencyOrder(freqId);
    },
    onSuccess: handleSuccessfulOrder,
    onError: handleOrderError,
  });
};

export default useMutateFrequencyPayment;
