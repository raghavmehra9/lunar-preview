import { axiosInstance } from "..";
import {
  AscendantSignSuccessResponse,
  genericSuccessResponse,
  MoonSignSuccessResponse,
  onboardingPayload,
  otpPayload,
  otpVerifiedResponse,
} from "./authTypes";

const registerUser = async (data: any) => {
  const response = await axiosInstance.post("/sign-in-with-google", data);
  return response?.data;
};

const emailLogin = async (email: string): Promise<genericSuccessResponse> => {
  const data = { email };
  const response = await axiosInstance.post("/user/send-otp", data);
  return response?.data;
};

const verifyOtp = async (data: otpPayload): Promise<otpVerifiedResponse> => {
  const response = await axiosInstance.post("/user/verify-otp", data);
  return response?.data;
};

const onboarding = async (
  data: onboardingPayload
): Promise<genericSuccessResponse> => {
  const response = await axiosInstance.post("/user/onboard", data);
  return response?.data;
};

const moonSign = async (): Promise<MoonSignSuccessResponse> => {
  const response = await axiosInstance.get("/moon-sign");
  return response?.data;
};

const ascendantSign = async (): Promise<AscendantSignSuccessResponse> => {
  const response = await axiosInstance.get("/ascendent-report/sign");
  return response?.data;
};

export {
  ascendantSign,
  emailLogin,
  moonSign,
  onboarding,
  registerUser,
  verifyOtp,
};
