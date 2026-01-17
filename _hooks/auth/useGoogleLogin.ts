import { axiosInstance } from "@/api";
import { useSession } from "@/context/ctx";
import * as Google from "expo-auth-session/providers/google";
import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";
import { Platform } from "react-native";

WebBrowser.maybeCompleteAuthSession();
const useGoogleLogin = () => {
  const { setValue, session } = useSession();

  const [_, response, promptAsync] = Google.useAuthRequest({
    iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
    androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
    webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { params } = response;
      if (params.id_token) {
        getUserInfo(params.id_token);
      }
    }
  }, [response]);

  const getUserInfo = async (accessToken: string) => {
    try {
      const userInfoResponse = await axiosInstance.post(
        `/user/google?platform=${Platform.OS}`,
        {
          token: accessToken,
        }
      );
      const { token, isUserOnboarded, isPreferenceEnabled } =
        userInfoResponse.data;
      setValue({
        ...session,
        token,
        isUserOnboarded,
      });
      const route = !isPreferenceEnabled
        ? "/(auth)/onboarding/welcome"
        : !isUserOnboarded
        ? "/(auth)/registration"
        : "/(app)/(tabs)";
      router.replace(route);
    } catch (err) {
      console.log("err", err);
    }
  };

  return { promptAsync };
};

export default useGoogleLogin;
