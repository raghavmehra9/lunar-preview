import { PLANETS } from "@/constants/LuckyUnLucky";
import { ELEMENT, MODALITY } from "@/constants/Report";
import { scale } from "@/utils/helpers/sizeMatters";
import { Text, View } from "react-native";
import EmptyFragment from "../EmptyFragment";
import { ElementProps } from "../report/Types";

const ElementCard = (props: ElementProps) => {
  const { cardTitle, icon } = props;
  const ElementsIcon = cardTitle === "Element" ? ELEMENT[icon] : EmptyFragment;
  const PlanetIcon = cardTitle === "Ruled By" ? PLANETS[icon] : EmptyFragment;
  const ModalityIcon =
    cardTitle === "Modality" ? MODALITY[icon] : EmptyFragment;

  const ICON =
    cardTitle === "Element"
      ? ElementsIcon
      : cardTitle === "Modality"
      ? ModalityIcon
      : cardTitle === "Ruled By"
      ? PlanetIcon
      : EmptyFragment;

  return (
    <View
      style={{
        flex: 1,
        padding: scale(8),
        borderRadius: scale(10),
        gap: scale(5),
      }}
      className="bg-purple-platinum w-full justify-center items-center"
    >
      <Text style={{ fontSize: scale(10) }} className="font-Avenir-regular">
        {cardTitle}
      </Text>
      <ICON width={scale(45)} height={scale(45)} />
      <Text
        className="font-Skillet-regular text-purple-jacarta"
        style={{ fontSize: scale(18) }}
      >
        {icon}
      </Text>
    </View>
  );
};

export default ElementCard;
