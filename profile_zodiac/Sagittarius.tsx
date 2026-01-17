import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { Path } from "react-native-svg";
import { IconDimension } from "../IconTypes";

const Sagittarius = ({
  width = scale(36),
  height = scale(36),
}: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 36 36" fill="none">
      <Path
        d="M18.6031 0V2.8118H31.171L16.4068 17.6069L11.0916 12.2917L9.1033 14.2799L14.4206 19.5972L0.0341797 34.0139L2.02458 36L16.4089 21.5855L21.7564 26.933L23.7447 24.9448L18.3951 19.5952L33.1542 4.80509V18.0658H35.966V0H18.6031Z"
        fill="#F58EA8"
      />
    </Svg>
  );
};

export default Sagittarius;
