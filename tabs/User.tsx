import { IconDimension } from "@/assets/svg/IconTypes";
import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { Path } from "react-native-svg";

const User = ({
  width = scale(25),
  height = scale(23),
  color = "#B9A3C4",
}: IconDimension & { color: string }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 23 23" fill="none">
      <Path
        d="M11.4993 11.4999C14.0307 11.4999 16.0827 9.44789 16.0827 6.91659C16.0827 4.38528 14.0307 2.33325 11.4993 2.33325C8.96804 2.33325 6.91602 4.38528 6.91602 6.91659C6.91602 9.44789 8.96804 11.4999 11.4993 11.4999Z"
        stroke={color}
        strokeWidth="1.375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.3733 20.6667C19.3733 17.1192 15.8442 14.25 11.4992 14.25C7.15416 14.25 3.625 17.1192 3.625 20.6667"
        stroke={color}
        strokeWidth="1.375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default User;
