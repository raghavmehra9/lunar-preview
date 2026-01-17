import { updateUserDetails } from "@/api/user-profile";
import { UserDetailResponse } from "@/components/user_profile/Types";
import { useNotification } from "@/context/notificationContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";

const useUpdateUserDetails = () => {
  const { showNotification } = useNotification();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (
      data: Pick<UserDetailResponse, "name" | "nick_name" | "profile_image">
    ) => {
      const response = await updateUserDetails(data);
      return response;
    },
    onSuccess(success: any) {
      queryClient.invalidateQueries({ queryKey: ["user-details"] });
      showNotification(success?.message, "success");
      router.back();
    },
  });
};

export default useUpdateUserDetails;
