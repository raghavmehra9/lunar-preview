import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { Line, Mask, Rect } from "react-native-svg";
import { IconDimension } from "../IconTypes";

const Fixed = ({ width = scale(55), height = scale(55) }: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 55 55" fill="none">
      <Rect width="54.9163" height="54.9163" rx="27.4582" fill="#FAFAFB" />
      <Mask id="path-2-inside-1_899_1331" fill="white">
        <Rect x="13.958" y="13.9581" width="27" height="27" rx="1.24138" />
      </Mask>
      <Rect
        x="13.958"
        y="13.9581"
        width="27"
        height="27"
        rx="1.24138"
        stroke="#883D85"
        strokeWidth="3.10345"
        mask="url(#path-2-inside-1_899_1331)"
      />
      <Line
        x1="17.9927"
        y1="27.4581"
        x2="36.9237"
        y2="27.4581"
        stroke="#883D85"
        strokeWidth="1.55172"
      />
    </Svg>
  );
};

export default Fixed;
