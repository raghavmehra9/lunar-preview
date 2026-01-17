import { AxiosResponse } from "axios";

import {
  CreatePaymentResponse,
  SubscriptionPlans,
} from "@/components/subscription/Types";
import { UserSubscriptionDetails } from "@/components/user_profile/section/my_subscription/constants";
import { axiosInstance } from "..";

const fetchUserSubscriptionDetails =
  async (): Promise<UserSubscriptionDetails> => {
    try {
      const response: AxiosResponse<UserSubscriptionDetails> =
        await axiosInstance.get("/subscription");
      return response?.data;
    } catch (error) {
      throw error;
    }
  };

const fetchSubscriptionPlans = async (): Promise<SubscriptionPlans> => {
  try {
    const response: AxiosResponse<SubscriptionPlans> = await axiosInstance.get(
      "/plans"
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const createSubscriptionOrderId = async (
  planId: string
): Promise<CreatePaymentResponse> => {
  try {
    const response: AxiosResponse<CreatePaymentResponse> =
      await axiosInstance.post("/subscription/create-payment", {
        planId,
      });
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const verifyPayment = async (paymentIntentId: string): Promise<any> => {
  console.log("paymentIntentId", paymentIntentId);
  try {
    const response: AxiosResponse<any> = await axiosInstance.post(
      "/subscription/verify-payment",
      {
        paymentIntentId,
      }
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export {
  verifyPayment,
  fetchSubscriptionPlans,
  createSubscriptionOrderId,
  fetchUserSubscriptionDetails,
};
