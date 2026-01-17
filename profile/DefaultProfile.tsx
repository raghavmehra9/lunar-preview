import Svg, {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from "react-native-svg";

import { scale } from "@/utils/helpers/sizeMatters";
import { IconDimension } from "../IconTypes";

const DefaultProfile = ({
  width = scale(100),
  height = scale(100),
}: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
      <G clipPath="url(#clip0_549_485)">
        <Path
          d="M99.375 50C99.375 77.2691 77.2691 99.375 50 99.375C22.7309 99.375 0.625 77.2691 0.625 50C0.625 22.7309 22.7309 0.625 50 0.625C77.2691 0.625 99.375 22.7309 99.375 50Z"
          fill="url(#paint0_linear_549_485)"
          stroke="white"
          strokeWidth="1.25"
        />
        <Path
          d="M64.6484 32.4219C64.6484 24.3447 58.0771 17.7734 50 17.7734C41.9229 17.7734 35.3516 24.3447 35.3516 32.4219C35.3516 40.499 41.9229 47.0703 50 47.0703C58.0771 47.0703 64.6484 40.499 64.6484 32.4219ZM50 47.0703C35.4611 47.0703 23.6328 58.8986 23.6328 73.4375V76.1832C23.6328 77.016 23.9871 77.8094 24.6074 78.365C31.7437 84.7596 40.7617 88.2812 50 88.2812C59.2385 88.2812 68.2564 84.7596 75.3926 78.365C76.0129 77.8094 76.3672 77.0158 76.3672 76.1832V73.4375C76.3672 58.8986 64.5389 47.0703 50 47.0703Z"
          fill="white"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_549_485"
          x1="58.8089"
          y1="12.0628"
          x2="3.00165"
          y2="38.8289"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#713385" />
          <Stop offset="1" stopColor="#3E1F48" />
        </LinearGradient>
        <ClipPath id="clip0_549_485">
          <Rect width="100" height="100" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default DefaultProfile;
