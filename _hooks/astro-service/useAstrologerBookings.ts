import { fetchAstrolgerBookings } from "@/api/lunar-services/services";
import { AstrologerBookingsResponse } from "@/components/user_profile/Types";
import { useInfiniteQuery } from "@tanstack/react-query";

const useAstrologerBookings = () => {
  return useInfiniteQuery<AstrologerBookingsResponse, Error>({
    queryKey: ["service-astrologer-bookings"],
    queryFn: async ({ pageParam = 1 }) =>
      fetchAstrolgerBookings(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.meta.page < lastPage.meta.totalPages
        ? lastPage.meta.page + 1
        : undefined;
    },
    staleTime: 0,
  });
};

export default useAstrologerBookings;
