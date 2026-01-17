import { SCREEN_WIDTH } from "@/constants/Spacing";
import { COLOR_MAPPER } from "@/constants/Stone";
import { useGemStone } from "@/context/gemstoneCtx";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";
import SectionHeader from "./SectionHeader";

const WornSection = ({ wornBy }: { wornBy: string }) => {
  const { activeStone } = useGemStone();
  const sectionBackgroundColor = {
    backgroundColor: COLOR_MAPPER[activeStone].section,
  };
  return (
    <View style={[styles?.wornSection, sectionBackgroundColor]}>
      <SectionHeader title="Worn By" />
      <Text
        style={styles?.wornDetails}
        className="text-white font-Avenir-regular"
      >
        {wornBy}
      </Text>
    </View>
  );
};

export default WornSection;

const styles = StyleSheet.create({
  wornSection: {
    padding: scale(20),
    gap: scale(10),
    borderRadius: scale(14),
    paddingVertical: scale(20),
    width: SCREEN_WIDTH - scale(20 * 2),
  },
  wornDetails: {
    fontSize: scale(14),
  },
});
