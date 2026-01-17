import { customFrequency } from "@/api/frequency";
import { FrequencyFormData } from "@/components/frequency/Types";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";

const useMutateCustomFrequency = () => {
  return useMutation({
    mutationFn: async (data: FrequencyFormData) => {
      const response = await customFrequency(data);
      return response;
    },
    onSuccess() {
      router.replace("/(app)/frequency/success");
    },
  });
};

export default useMutateCustomFrequency;
