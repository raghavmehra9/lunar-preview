import { isLocationError } from "@/utils/helpers/isLocationError";
import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_BASE_URL}${process.env.EXPO_PUBLIC_API_VERSION}`,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    try {
      const sessionString = await SecureStore.getItemAsync("session");
      if (sessionString) {
        const session = JSON.parse(sessionString);
        if (session?.token) {
          config.headers.set("Authorization", `Bearer ${session.token}`);
        }
      }
    } catch (error) {
      console.error("Error fetching session:", error);
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  async (response) => response,
  async (error: AxiosError) => {
    try {
      const statusCode = error?.response?.status;
      const errorUrl = error?.config?.url;

      if (statusCode === 401) {
        await SecureStore.deleteItemAsync("session");
        router.replace("/(auth)/signup");
      }

      if (statusCode === 500) {
        router.replace("/server-error");
      }

      if (statusCode === 403) {
        if (
          !isLocationError(error) &&
          ![
            "/gem",
            "/cosmic-crew",
            "/ascendent-report",
            "/moon-sign/report",
          ].includes(errorUrl ?? "")
        ) {
          router.replace("/subscription/plans");
        }
      }
    } catch (interceptorError) {
      console.error("Error in Axios Interceptor:", interceptorError);
    }

    return Promise.reject(error);
  }
);

export { axiosInstance };
