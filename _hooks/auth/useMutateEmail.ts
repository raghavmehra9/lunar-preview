import { emailLogin } from "@/api/auth/auth";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { Keyboard } from "react-native";

const useMutateEmail = ({ resend = false }: { resend?: boolean }) =>
  useMutation({
    mutationFn: async (email: string) => {
      const response = await emailLogin(email);
      return response;
    },
    onSuccess(_, variables) {
      Keyboard.dismiss();
      if (resend) return;
      router.push({
        pathname: "/(auth)/otp",
        params: { email: variables },
      });
    },
  });

export { useMutateEmail };
