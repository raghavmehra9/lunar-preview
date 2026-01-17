export function isLocationError(error?: any): boolean {
  return (
    error?.response?.data?.error?.toLowerCase()?.includes("location") ?? false
  );
}
