import PercentageReveal from "@/assets/svg/cards/PercentageReveal";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";

const BackCard = ({ percentage }: { percentage: number }) => {
  return (
    <View className="relative" style={{ width: scale(257) }}>
      <PercentageReveal />
      <View className="absolute inset-0 justify-center items-center gap-2">
        <Text
          style={styles?.textStyle}
          className="font-Skillet-regular text-white"
        >
          Your luck is
        </Text>
        <Text
          style={styles?.percentageStyle}
          className="font-Skillet-regular text-white"
        >
          {percentage}%
        </Text>
        <Text
          style={styles?.textStyle}
          className="font-Skillet-regular text-white"
        >
          favorable today
        </Text>
      </View>
    </View>
  );
};

export default BackCard;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: scale(24),
  },
  percentageStyle: {
    fontSize: scale(50),
  },
});
