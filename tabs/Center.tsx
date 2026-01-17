import { IconDimension } from "@/assets/svg/IconTypes";
import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const Center = ({ width = scale(65), height = scale(65) }: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Rect x="3" y="3" width="74" height="74" rx="37" fill="#CA6DC6" />
      <Rect
        x="3"
        y="3"
        width="74"
        height="74"
        rx="37"
        stroke="#E3B6E2"
        strokeWidth="6"
      />
      <G clipPath="url(#clip0_1506_6016)">
        <Path
          d="M40 20C39.1083 38.375 38.375 39.1083 20 40C38.375 40.8917 39.1083 41.625 40 60C40.8917 41.625 41.625 40.8917 60 40C41.625 39.1083 40.8917 38.375 40 20Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1506_6016">
          <Rect
            width="30"
            height="30"
            fill="white"
            transform="translate(25 25)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Center;
