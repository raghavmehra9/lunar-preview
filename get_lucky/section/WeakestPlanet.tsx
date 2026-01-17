import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";
import PlanetStrengthSection from "../components/PlanetStrengthSection";
import { WeakestPlanet } from "../Types";

const WeakestPlanetSection = ({
  title,
  data,
}: {
  title: string;
  data: WeakestPlanet[];
}) => {
  return (
    <View style={styles?.card} className="bg-purple-africanVoilet">
      <Text
        className="text-center text-white font-Skillet-regular"
        style={styles?.titleStyle}
      >
        {title}
      </Text>
      {data?.map((weakPlanet, index) => (
        <PlanetStrengthSection
          type="weak"
          data={weakPlanet}
          index={index}
          count={data?.length - 1}
        />
      ))}
    </View>
  );
};

export default WeakestPlanetSection;

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
