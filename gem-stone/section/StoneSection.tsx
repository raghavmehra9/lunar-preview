import { StyleSheet, Text, View } from "react-native";

import { SCREEN_WIDTH } from "@/constants/Spacing";
import { STONES } from "@/constants/Stone";
import { scale } from "@/utils/helpers/sizeMatters";
import { SingleGemDetails } from "../Types";
import EmptyFragment from "@/components/EmptyFragment";

const StoneSection = ({ data }: { data: SingleGemDetails }) => {
  const Icon = STONES[data?.name] ?? EmptyFragment;
  return (
    <View className="bg-white" style={styles?.StoneSection}>
      <Icon width={scale(62)} height={scale(62)} />
      <Text
        className="text-brand-primary font-Skillet-regular"
        style={styles?.fontStyle}
      >
        {data?.name}
      </Text>
    </View>
  );
};

export default StoneSection;

const styles = StyleSheet.create({
  StoneSection: {
    gap: scale(12),
    alignItems: "center",
    borderRadius: scale(14),
    paddingVertical: scale(20),
    width: SCREEN_WIDTH - scale(20 * 2),
  },
  fontStyle: {
    fontSize: scale(26),
  },
});
