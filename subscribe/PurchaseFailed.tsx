import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { Path, Rect } from "react-native-svg";
import { IconDimension } from "../IconTypes";

const PurchaseFailed = ({
  width = scale(71),
  height = scale(71),
}: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 71 71" fill="none">
      <Rect
        x="0.5"
        y="0.5"
        width="70"
        height="70"
        rx="35"
        fill="#DB5C5C"
        fillOpacity="0.2"
      />
      <Path
        d="M23.5319 49.5005C23.0117 49.5005 22.4916 49.3022 22.0949 48.9056C21.3017 48.1124 21.3017 46.8258 22.0949 46.0317L46.0312 22.0963C46.8244 21.303 48.111 21.303 48.9051 22.0963C49.6983 22.8895 49.6983 24.1761 48.9051 24.9702L24.968 48.9056C24.5714 49.3022 24.052 49.5005 23.5319 49.5005Z"
        fill="#DB5C5C"
      />
      <Path
        d="M47.4673 49.4996C46.9472 49.4996 46.427 49.3013 46.0304 48.9047L22.0949 24.9684C21.3017 24.1752 21.3017 22.8886 22.0949 22.0946C22.8882 21.3013 24.1748 21.3013 24.9688 22.0946L48.9051 46.0308C49.6983 46.8241 49.6983 48.1106 48.9051 48.9047C48.5076 49.3013 47.9875 49.4996 47.4673 49.4996Z"
        fill="#DB5C5C"
      />
    </Svg>
  );
};

export default PurchaseFailed;
