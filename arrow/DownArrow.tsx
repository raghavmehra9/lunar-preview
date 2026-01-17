import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { Path } from "react-native-svg";
import { IconDimension } from "../IconTypes";

const DownArrow = ({
  width = scale(16),
  height = scale(10),
}: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 10" fill="none">
      <Path
        d="M8.57107 9.17087L15.7638 1.97575C16.0787 1.66003 16.0787 1.14852 15.7638 0.832003C15.4489 0.516286 14.9374 0.516286 14.6225 0.832003L8.00043 7.45642L1.37841 0.8328C1.06349 0.517083 0.551973 0.517083 0.236257 0.8328C-0.0786648 1.14852 -0.0786648 1.66083 0.236257 1.97654L7.42899 9.17167C7.74066 9.48261 8.26021 9.48261 8.57107 9.17087Z"
        fill="#883D85"
      />
    </Svg>
  );
};

export default DownArrow;
