import { cosmicCrewService } from "@/api/lunar-services/services";
import { useQuery } from "@tanstack/react-query";

const useCosmicCrew = () => {
  return useQuery({
    queryKey: ["service-cosmic-crew"],
    queryFn: cosmicCrewService,
  });
};

export default useCosmicCrew;
