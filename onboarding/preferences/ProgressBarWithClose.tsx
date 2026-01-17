import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale } from "@/utils/helpers/sizeMatters";

type Props = {
  totalSteps: number;
  currentStep: number;
  onClose?: () => void;
};

const ProgressBarWithClose: React.FC<Props> = ({
  totalSteps,
  currentStep,
  onClose,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        {Array.from({ length: totalSteps }).map((_, idx) => (
          <View
            key={idx}
            style={[
              styles.step,
              idx < currentStep ? styles.activeStep : styles.inactiveStep,
            ]}
          />
        ))}
      </View>

      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Ionicons name="close" size={22} color="#7B1FA2" />
      </TouchableOpacity>
    </View>
  );
};

export default ProgressBarWithClose;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    gap: scale(10),
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  step: {
    flex: 1,
    height: scale(6),
    borderRadius: scale(5),
    marginHorizontal: scale(4),
  },
  activeStep: {
    backgroundColor: "#d19ade",
  },
  inactiveStep: {
    backgroundColor: "#ffffff",
  },
  closeButton: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(16),
    borderWidth: 2,
    borderColor: "#7B1FA2",
    justifyContent: "center",
    alignItems: "center",
  },
});
