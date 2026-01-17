import { fetchMoonSignReport } from "@/api/lunar-services/services";
import { useQuery } from "@tanstack/react-query";

const useMoon = (enabled: boolean) => {
  return useQuery({
    queryKey: ["service-moon-report"],
    queryFn: fetchMoonSignReport,
    enabled,
  });
};

export default useMoon;
