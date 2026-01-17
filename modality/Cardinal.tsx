import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { Circle, Path, Rect } from "react-native-svg";

const Cardinal = ({ width = scale(55), height = scale(55) }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 55 55" fill="none">
      <Rect width="54.9163" height="54.9163" rx="27.4582" fill="#FAFAFB" />
      <Path
        d="M14.2134 42.1688L27.5589 12.6559"
        stroke="#883D85"
        strokeWidth="1.55817"
        strokeLinecap="round"
      />
      <Path
        d="M40.6475 42.2609L27.5588 12.6555"
        stroke="#883D85"
        strokeWidth="1.55817"
        strokeLinecap="round"
      />
      <Circle cx="27.4033" cy="38.3647" r="2.6489" fill="#883D85" />
    </Svg>
  );
};

export default Cardinal;
