import { gemStoneService } from "@/api/lunar-services/services";
import { useQuery } from "@tanstack/react-query";

const useGemstone = () => {
  return useQuery({
    queryKey: ["service-gem-stone"],
    queryFn: gemStoneService,
  });
};

export default useGemstone;
