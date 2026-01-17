import { cosmicCouncilService } from "@/api/lunar-services/services";
import { useQuery } from "@tanstack/react-query";

const useCosmicCouncil = () => {
  return useQuery({
    queryKey: ["service-cosmic-council"],
    queryFn: cosmicCouncilService,
  });
};

export default useCosmicCouncil;
