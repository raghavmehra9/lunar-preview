import { retrievePaymentIntent, useStripe } from "@stripe/stripe-react-native";
import { useState } from "react";
import { Alert } from "react-native";

const useStripePayment = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handlePayment = async (clientSecret: string) => {
    setIsProcessingPayment(true);
    const initError = await initializePaymentSheet(clientSecret);
    setIsProcessingPayment(false);
    return {
      initError,
      setIsProcessingPayment,
    };
  };

  const initializePaymentSheet = async (clientSecret: string) => {
    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
      merchantDisplayName: "Lunar",
    });

    if (error) {
      Alert.alert("Payment Initialization Error", error.message);
    }
    return error;
  };

  return {
    handlePayment,
    isProcessingPayment,
    presentPaymentSheet,
    retrievePaymentIntent,
  };
};

export default useStripePayment;
