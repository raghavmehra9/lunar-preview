import { AxiosResponse } from "axios";

import { axiosInstance } from "..";
import {
  CustomFrequencyResponse,
  Frequency,
  FrequencyPaymentResponse,
  FrequencyResponse,
} from "./types";
import { FrequencyFormData } from "@/components/frequency/Types";

const frequencyList = async (page: number): Promise<FrequencyResponse> => {
  try {
    const response: AxiosResponse<FrequencyResponse> = await axiosInstance.get(
      `/frequency?page=${page}`
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const frequencyDetail = async (
  freqId: string
): Promise<{ frequency: Frequency }> => {
  try {
    const response: AxiosResponse<{ frequency: Frequency }> =
      await axiosInstance.get(`/frequency/${freqId}`);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const frequencyOrder = async (
  freqId: string
): Promise<FrequencyPaymentResponse> => {
  try {
    const response: AxiosResponse<FrequencyPaymentResponse> =
      await axiosInstance.post(`/frequency/create-payment`, { planId: freqId });
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const customFrequency = async (
  data: FrequencyFormData
): Promise<CustomFrequencyResponse> => {
  try {
    const response: AxiosResponse<CustomFrequencyResponse> =
      await axiosInstance.post(`/frequency/custom`, data);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export { frequencyList, frequencyDetail, frequencyOrder, customFrequency };
