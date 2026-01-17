import Svg, { Circle, Rect } from "react-native-svg";

import { IconDimension } from "./IconTypes";

const RadioCircle = ({ width = 10, height = 10 }: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 10 10" fill="none">
      <Rect
        x="0.517477"
        y="0.655172"
        width="8.96552"
        height="8.96552"
        rx="4.48276"
        stroke="#ECD6EB"
        strokeWidth="0.689655"
      />
      <Circle cx="5.00032" cy="5.13792" r="2.75862" fill="white" />
    </Svg>
  );
};

export default RadioCircle;
