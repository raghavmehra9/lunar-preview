import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";
import PlanetStrengthSection from "../components/PlanetStrengthSection";
import { StrongestPlanet } from "../Types";

const StrongestPlanetSection = ({
  title,
  data,
}: {
  title: string;
  data: StrongestPlanet[];
}) => {
  return (
    <View style={styles?.card} className="bg-pink-pinkSherbet">
      <Text
        className="text-center text-white font-Skillet-regular"
        style={styles?.titleStyle}
      >
        {title}
      </Text>
      {data?.map((strongPlanet, index) => (
        <PlanetStrengthSection
          data={strongPlanet}
          index={index}
          count={data?.length - 1}
          type="strong"
        />
      ))}
    </View>
  );
};

export default StrongestPlanetSection;

const styles = StyleSheet.create({
  card: {
    gap: scale(10),
    padding: scale(20),
    borderRadius: scale(10),
  },
  titleStyle: {
    fontSize: scale(22),
  },
});
