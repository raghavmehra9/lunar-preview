import { fetchUserSubscriptionDetails } from "@/api/subscription";
import { useQuery } from "@tanstack/react-query";

const useUserSubscriptions = () => {
  return useQuery({
    queryKey: ["fetch-user-subscription"],
    queryFn: fetchUserSubscriptionDetails,
  });
};

export default useUserSubscriptions;
