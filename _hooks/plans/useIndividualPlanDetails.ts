import { fetchIndividualPlanDetails } from "@/api/purchase";
import { IndividualPlans } from "@/components/purchase/Types";
import { useQuery } from "@tanstack/react-query";

const useIndividualPlanDetails = (planTypes: IndividualPlans) => {
  return useQuery({
    queryKey: ["fetch-individual-plan", planTypes],
    queryFn: () => {
      return fetchIndividualPlanDetails(planTypes);
    },
    enabled: !!planTypes,
  });
};

export default useIndividualPlanDetails;
