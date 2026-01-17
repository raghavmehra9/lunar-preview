import ClockIcon from "@/assets/svg/onboarding/ClockIcon";
import DateIcon from "@/assets/svg/onboarding/DateIcon";
import EarthIcon from "@/assets/svg/onboarding/EarthIcon";
import { View } from "react-native";

type type = "date" | "earth" | "clock";
type state = "active" | "disabled";

const InputIcon = ({
  type = "date",
  state = "active",
}: {
  type: type;
  state?: state;
}) => {
  const types = {
    date: DateIcon,
    earth: EarthIcon,
    clock: ClockIcon,
  };

  const ICON = types[type] || null;

  const buttonType: Record<state, string> = {
    disabled: "#F3E9F3",
    active: "#fff",
  };

  const dynamicColor = { backgroundColor: buttonType[state] };

  return (
    <View
      className="bg-white rounded-full p-5 items-center"
      style={dynamicColor}
    >
      {ICON && <ICON />}
    </View>
  );
};

export default InputIcon;
