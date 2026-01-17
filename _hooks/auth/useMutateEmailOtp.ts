import { verifyOtp } from "@/api/auth/auth";
import { otpPayload } from "@/api/auth/authTypes";
import { useSession } from "@/context/ctx";
import { useNotification } from "@/context/notificationContext";
import { requestLocationPermission } from "@/utils/helpers/requestLocationPermission";
import { useMutation } from "@tanstack/react-query";
import { Href, router } from "expo-router";
import { Keyboard } from "react-native";

const useMutateEmailOtp = () => {
  const { signIn } = useSession();
  const { showNotification } = useNotification();

  const updateLocation = async (route: Href) => {
    const isGranted = await requestLocationPermission();
    if (isGranted) {
      router.replace({
        pathname: "/(app)/fetch-location",
        params: { route: encodeURIComponent(route as string) },
      });
    } else {
      showNotification(
        "Please enable location permission to continue",
        "error"
      );
    }
  };

  const mutateEmail = useMutation({
    mutationFn: async (data: otpPayload) => {
      const response = await verifyOtp(data);
      return response;
    },
    onSuccess: async (success) => {
      Keyboard.dismiss();
      signIn(success);
      const route = !success.isPreferenceEnabled
        ? "/(auth)/onboarding/welcome"
        : !success.isUserOnboarded
        ? "/(auth)/registration"
        : "/(app)/(tabs)";
      if (success.isPreferenceEnabled && success.isUserOnboarded) {
        updateLocation(route);
        return;
      } else {
        router.replace(route);
      }
    },
  });
  const isLoading = mutateEmail.isPending;
  return { isLoading, mutateEmail };
};
export { useMutateEmailOtp };
