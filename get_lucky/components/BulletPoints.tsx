import { NavigationTheme } from "@/components/Types";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";

const BulletPoints = ({
  points,
  index,
  type = "purple",
}: {
  points: string;
  index: number;
  type?: NavigationTheme;
}) => {
  const COLOR = {
    purple: {
      color: "#836C8F",
    },
    white: {
      color: "#fff",
    },
  };
  const dynamicBackgroundColor = { backgroundColor: COLOR[type]?.color };
  const dynamicColor = { color: COLOR[type]?.color };
  return (
    <View className="flex-row" key={index}>
      <View
        className="bg-purple-frenchLilac"
        style={[styles?.bulletPoints, dynamicBackgroundColor]}
      />
      <Text
        className="font-Avenir-light text-purple-frenchLilac"
        style={[styles?.points, dynamicColor]}
      >
        {points}
      </Text>
    </View>
  );
};

export default BulletPoints;

const styles = StyleSheet.create({
  bulletPoints: {
    width: scale(7),
    height: scale(7),
    borderRadius: scale(20),
    marginTop: scale(5),
    marginRight: scale(10),
  },
  points: {
    fontSize: scale(14),
  },
});
