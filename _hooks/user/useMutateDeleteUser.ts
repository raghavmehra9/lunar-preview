import { deleteUser } from "@/api/user-profile";
import { useMutation } from "@tanstack/react-query";

const useMutateDeleteUser = () => {
  return useMutation({
    mutationFn: async (data: { reason_id: string; reason_text: string }) => {
      const response = await deleteUser(data);
      return response;
    },
  });
};

export default useMutateDeleteUser;
