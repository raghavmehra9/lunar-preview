import FrequencyDetailScreen from "@/components/frequency/FrequencyDetailScreen";
import { useGlobalSearchParams } from "expo-router";

const FrequencyDetail = () => {
  const { id } = useGlobalSearchParams();
  return <FrequencyDetailScreen freqId={id as string} />;
};

export default FrequencyDetail;
