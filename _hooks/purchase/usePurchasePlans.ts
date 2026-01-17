import { fetchUserPurchaseList } from "@/api/user-profile";
import { useInfiniteQuery } from "@tanstack/react-query";

const usePurchasePlans = () => {
  return useInfiniteQuery({
    queryKey: ["fetch-user-purchase"],
    queryFn: async ({ pageParam = 1 }) =>
      fetchUserPurchaseList(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.meta.page < lastPage.meta.totalPages
        ? lastPage.meta.page + 1
        : undefined;
    },
  });
};

export default usePurchasePlans;
