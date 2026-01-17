import { frequencyList } from "@/api/frequency";
import { FrequencyResponse } from "@/api/frequency/types";
import { useInfiniteQuery } from "@tanstack/react-query";

const useFrequencyList = () => {
  return useInfiniteQuery<FrequencyResponse, Error>({
    queryKey: ["frequency-list"],
    queryFn: async ({ pageParam = 1 }) => frequencyList(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.meta.page < lastPage.meta.totalPages
        ? lastPage.meta.page + 1
        : undefined;
    },
  });
};

export default useFrequencyList;
