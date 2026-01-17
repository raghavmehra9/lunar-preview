import LocationSearchScreen from "@/components/LocationSearchScreen";
import { useOnBoardData } from "@/context/onBoardCtx";

const LocationSearch = () => {
  const { handleChange } = useOnBoardData();
  return <LocationSearchScreen handleChange={handleChange} />;
};

export default LocationSearch;
