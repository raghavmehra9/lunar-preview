import { luckyUnluckyService } from "@/api/lunar-services/services";
import { useQuery } from "@tanstack/react-query";

const useLuckyUnlucky = () => {
  return useQuery({
    queryKey: ["service-lucky-unlucky"],
    queryFn: luckyUnluckyService,
  });
};

export default useLuckyUnlucky;
