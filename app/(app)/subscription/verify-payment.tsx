import useMutateVerifyPayment from "@/_hooks/verify-payment/useMutateVerifyPayment";
import { useGlobalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function VerifyPaymentScreen() {
  const params = useGlobalSearchParams();
  const filteredParams = Array.isArray(params) ? params[0] : params;

  const verifyPayment = useMutateVerifyPayment();

  useEffect(() => {
    verifyPayment.mutate(filteredParams);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <ActivityIndicator size="large" />
      <Text>Verifying Payment</Text>
    </View>
  );
}
