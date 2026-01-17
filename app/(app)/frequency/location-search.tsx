import LocationSearchScreen from "@/components/LocationSearchScreen";
import { useFrequencyFormData } from "@/context/frequencyFormCtx";

const LocationSearch = () => {
  const { handleChange } = useFrequencyFormData();
  return <LocationSearchScreen handleChange={handleChange} />;
};

export default LocationSearch;
