import { onboarding } from "@/api/auth/auth";
import { onboardingPayload } from "@/api/auth/authTypes";
import { useSession } from "@/context/ctx";
import { useNotification } from "@/context/notificationContext";
import { useOnBoardData } from "@/context/onBoardCtx";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";

const useMutateOnBoard = () => {
  const { clearFormData } = useOnBoardData();
  const { signOut } = useSession();
  const { showNotification } = useNotification();

  return useMutation({
    mutationFn: async (data: onboardingPayload) => {
      const response = await onboarding(data);
      return response;
    },
    onSuccess() {
      clearFormData();
      router.replace({
        pathname: "/(auth)/yoursign",
        params: { userOnboard: JSON.stringify({ isUserOnboarded: true }) },
      });
    },
    onError(error: any) {
      clearFormData();
      if (error?.response?.status === 400) {
        signOut();
        showNotification(
          error.response?.data?.message || "Error occurred",
          "error"
        );
      }
    },
  });
};

export default useMutateOnBoard;
