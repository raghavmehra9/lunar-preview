import { View } from "react-native";
import DetailsSection from "./DetailsSection";
import StrongestPlanetSection from "./StrongestPlanetSection";
import { LuckyUnLuckyResponse } from "../Types";
import WeakestPlanetSection from "./WeakestPlanet";
import { scale } from "@/utils/helpers/sizeMatters";

const LuckyUnLuckyDetails = ({ data }: { data: LuckyUnLuckyResponse }) => {
  return (
    <View style={{ gap: scale(40) }}>
      <DetailsSection data={data?.data?.details} />
      <StrongestPlanetSection
        title=" Strongest Planet for the day:"
        data={data?.data?.strongest_planets}
      />
      <WeakestPlanetSection
        title=" Weakest Planet for the day:"
        data={data?.data?.weakest_planets}
      />
    </View>
  );
};

export default LuckyUnLuckyDetails;
