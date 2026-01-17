import { fetchAstrolgerService } from "@/api/lunar-services/services";
import { useQuery } from "@tanstack/react-query";

const useAstrologer = () => {
  return useQuery({
    queryKey: ["service-astrologer"],
    queryFn: fetchAstrolgerService,
  });
};

export default useAstrologer;
