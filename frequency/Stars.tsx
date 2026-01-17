import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import { IconDimension } from "../IconTypes";

const Stars = ({ width = scale(18), height = scale(19) }: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 19" fill="none">
      <G clipPath="url(#clip0_964_3759)">
        <Path
          d="M6.66271 1.0191C5.77297 5.85208 5.05169 6.57332 0.21875 7.46306C5.05173 8.3528 5.77297 9.07404 6.66271 13.907C7.55244 9.07404 8.27369 8.3528 13.1067 7.46306C8.27369 6.57332 7.5524 5.85208 6.66271 1.0191Z"
          fill="#FECBA4"
        />
        <Path
          d="M13.6567 10.0855C13.0909 13.1591 12.6321 13.6178 9.55859 14.1836C12.6321 14.7494 13.0909 15.2082 13.6567 18.2817C14.2225 15.2082 14.6813 14.7494 17.7548 14.1836C14.6812 13.6178 14.2225 13.1591 13.6567 10.0855Z"
          fill="#FECBA4"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_964_3759">
          <Rect
            width="17.536"
            height="17.536"
            fill="white"
            transform="translate(0.21875 0.880432)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Stars;
