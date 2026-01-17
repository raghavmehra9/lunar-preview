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

import { scale } from "@/utils/helpers/sizeMatters";
import { IconDimension } from "../IconTypes";

const Pause = ({ width = scale(76), height = scale(76) }: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 76 76" fill="none">
      <G filter="url(#filter0_d_1308_1761)">
        <Path
          d="M73 38C73 57.33 57.33 73 38 73C18.67 73 3 57.33 3 38C3 18.67 18.67 3 38 3C57.33 3 73 18.67 73 38Z"
          fill="url(#paint0_linear_1308_1761)"
        />
      </G>
      <Path
        d="M28.375 23.1562C27.339 23.1562 26.3454 23.5678 25.6129 24.3004C24.8803 25.0329 24.4688 26.0265 24.4688 27.0625V48.9375C24.4688 49.9735 24.8803 50.9671 25.6129 51.6996C26.3454 52.4322 27.339 52.8438 28.375 52.8438H31.5C32.536 52.8438 33.5296 52.4322 34.2621 51.6996C34.9947 50.9671 35.4063 49.9735 35.4063 48.9375V27.0625C35.4063 26.0265 34.9947 25.0329 34.2621 24.3004C33.5296 23.5678 32.536 23.1562 31.5 23.1562H28.375ZM33.8438 27.0625V48.9375C33.8438 49.5591 33.5968 50.1552 33.1573 50.5948C32.7177 51.0343 32.1216 51.2812 31.5 51.2812H28.375C27.7534 51.2812 27.1573 51.0343 26.7177 50.5948C26.2782 50.1552 26.0313 49.5591 26.0313 48.9375V27.0625C26.0313 26.4409 26.2782 25.8448 26.7177 25.4052C27.1573 24.9657 27.7534 24.7188 28.375 24.7188H31.5C32.1216 24.7188 32.7177 24.9657 33.1573 25.4052C33.5968 25.8448 33.8438 26.4409 33.8438 27.0625Z"
        fill="white"
      />
      <Path
        d="M44 52.8438H47.125C47.638 52.8438 48.1459 52.7427 48.6199 52.5464C49.0938 52.3501 49.5244 52.0624 49.8871 51.6996C50.2499 51.3369 50.5376 50.9063 50.7339 50.4324C50.9302 49.9584 51.0313 49.4505 51.0313 48.9375V27.0625C51.0313 26.5495 50.9302 26.0416 50.7339 25.5676C50.5376 25.0937 50.2499 24.6631 49.8871 24.3004C49.5244 23.9376 49.0938 23.6499 48.6199 23.4536C48.1459 23.2573 47.638 23.1562 47.125 23.1562H44C42.964 23.1562 41.9704 23.5678 41.2379 24.3004C40.5053 25.0329 40.0938 26.0265 40.0938 27.0625V48.9375C40.0938 49.9735 40.5053 50.9671 41.2379 51.6996C41.9704 52.4322 42.964 52.8438 44 52.8438ZM41.6563 27.0625C41.6563 26.4409 41.9032 25.8448 42.3427 25.4052C42.7823 24.9657 43.3784 24.7188 44 24.7188H47.125C47.7466 24.7188 48.3427 24.9657 48.7823 25.4052C49.2218 25.8448 49.4688 26.4409 49.4688 27.0625V48.9375C49.4688 49.5591 49.2218 50.1552 48.7823 50.5948C48.3427 51.0343 47.7466 51.2812 47.125 51.2812H44C43.3784 51.2812 42.7823 51.0343 42.3427 50.5948C41.9032 50.1552 41.6563 49.5591 41.6563 48.9375V27.0625Z"
        fill="white"
      />
      <Defs>
        <Filter
          id="filter0_d_1308_1761"
          x="0.5"
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
            result="effect1_dropShadow_1308_1761"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1308_1761"
            result="shape"
          />
        </Filter>
        <LinearGradient
          id="paint0_linear_1308_1761"
          x1="24.25"
          y1="-7.625"
          x2="24.25"
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

export default Pause;
