import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PastSubscriptionDivider: React.FC = () => {
  return (
    <View
      style={styles.container}
      className="flex-row items-center overflow-hidden"
    >
      <Text className="text-purple-frenchLilac" style={styles.text}>
        Past subscriptions
      </Text>
      <View className="border-purple-lavender" style={styles.divider} />
    </View>
  );
};

export default PastSubscriptionDivider;

const styles = StyleSheet.create({
  container: {
    gap: scale(10),
  },
  text: {
    fontSize: scale(12),
  },
  divider: {
    borderWidth: scale(0.25),
    width: SCREEN_WIDTH,
    height: scale(0),
  },
});
