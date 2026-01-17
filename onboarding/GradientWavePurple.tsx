import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { Path } from "react-native-svg";

const GradientWavePurple = ({ width = scale(411), height = scale(361) }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 411 361" fill="none">
      <Path
        d="M439.696 88.3216C491.207 114.222 517.696 159.844 521.952 215.451C534.972 385.471 314.606 393.559 268.596 343.437C182.327 249.459 227.638 259.597 11.1365 250.969C-88.7746 246.988 -158.878 73.6138 10.9579 10.6425C26.0199 5.05763 43.841 2.28583 61.8086 1.06245C105.025 -1.88052 140.966 15.1365 175.089 33.7438C212.21 53.9859 241.009 80.4355 298.568 80.4332C356.126 80.4309 387.168 61.9102 439.696 88.3216Z"
        fill="#80367D"
      />
    </Svg>
  );
};

export default GradientWavePurple;
