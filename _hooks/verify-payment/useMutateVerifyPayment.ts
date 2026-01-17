import { verifyPayment } from "@/api/subscription";
import { parseParams } from "@/utils/helpers/parseParams";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { Alert } from "react-native";

interface VerifyPaymentPayload {
  paymentIntentId: string;
  successPathname: string;
  successParams: string;
  errorPathname: string;
  errorParams: string;
}

const useMutateVerifyPayment = () => {
  return useMutation({
    mutationFn: async (data: VerifyPaymentPayload) => {
      if (!data.paymentIntentId || typeof data.paymentIntentId !== "string") {
        throw new Error("Invalid or missing paymentIntentId");
      }
      const response = await verifyPayment(data.paymentIntentId);
      return response;
    },
    onSuccess(_, variables) {
      if (variables.successPathname) {
        router.replace({
          pathname: variables.successPathname as any,
          params: parseParams(variables.successParams),
        });
      } else {
        Alert.alert("Redirect Failed", "Success path not defined.");
      }
    },
    onError(_, variables) {
      if (variables.errorPathname) {
        router.replace({
          pathname: variables.errorPathname as any,
          params: parseParams(variables.errorParams),
        });
      }
    },
  });
};

export default useMutateVerifyPayment;
