import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";
import { Subscription } from "./constants";

const CorePlan = ({
  data,
}: {
  data: Pick<Subscription, "price" | "duration">;
}) => {
  return (
    <View className="items-center" style={styles.textContainer}>
      <View className="bg-" style={styles.planBadge}>
        <Text className="font-Avenir-light text-white" style={styles.planText}>
          Core Plan
        </Text>
      </View>
      <Text className="text-white font-Avenir-black" style={styles.priceText}>
        ${data.price}
      </Text>
      <Text
        className="font-Avenir-regular text-white"
        style={styles.durationText}
      >
        {data?.duration}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    gap: scale(2),
  },
  planBadge: {
    paddingHorizontal: scale(10),
    paddingVertical: scale(5),
    borderRadius: scale(60),
    borderWidth: scale(1),
    borderColor: "#fff",
    alignSelf: "flex-start",
  },
  planText: {
    fontSize: scale(12),
  },
  priceText: {
    fontSize: scale(30),
  },
  durationText: {
    fontSize: scale(12),
  },
});

export default CorePlan;
