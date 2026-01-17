// individual Service

import {
  CreatePaymentPayload,
  IndividualPlanDetails,
  IndividualPlans,
} from "@/components/purchase/Types";
import { CreatePaymentResponse } from "@/components/subscription/Types";
import { AxiosResponse } from "axios";
import { axiosInstance } from "..";

const fetchIndividualPlanDetails = async (
  type: IndividualPlans
): Promise<IndividualPlanDetails> => {
  try {
    const response: AxiosResponse<IndividualPlanDetails> =
      await axiosInstance.get(`/plans/individual/${type}`);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const createIndividualPayment = async (
  payload: CreatePaymentPayload
): Promise<CreatePaymentResponse> => {
  try {
    const response: AxiosResponse<CreatePaymentResponse> =
      await axiosInstance.post(
        `/subscription/individual/create-payment`,
        payload
      );
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export { createIndividualPayment, fetchIndividualPlanDetails };
