import { moonSign } from "@/api/auth/auth";
import { useQuery } from "@tanstack/react-query";

const useMoonSign = () => {
  return useQuery({
    queryKey: ["user-moon-sign"],
    queryFn: moonSign,
  });
};

export default useMoonSign;
