import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";

const FeaturePoints = ({
  feature,
  bullet = true,
  dash = false,
}: {
  feature: string;
  bullet?: boolean;
  dash?: boolean;
}) => (
  <View className="flex-row items-center" style={styles.bulletPoints}>
    {bullet ? (
      <View className="bg-purple-jacarta" style={styles.bullets} />
    ) : dash ? (
      <View
        className="bg-purple-jacarta"
        style={{
          width: scale(5),
          height: scale(1),
          marginTop: scale(7),
          alignSelf: "flex-start",
        }}
      />
    ) : (
      <></>
    )}
    <Text
      className="font-Avenir-light text-purple-jacarta"
      style={styles.featureTextStyle}
    >
      {feature}
    </Text>
  </View>
);

export default FeaturePoints;

const styles = StyleSheet.create({
  bullets: {
    width: scale(5),
    height: scale(5),
    borderRadius: scale(20),
    marginTop: scale(5),
    backgroundColor: "black",
    alignSelf: "flex-start",
  },
  bulletPoints: { gap: scale(5), marginBottom: scale(5) },
  featureTextStyle: { fontSize: scale(12) },
});
