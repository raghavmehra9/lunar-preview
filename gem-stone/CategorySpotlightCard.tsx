import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import LeftArrow from "@/assets/svg/arrow/LeftArrow";
import RightArrow from "@/assets/svg/arrow/RightArrow";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { GemStoneCategory, IconButtonProps } from "./Types";
import { useGemStone } from "@/context/gemstoneCtx";
import { COLOR_MAPPER } from "@/constants/Stone";

const STONEHEADING: Record<GemStoneCategory, string> = {
  "Fortune Stone": "For Good Fortune & Opportunities",
  "Life Stone": "For Support in All Areas of Life",
  "Lucky Stone": "For Good Luck & Material Success",
};

const CategorySpotlightCard = () => {
  const { activeStone, changeCurrentStone } = useGemStone();
  const dynamicBackgroundColor = {
    backgroundColor: COLOR_MAPPER[activeStone].background,
  };

  return (
    <View className="flex-row justify-between items-center">
      <IconButton
        icon={<LeftArrow />}
        onPress={() => changeCurrentStone("previous")}
      />
      <View
        style={[styles.card, dynamicBackgroundColor]}
        className={`items-center border-white`}
      >
        <Text
          style={styles.cardText}
          className="font-Skillet-regular text-white text-center"
        >
          {STONEHEADING[activeStone]}
        </Text>
      </View>
      <IconButton
        icon={<RightArrow />}
        onPress={() => changeCurrentStone("next")}
      />
    </View>
  );
};

const IconButton = ({ icon, onPress }: IconButtonProps) => (
  <TouchableOpacity style={styles?.arrowTouchableArea} onPress={onPress}>
    {icon}
  </TouchableOpacity>
);

export default CategorySpotlightCard;

const styles = StyleSheet.create({
  card: {
    width: SCREEN_WIDTH - scale(48 * 2),
    borderWidth: scale(5),
    borderRadius: scale(15),
    paddingVertical: scale(15),
    paddingHorizontal: scale(7),
  },
  cardText: {
    fontSize: scale(26),
  },
  arrowTouchableArea: {
    paddingVertical: scale(6),
    paddingHorizontal: scale(10),
  },
});
