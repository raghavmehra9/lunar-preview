import { Defs, LinearGradient, Path, Stop, Svg } from "react-native-svg";

const GradientWave = ({ width = 411, height = 289 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 411 289" fill="none">
      <Path
        d="M366.512 68.5307C406.669 88.7222 427.319 124.288 430.637 167.637C440.788 300.181 268.996 306.486 233.128 267.413C165.875 194.149 201.198 202.053 32.4185 195.327C-45.4697 192.223 -100.12 57.0649 32.2792 7.97406C44.0212 3.62025 57.9141 1.45942 71.9212 0.50571C105.612 -1.78856 133.63 11.4775 160.231 25.9833C189.171 41.7635 211.621 62.3829 256.493 62.3811C301.363 62.3793 325.563 47.9411 366.512 68.5307Z"
        fill="url(#paint0_linear_578_26326)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_578_26326"
          x1="197.353"
          y1="5.08303"
          x2="185.684"
          y2="283.633"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F9E3E8" />
          <Stop offset="0.275" stopColor="#FBEFF2" />
          <Stop offset="1" stopColor="#FCF6F7" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default GradientWave;
