import { userPreferences } from "@/api/user-profile";
import { useQuery } from "@tanstack/react-query";

const useFetchPreferences = () => {
  return useQuery({
    queryKey: ["user-preferences"],
    queryFn: userPreferences,
  });
};

export default useFetchPreferences;
