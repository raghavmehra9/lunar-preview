import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { Path } from "react-native-svg";
import { IconDimension } from "../IconTypes";

const Gem = ({ width = scale(46), height = scale(55) }: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 46 55" fill="none">
      <Path
        d="M18.8888 11.3512L35.3835 5.79569L38.3339 23.0042L26.3116 43.4561L9.86256 48.9667L6.83865 31.604L18.8888 11.3512Z"
        fill="#FFA4A4"
      />
      <Path
        d="M11.4764 34.3405L9.93092 48.9041L21.6887 40.3497L11.4764 34.3405Z"
        fill="#FFCCCC"
      />
      <Path
        d="M18.8888 11.3512L23.6287 14.1714L35.3835 5.79569L18.8888 11.3512Z"
        fill="#FFCCCC"
      />
      <Path
        d="M35.4082 5.90234L33.6576 20.233L38.2857 23.0874L35.4082 5.90234Z"
        fill="#FF8080"
      />
      <Path
        opacity="0.51"
        d="M33.6579 20.233L23.5 14.1892L11.5011 34.3559L21.6591 40.3997L33.6579 20.233Z"
        fill="#FFCCCC"
      />
      <Path
        d="M9.93025 48.9043L26.3124 43.4562L21.5321 40.612L9.93025 48.9043Z"
        fill="#FF8080"
      />
      <Path
        opacity="0.48"
        d="M6.83984 31.604L11.4914 34.3716L9.93062 48.9042L6.83984 31.604Z"
        fill="#FF8080"
      />
    </Svg>
  );
};

export default Gem;
