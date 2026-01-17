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
  Path,
  RadialGradient,
  Stop,
} from "react-native-svg";
import { IconDimension } from "../IconTypes";

const NewMoon = ({
  width = scale(180),
  height = scale(180),
}: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 180 180" fill="none">
      <G opacity="0.4" filter="url(#filter0_d_1003_8451)">
        <Path
          d="M86 156C124.66 156 156 124.66 156 86C156 47.3401 124.66 16 86 16C47.3401 16 16 47.3401 16 86C16 124.66 47.3401 156 86 156Z"
          fill="url(#paint0_radial_1003_8451)"
          fillOpacity="0.3"
          shape-rendering="crispEdges"
        />
        <Path
          d="M155.5 86C155.5 124.384 124.384 155.5 86 155.5C47.6162 155.5 16.5 124.384 16.5 86C16.5 47.6162 47.6162 16.5 86 16.5C124.384 16.5 155.5 47.6162 155.5 86Z"
          stroke="#61147B"
          shape-rendering="crispEdges"
        />
      </G>
      <Defs>
        <Filter
          id="filter0_d_1003_8451"
          x="0"
          y="0"
          width="180"
          height="180"
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
          <FeOffset dx="4" dy="4" />
          <FeGaussianBlur stdDeviation="10" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0.237396 0 0 0 0 0.0785896 0 0 0 0 0.287217 0 0 0 0.4 0"
          />
          <FeBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1003_8451"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1003_8451"
            result="shape"
          />
        </Filter>
        <RadialGradient
          id="paint0_radial_1003_8451"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(86 85.9998) scale(70.0001 70.0001)"
        >
          <Stop offset="0.33" stopColor="white" />
          <Stop offset="1" stopColor="white" stopOpacity="0" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};

export default NewMoon;
