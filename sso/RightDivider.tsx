import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

const RightDivider = ({ width = 166, height = 1 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 166 1" fill="none">
      <Path
        d="M165 0.5L0.674158 0.499986"
        stroke="url(#paint0_linear_3310_7508)"
        stroke-linecap="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_3310_7508"
          x1="165"
          y1="1.5"
          x2="0.674164"
          y2="1.49998"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FBF1F3" />
          <Stop offset="1" stopColor="#955C93" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default RightDivider;
