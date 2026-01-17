import { fetchAscendantSignReport } from "@/api/lunar-services/services";
import { useQuery } from "@tanstack/react-query";

const useAscendant = (enabled: boolean) => {
  return useQuery({
    queryKey: ["service-ascendant-report"],
    queryFn: fetchAscendantSignReport,
    enabled,
  });
};

export default useAscendant;
