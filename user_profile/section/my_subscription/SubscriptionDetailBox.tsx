import { scale } from "@/utils/helpers/sizeMatters";
import React from "react";
import { DimensionValue, StyleSheet, Text, View } from "react-native";

// Define Props Interface
interface SubscriptionDetailBoxProps {
  width?: DimensionValue;
  data: { label: string; value: string };
}

const SubscriptionDetailBox: React.FC<SubscriptionDetailBoxProps> = ({
  width = "100%",
  data,
}) => {
  const dynamicWidth = { width };

  return (
    <View
      style={[styles.container, dynamicWidth]}
      className="bg-grey-brightGrey"
    >
      <Text
        style={styles.label}
        className="text-purple-frenchLilac font-Avenir-regular"
      >
        {data?.label}
      </Text>
      <Text
        style={styles.value}
        className="font-Avenir-regular text-purple-jacarta"
      >
        {data?.value}
      </Text>
    </View>
  );
};

export default SubscriptionDetailBox;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: scale(10),
    borderRadius: scale(8),
  },
  label: {
    fontSize: scale(12),
  },
  value: {
    fontSize: scale(16),
  },
});
