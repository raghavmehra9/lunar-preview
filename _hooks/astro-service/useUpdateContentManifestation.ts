import { moonCalendarUpdateContent } from "@/api/lunar-services/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface useUpdateContentManifestationProps {
  onSetManifestationId: (_: string) => void;
  onToggleEditMode: (_: boolean) => void;
}

const useUpdateContentManifestation = ({
  onSetManifestationId,
  onToggleEditMode,
}: useUpdateContentManifestationProps) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, content }: { id: string; content: string }) => {
      return await moonCalendarUpdateContent({ id, content });
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

export default useUpdateContentManifestation;
