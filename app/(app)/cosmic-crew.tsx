import CosmicCrewScreen from "@/components/cosmic_crew/CosmicCrewScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const CosmicCrew = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CosmicCrewScreen />
    </GestureHandlerRootView>
  );
};

export default CosmicCrew;
