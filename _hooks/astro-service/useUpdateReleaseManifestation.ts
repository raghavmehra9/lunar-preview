import { moonCalendarReleaseManifestation } from "@/api/lunar-services/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface useUpdateReleaseManifestationProps {
  onSetManifestationId: (_: string) => void;
  onToggleEditMode: (_: boolean) => void;
}

const useUpdateReleaseManifestation = ({
  onSetManifestationId,
  onToggleEditMode,
}: useUpdateReleaseManifestationProps) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      return await moonCalendarReleaseManifestation({ id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["service-moon-calendar"],
      });
      onSetManifestationId("");
      onToggleEditMode(true);
    },
    onError: (_) => {
      onToggleEditMode(true);
    },
  });
};

export default useUpdateReleaseManifestation;
