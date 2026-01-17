import { scale } from "@/utils/helpers/sizeMatters";
import Svg, {
  Defs,
  FeBlend,
  FeColorMatrix,
  FeComposite,
  FeFlood,
  FeGaussianBlur,
  FeOffset,
  Filter,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const AudioPlay = ({ width = scale(76), height = scale(76) }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 76 76" fill="none">
      <G filter="url(#filter0_d_964_3751)">
        <Path
          d="M73.25 38C73.25 57.33 57.58 73 38.25 73C18.92 73 3.25 57.33 3.25 38C3.25 18.67 18.92 3 38.25 3C57.58 3 73.25 18.67 73.25 38Z"
          fill="url(#paint0_linear_964_3751)"
        />
      </G>
      <Path
        d="M28.2491 26.75L28.2491 49.25C28.249 49.4631 28.3034 49.6727 28.4071 49.8588C28.5108 50.045 28.6604 50.2016 28.8416 50.3137C29.0228 50.4258 29.2297 50.4897 29.4426 50.4993C29.6554 50.5089 29.8673 50.464 30.0579 50.3688L52.5579 39.1188C52.7516 39.0033 52.912 38.8394 53.0234 38.6433C53.1348 38.4472 53.1934 38.2255 53.1934 38C53.1934 37.7745 53.1348 37.5528 53.0234 37.3567C52.912 37.1606 52.7516 36.9968 52.5579 36.8813L30.0579 25.6313C29.8673 25.536 29.6554 25.4911 29.4426 25.5007C29.2297 25.5103 29.0228 25.5742 28.8416 25.6863C28.6604 25.7984 28.5108 25.955 28.4071 26.1412C28.3034 26.3273 28.249 26.5369 28.2491 26.75ZM49.2041 38L30.7491 47.2275L30.7491 28.7725L49.2041 38Z"
        fill="white"
      />
      <Defs>
        <Filter
          id="filter0_d_964_3751"
          x="0.75"
          y="0.5"
          width="75"
          height="75"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset />
          <FeGaussianBlur stdDeviation="1.25" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0.876841 0 0 0 0 0.538249 0 0 0 0 0.766281 0 0 0 1 0"
          />
          <FeBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_964_3751"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_964_3751"
            result="shape"
          />
        </Filter>
        <LinearGradient
          id="paint0_linear_964_3751"
          x1="24.5"
          y1="-7.625"
          x2="24.5"
          y2="62.375"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#DFA4DD" />
          <Stop offset="1" stopColor="#883D85" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default AudioPlay;
