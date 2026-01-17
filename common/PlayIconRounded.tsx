import Svg, { Path } from "react-native-svg";
import { IconDimension } from "../IconTypes";
import { scale } from "@/utils/helpers/sizeMatters";

const PlayIconRounded = ({
  height = scale(32),
  width = scale(32),
}: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 31" fill="none">
      <Path
        d="M16 0.0379639C7.4397 0.0379639 0.5 6.75369 0.5 15.038C0.5 23.3222 7.4397 30.038 16 30.038C24.5603 30.038 31.5 23.3222 31.5 15.038C31.5 6.75369 24.5603 0.0379639 16 0.0379639ZM21.3572 15.8331L13.6072 20.5206C13.4504 20.6153 13.2721 20.663 13.0938 20.663C12.9322 20.663 12.7704 20.6241 12.624 20.5453C12.3161 20.3801 12.125 20.0665 12.125 19.7255V10.3505C12.125 10.0094 12.3161 9.69585 12.624 9.53062C12.932 9.36445 13.3085 9.37453 13.6072 9.55535L21.3572 14.2428C21.6403 14.4145 21.8125 14.7148 21.8125 15.038C21.8125 15.3611 21.6403 15.6615 21.3572 15.8331Z"
        fill="#F8A296"
      />
    </Svg>
  );
};

export default PlayIconRounded;
