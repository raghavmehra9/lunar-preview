import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { Path } from "react-native-svg";
import { IconDimension } from "../IconTypes";

const FrequencyStars = ({
  width = scale(14),
  height = scale(8),
}: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 8" fill="none">
      <Path
        d="M4 0L5.41447 2.58553L8 4L5.41447 5.41447L4 8L2.58553 5.41447L0 4L2.58553 2.58553L4 0Z"
        fill="white"
      />
      <Path
        d="M12 0L12.7072 1.29277L14 2L12.7072 2.70723L12 4L11.2928 2.70723L10 2L11.2928 1.29277L12 0Z"
        fill="white"
      />
    </Svg>
  );
};

export default FrequencyStars;
