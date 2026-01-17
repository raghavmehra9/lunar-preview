import { fetchDeleteReason } from "@/api/user-profile";
import { useQuery } from "@tanstack/react-query";

const useFetchReason = () => {
  return useQuery({
    queryKey: ["reason-details"],
    queryFn: fetchDeleteReason,
  });
};

export default useFetchReason;
