import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import { IconDimension } from "./IconTypes";

const Abhijeet = ({ width = scale(80), height = scale(62) }: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 80 62" fill="none">
      <Rect width="80" height="62" rx="8" fill="white" />
      <G clip-path="url(#clip0_28_3606)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M46.4323 35.9792C39.1213 35.9792 33.2162 30.0507 33.2162 22.7631C33.2162 30.0507 27.2876 35.9792 20 35.9792C27.2876 35.9792 33.2162 41.8843 33.2162 49.172C33.2162 41.8843 39.1213 35.9792 46.4323 35.9792Z"
          fill="#FFD93B"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M60.0001 42.7979C55.9931 42.7979 52.7593 39.5408 52.7593 35.5572C52.7593 39.5408 49.5022 42.7979 45.5186 42.7979C49.5022 42.7979 52.7593 46.0317 52.7593 50.0387C52.7593 46.0317 55.9931 42.7979 60.0001 42.7979Z"
          fill="#FFB030"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M55.8291 20.771C50.955 20.771 47.0183 16.8343 47.0183 11.9602C47.0183 16.8343 43.0816 20.771 38.2075 20.771C43.0816 20.771 47.0183 24.7077 47.0183 29.5818C47.0183 24.7077 50.955 20.771 55.8291 20.771Z"
          fill="#FFB030"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_28_3606">
          <Rect
            width="40"
            height="40"
            fill="white"
            transform="translate(20 11)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Abhijeet;
