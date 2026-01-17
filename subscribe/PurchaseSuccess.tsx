import Svg, { Path, Rect } from "react-native-svg";

import { scale } from "@/utils/helpers/sizeMatters";
import { IconDimension } from "../IconTypes";

const PurchaseSuccess = ({
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
        fill="#F8A296"
        fillOpacity="0.2"
      />
      <Path
        d="M54.052 22.4039C52.8481 21.1983 50.8931 21.1991 49.6875 22.4039L30.0441 42.0481L21.3134 33.3175C20.1079 32.1119 18.1537 32.1119 16.9481 33.3175C15.7426 34.5231 15.7426 36.4772 16.9481 37.6828L27.861 48.5956C28.4634 49.198 29.2533 49.5 30.0432 49.5C30.8332 49.5 31.6239 49.1988 32.2263 48.5956L54.052 26.7691C55.2576 25.5644 55.2576 23.6094 54.052 22.4039Z"
        fill="#F8A296"
      />
    </Svg>
  );
};

export default PurchaseSuccess;
