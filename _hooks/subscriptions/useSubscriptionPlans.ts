import { fetchSubscriptionPlans } from "@/api/subscription";
import { useQuery } from "@tanstack/react-query";

const useSubscriptionPlans = () => {
  return useQuery({
    queryKey: ["fetch-subscription-plans"],
    queryFn: fetchSubscriptionPlans,
  });
};

export default useSubscriptionPlans;
