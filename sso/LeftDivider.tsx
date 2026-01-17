import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

const LeftDivider = ({ width = 166, height = 1 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 166 1" fill="none">
      <Path
        d="M1 0.5L165.326 0.499986"
        stroke="url(#paint0_linear_3310_7509)"
        stroke-linecap="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_3310_7509"
          x1="1"
          y1="1.5"
          x2="165.326"
          y2="1.49999"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FBF1F3" />
          <Stop offset="1" stopColor="#955C93" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default LeftDivider;
