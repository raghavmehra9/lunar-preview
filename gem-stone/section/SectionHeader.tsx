import Bullets from "@/assets/svg/gem-stone/Bullets";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";

type SectionProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionProps) => {
  return (
    <View className="flex-row items-center" style={styles?.sectionHeader}>
      <Bullets />
      <Text
        className="text-white font-Skillet-regular"
        style={styles?.sectionFontStyle}
      >
        {title}
      </Text>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  sectionHeader: {
    gap: scale(10),
  },
  sectionFontStyle: {
    fontSize: scale(22),
  },
});
