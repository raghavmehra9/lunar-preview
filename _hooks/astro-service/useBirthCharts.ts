import { fetchBirthChartList } from "@/api/lunar-services/services";
import { useQuery } from "@tanstack/react-query";

const useBirthCharts = () => {
  return useQuery({
    queryKey: ["service-birth-charts"],
    queryFn: fetchBirthChartList,
  });
};

export default useBirthCharts;
