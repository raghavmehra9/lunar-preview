import { scale } from "@/utils/helpers/sizeMatters";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ReasonProps {
  reasonData: { id: string; message: string };
  onPress: (id: string) => void;
  isSelected: boolean;
}

const Reason: React.FC<ReasonProps> = ({ reasonData, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      className="flex-row "
      onPress={() => onPress(reasonData.id)}
      activeOpacity={0.7}
    >
      {/* Custom Radio Button */}
      <View
        className="border-purple-jacarta"
        style={[styles.radioButton, isSelected && styles.radioSelected]}
      >
        {isSelected && (
          <View className="bg-purple-jacarta" style={styles.innerCircle} />
        )}
      </View>

      {/* Reason Text */}
      <Text
        className="font-Avenir-regular text-purple-jacarta"
        style={styles.reasonText}
      >
        {reasonData.message?.trim()}
      </Text>
    </TouchableOpacity>
  );
};

export default Reason;

const styles = StyleSheet.create({
  radioButton: {
    width: scale(18),
    height: scale(18),
    borderRadius: scale(10),
    borderWidth: scale(2),
    justifyContent: "center",
    alignItems: "center",
    marginRight: scale(10),
  },
  radioSelected: {
    backgroundColor: "white",
  },
  innerCircle: {
    width: scale(10),
    height: scale(10),
    borderRadius: scale(5),
  },
  reasonText: {
    fontSize: scale(14),
  },
});
