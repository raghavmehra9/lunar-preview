import LeftDivider from "@/assets/svg/sso/LeftDivider";
import RightDivider from "@/assets/svg/sso/RightDivider";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { moderateScale, scale } from "@/utils/helpers/sizeMatters";
import { Text, View } from "react-native";

const Divider = () => {
  const dividerSize = SCREEN_WIDTH / moderateScale(2.5);
  return (
    <View
      className="flex-row items-center justify-between"
      style={{ marginVertical: scale(40) }}
    >
      <LeftDivider width={dividerSize} />
      <Text className="font-Avenir-book text-purple-jacarta">OR</Text>
      <RightDivider width={dividerSize} />
    </View>
  );
};
export default Divider;
