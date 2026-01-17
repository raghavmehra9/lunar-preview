import { moonCalendarPostContent } from "@/api/lunar-services/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface useCreateManifestationProps {
  onSetManifestationId: (_: string) => void;
  onToggleEditMode: (_: boolean) => void;
}

const useCreateManifestation = ({
  onSetManifestationId,
  onToggleEditMode,
}: useCreateManifestationProps) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (content: string) => {
      return await moonCalendarPostContent(content);
    },
    onSuccess: (data) => {
      if (data?.manifestation_id) {
        onSetManifestationId(data.manifestation_id);
      }
      queryClient.invalidateQueries({
        queryKey: ["service-moon-calendar"],
      });
    },
    onError: (_) => {
      onToggleEditMode(true);
    },
  });
};

export default useCreateManifestation;
