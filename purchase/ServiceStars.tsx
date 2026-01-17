import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { Path } from "react-native-svg";
import { IconDimension } from "../IconTypes";

const ServiceStars = ({
  width = scale(22),
  height = scale(22),
}: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
      <Path
        d="M17.2508 11.5213L17.5968 14.8254L19.5857 17.3221L16.438 17.852L13.9738 20.0803L13.6278 16.7761L11.6389 14.2795L14.7866 13.7495L17.2508 11.5213Z"
        fill="white"
      />
      <Path
        d="M3.9947 0.838105L4.18532 2.65843L5.28108 4.03387L3.54693 4.32584L2.18938 5.55343L1.99876 3.73311L0.903001 2.35766L2.63715 2.06569L3.9947 0.838105Z"
        fill="white"
      />
    </Svg>
  );
};

export default ServiceStars;
