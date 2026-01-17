import { fetchUserDetails } from "@/api/user-profile";
import { useQuery } from "@tanstack/react-query";

export const useUserDetails = () => {
  return useQuery({
    queryKey: ["user-details"],
    queryFn: fetchUserDetails,
  });
};
