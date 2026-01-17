import { fetchFrequencyPurchased } from "@/api/user-profile";
import { useInfiniteQuery } from "@tanstack/react-query";

const usePurchasedFrequencies = () => {
  return useInfiniteQuery({
    queryKey: ["fetch-user-frequency"],
    queryFn: async ({ pageParam = 1 }) =>
      fetchFrequencyPurchased(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.meta.page < lastPage.meta.totalPages
        ? lastPage.meta.page + 1
        : undefined;
    },
  });
};

export default usePurchasedFrequencies;
