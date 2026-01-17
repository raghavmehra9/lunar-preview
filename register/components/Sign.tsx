import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, View } from "react-native";
import { AstrologyTypes } from "../Types";
import Taurus from "@/assets/svg/zodiac_sign/Taurus";

const SIGN_COLORS: Record<AstrologyTypes, string> = {
  Ascendant: "#FECBA4",
  Moon: "#AC99D3",
};

const Sign = ({ type }: { type: AstrologyTypes }) => {
  const dynamicBackgroundColor = { backgroundColor: SIGN_COLORS[type] };
  return (
    <View
      className="rounded-full items-center justify-end overflow-hidden"
      style={[styles.smallStyle, dynamicBackgroundColor]}
    >
      <Taurus width={scale(98)} height={scale(130)} />
    </View>
  );
};

export default Sign;

const styles = StyleSheet.create({
  smallStyle: {
    width: SCREEN_WIDTH / scale(1.6),
    height: SCREEN_WIDTH / scale(1.6),
  },
});
