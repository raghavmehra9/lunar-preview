import { frequencyDetail } from "@/api/frequency";
import { useQuery } from "@tanstack/react-query";

const useFrequencyDetail = (freqId: string) => {
  return useQuery({
    queryKey: ["frequency-detail", freqId],
    queryFn: async ({ queryKey }) => {
      const [, freqId] = queryKey;
      return freqId ? frequencyDetail(freqId as string) : null;
    },
    enabled: !!freqId,
  });
};

export default useFrequencyDetail;
