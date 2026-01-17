import { ScrollView, StyleSheet } from "react-native";

import GemstoneHolding from "@/assets/svg/gem-stone/GemstoneHolding";
import { COLOR_MAPPER } from "@/constants/Stone";
import { useGemStone } from "@/context/gemstoneCtx";
import { scale } from "@/utils/helpers/sizeMatters";
import AboutSection from "./section/AboutSection";
import StoneSection from "./section/StoneSection";
import WornSection from "./section/WornSection";
import { GemStoneDetailsProps } from "./Types";

const GemStoneDetails = ({ data }: GemStoneDetailsProps) => {
  const { activeStone } = useGemStone();
  const sectionBackgroundColor = {
    backgroundColor: COLOR_MAPPER[activeStone].background,
  };
  return (
    <ScrollView
      style={[styles.wrapper, sectionBackgroundColor]}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles?.containerStyle}
    >
      <StoneSection data={data[activeStone]} />
      <AboutSection data={data[activeStone]} />
      <WornSection wornBy={data[activeStone]?.worn_by} />
      <GemstoneHolding />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
    gap: scale(20),
  },
  wrapper: {
    flex: 1,
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    paddingVertical: scale(18),
    paddingHorizontal: scale(10),
  },
});

export default GemStoneDetails;
