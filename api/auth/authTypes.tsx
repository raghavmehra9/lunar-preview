import { ZodiacSignTypes } from "@/components/register/Types";

type otpPayload = {
  email: string;
  otp: string;
};

type otpVerifiedResponse = {
  isUserOnboarded: boolean;
  isPreferenceEnabled: boolean;
  token: string;
};

type genericSuccessResponse = {
  success: string;
  message: string;
};

type onboardingPayload = {
  name: string;
  birth_date: string;
  birth_time: string;
  birth_location: string;
  birth_location_longitude: number;
  birth_location_latitude: number;
};

type MoonSignSuccessResponse = {
  moon_sign: ZodiacSignTypes;
};

type AscendantSignSuccessResponse = {
  ascendent_sign: ZodiacSignTypes;
};

export {
  otpPayload,
  otpVerifiedResponse,
  genericSuccessResponse,
  onboardingPayload,
  MoonSignSuccessResponse,
  AscendantSignSuccessResponse,
};
