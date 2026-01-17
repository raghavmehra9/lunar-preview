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
} from "react-native-svg";
import { IconDimension } from "../IconTypes";
import { scale } from "@/utils/helpers/sizeMatters";

const YellowSapphire = ({
  width = scale(72),
  height = scale(72),
}: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 72 72" fill="none">
      <G>
        <Path
          d="M23.8029 21.9676L7.80615 22.726C10.4056 15.595 15.6337 9.72818 22.3168 6.29681L23.8029 21.9676Z"
          fill="#FFF26E"
        />
        <Path
          d="M45.886 4.66752L35.1752 16.5731L22.3184 6.29436C26.4213 4.18888 31.0723 3 35.9992 3C39.4634 3.00011 42.7905 3.58686 45.886 4.66752Z"
          fill="#D8BF00"
        />
        <Path
          d="M63.284 20.5105L47.0326 20.8019L45.8862 4.66797C53.6135 7.36417 59.901 13.1326 63.284 20.5105Z"
          fill="#A28605"
        />
        <Path
          d="M66 33.0001C66 36.4759 65.4074 39.8165 64.321 42.9218L52.4272 32.176L63.2847 20.5098C65.0273 24.3137 66 28.544 66 33.0001Z"
          fill="#967605"
        />
        <Path
          d="M19.5726 33.8235L8.44122 44.8703C6.87033 41.2305 6 37.2164 6 32.9995C6 29.3905 6.63684 25.9302 7.80632 22.7246L19.5726 33.8235Z"
          fill="#F6E700"
        />
        <Path
          d="M24.9664 45.1992V60.9086C17.5538 57.9751 11.5886 52.1739 8.44092 44.873L24.9664 45.1992Z"
          fill="#E6CA00"
        />
        <Path
          d="M51.3403 58.7878C46.8515 61.4627 41.6042 63.0008 35.9999 63.0008C32.1054 63.0008 28.3826 62.2578 24.9668 60.9068L36.8239 49.4277L51.3403 58.7878Z"
          fill="#BAA201"
        />
        <Path
          d="M64.3204 42.9238C61.9775 49.6109 57.3343 55.2154 51.34 58.7895L48.1982 44.0355L64.3204 42.9238Z"
          fill="#D6BF00"
        />
        <Path
          d="M35.176 16.5736L23.8034 21.9676L22.3174 6.29684V6.29492H22.3192L35.176 16.5736Z"
          fill="#FFF6A7"
        />
        <Path
          d="M47.0329 20.802L35.1758 16.5736L45.8866 4.66797L47.0329 20.802Z"
          fill="#E5DC00"
        />
        <Path
          d="M63.2842 20.5098L52.4267 32.1761L47.0327 20.8012L63.2842 20.5098Z"
          fill="#896F0A"
        />
        <Path
          d="M64.3204 42.9214L48.1982 44.0331L52.4266 32.1758L64.3204 42.9214Z"
          fill="#BBA300"
        />
        <Path
          d="M23.8029 21.9688L19.5726 33.826L7.80615 22.7273L23.8029 21.9688Z"
          fill="#FFEF08"
        />
        <Path
          d="M52.4273 32.1775L48.199 44.0347L36.8243 49.4288L24.9673 45.1984L19.5732 33.8255L23.8036 21.9682L35.1762 16.5742L47.0333 20.8026L52.4273 32.1775Z"
          fill="#FFEE00"
        />
        <Path
          d="M24.9672 45.197L8.44165 44.8709L19.5732 33.8241L24.9672 45.197Z"
          fill="#9C8208"
        />
        <Path
          d="M36.8239 49.4277L24.9668 60.9068V45.1973L36.8239 49.4277Z"
          fill="#E1D400"
        />
        <Path
          d="M51.3397 58.7853L36.8232 49.4254L48.1979 44.0312L51.3397 58.7853Z"
          fill="#F0E400"
        />
      </G>
      <Defs>
        <Filter
          id="filter0_d_28_3134"
          x="-1.4782e-05"
          y="-7.39098e-06"
          width="72"
          height="72.0008"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <FeFlood flood-opacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="3.00001" />
          <FeGaussianBlur stdDeviation="3.00001" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0.578009 0 0 0 0 0.435804 0 0 0 0 0.415961 0 0 0 0.25 0"
          />
          <FeBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_28_3134"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_28_3134"
            result="shape"
          />
        </Filter>
      </Defs>
    </Svg>
  );
};

export default YellowSapphire;
