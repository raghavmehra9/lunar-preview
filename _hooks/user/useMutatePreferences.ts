import { submitUserPreferences } from "@/api/user-profile";
import { UserPreferencesBody } from "@/api/user-profile/types";
import { useSession } from "@/context/ctx";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";

const useMutatePreferences = () => {
  const { session, setValue } = useSession();

  const updatePreference = () =>
    setValue({
      ...session,
      isPreferenceEnabled: true,
    });

  return useMutation({
    mutationFn: async (data: UserPreferencesBody) => {
      const response = await submitUserPreferences(data);
      return response;
    },
    onSuccess(success) {
      updatePreference();
      if (!success.isUserOnboarded) {
        router.replace("/(auth)/onboarding/unlock");
      } else {
        router.replace("/(app)/(tabs)");
      }
    },
    onError(error: any) {
      if (error?.response?.status === 400) {
        updatePreference();
        router.replace({
          pathname: "/(auth)/onboarding/unlock",
        });
      }
    },
  });
};

export default useMutatePreferences;
