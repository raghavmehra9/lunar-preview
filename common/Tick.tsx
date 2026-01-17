import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { Path } from "react-native-svg";
import { IconDimension } from "../IconTypes";

const Tick = ({ width = scale(13), height = scale(10) }: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 13 10" fill="none">
      <Path
        d="M5.16182 9.65459C5.05273 9.76426 4.90398 9.82551 4.7494 9.82551C4.59482 9.82551 4.44607 9.76426 4.33698 9.65459L1.04348 6.36051C0.701651 6.01868 0.701651 5.46451 1.04348 5.12326L1.4559 4.71084C1.79773 4.36901 2.35132 4.36901 2.69315 4.71084L4.7494 6.76709L10.3056 1.21084C10.6475 0.869009 11.2017 0.869009 11.5429 1.21084L11.9553 1.62326C12.2972 1.96509 12.2972 2.51926 11.9553 2.86051L5.16182 9.65459Z"
        fill="#3CC834"
      />
    </Svg>
  );
};

export default Tick;
