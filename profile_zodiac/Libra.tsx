import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { Path } from "react-native-svg";
import { IconDimension } from "../IconTypes";

const Libra = ({ width = scale(36), height = scale(36) }: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 36 36" fill="none">
      <Path
        d="M0 30.5508H36V33.3633H0V30.5508ZM27.3973 23.5898C29.4176 21.315 30.5859 18.344 30.5859 15.2227C30.5859 8.28274 24.9399 2.63672 18 2.63672C11.0601 2.63672 5.41406 8.28274 5.41406 15.2227C5.41406 18.3435 6.58301 21.3147 8.604 23.5898H0V26.4023H13.8516V24.1114L13.1453 23.7061C10.1113 21.965 8.22656 18.7143 8.22656 15.2227C8.22656 9.83355 12.6109 5.44922 18 5.44922C23.3891 5.44922 27.7734 9.83355 27.7734 15.2227C27.7734 18.7149 25.8894 21.9656 22.8565 23.7061L22.1707 24.0996L22.1122 26.4023H36V23.5898H27.3973Z"
        fill="#AC99D3"
      />
    </Svg>
  );
};

export default Libra;
