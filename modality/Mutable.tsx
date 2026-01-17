import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import { IconDimension } from "../IconTypes";

const Mutable = ({ width = scale(55), height = scale(55) }: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 55 55" fill="none">
      <Rect width="54.9163" height="54.9163" rx="27.4582" fill="#FAFAFB" />
      <Path
        d="M13.958 29.1076C17.2166 16.5386 36.9235 17.1593 40.958 29.1076"
        stroke="#883D85"
        strokeWidth="1.86207"
        strokeLinecap="round"
      />
      <Circle cx="27.4579" cy="32.5213" r="2.48276" fill="#883D85" />
    </Svg>
  );
};

export default Mutable;
