import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
import { IconDimension } from "../IconTypes";
import { scale } from "@/utils/helpers/sizeMatters";

const SignRevealCloud = ({
  width = scale(438),
  height = scale(195),
}: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 438 195" fill="none">
      <Path
        d="M0 176.774C0 176.774 11.465 135.468 30.681 153.477C33.491 156.11 39.678 165.978 39.678 165.978C39.678 165.978 29.348 126.916 56.34 131.351C83.332 135.786 69.158 171.776 69.158 171.776C69.158 171.776 87.081 140.787 101.327 162.445C103.461 165.69 107.325 176.774 107.325 176.774H0Z"
        fill="url(#paint0_linear_293_6404)"
      />
      <Path
        d="M373 131.491C373 131.491 378.634 111.195 388.075 120.044C389.456 121.338 392.496 126.187 392.496 126.187C392.496 126.187 387.42 106.993 400.683 109.173C413.946 111.352 406.981 129.036 406.981 129.036C406.981 129.036 415.787 113.809 422.788 124.451C423.837 126.045 425.735 131.492 425.735 131.492H373V131.491Z"
        fill="url(#paint1_linear_293_6404)"
      />
      <Path
        d="M287 47.0557C287 47.0557 290.925 25.7837 308.587 28.8677C326.249 31.9517 325.408 47.0557 325.408 47.0557C325.408 47.0557 324.847 7.84069 344.472 11.2047C364.097 14.5687 360.452 49.3327 360.452 49.3327C360.452 49.3327 372.227 29.1467 384.843 49.3327L287 47.0557Z"
        fill="url(#paint2_linear_293_6404)"
      />
      <Path
        d="M91.5388 44.0597C78.6414 49.2569 63.9727 43.0142 58.7759 30.1168C54.7145 20.0375 57.6395 8.87652 65.2679 2C63.5964 2.34924 61.9321 2.84098 60.2928 3.50163C45.3359 9.52837 38.0968 26.539 44.1238 41.4957C50.1506 56.4523 67.1612 63.6914 82.1178 57.6647C90.5436 54.2695 96.5191 47.3887 99.0545 39.3533C96.9075 41.3026 94.3859 42.9125 91.5388 44.0597Z"
        fill="#945091"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_293_6404"
          x1="53.6625"
          y1="131"
          x2="53.6625"
          y2="176.774"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#8E458A" />
          <Stop offset="1" stopColor="#945091" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_293_6404"
          x1="399.368"
          y1="109"
          x2="399.368"
          y2="131.492"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#8E458A" />
          <Stop offset="1" stopColor="#945091" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_293_6404"
          x1="335.921"
          y1="11"
          x2="335.921"
          y2="49.3327"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#8E458A" />
          <Stop offset="1" stopColor="#945091" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default SignRevealCloud;
