import { ascendantSign } from "@/api/auth/auth";
import { useQuery } from "@tanstack/react-query";

const useAscendantSign = () => {
  return useQuery({
    queryKey: ["user-ascendant-sign"],
    queryFn: ascendantSign,
  });
};

export default useAscendantSign;
