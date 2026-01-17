import { scale } from "@/utils/helpers/sizeMatters";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
import { IconDimension } from "../IconTypes";

const SignRevealCloud2 = ({
  width = scale(439),
  height = scale(380),
}: IconDimension) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 439 380" fill="none">
      <Path
        d="M153.325 326.774C153.325 326.774 141.86 285.468 122.644 303.477C119.834 306.11 113.647 315.978 113.647 315.978C113.647 315.978 123.977 276.916 96.9852 281.351C69.9932 285.786 84.1672 321.776 84.1672 321.776C84.1672 321.776 66.2442 290.787 51.9982 312.445C49.8642 315.69 46.0002 326.774 46.0002 326.774H153.325Z"
        fill="url(#paint0_linear_293_6421)"
      />
      <Path
        d="M90.7349 101.491C90.7349 101.491 85.1009 81.1946 75.6599 90.0436C74.2789 91.3376 71.2389 96.1866 71.2389 96.1866C71.2389 96.1866 76.3148 76.9926 63.0518 79.1726C49.7888 81.3516 56.7538 99.0356 56.7538 99.0356C56.7538 99.0356 47.9478 83.8086 40.9468 94.4506C39.8978 96.0446 37.9998 101.492 37.9998 101.492H90.7349V101.491Z"
        fill="url(#paint1_linear_293_6421)"
      />
      <Path
        d="M389.843 137.056C389.843 137.056 385.918 115.784 368.256 118.868C350.594 121.952 351.435 137.056 351.435 137.056C351.435 137.056 351.996 97.8407 332.371 101.205C312.746 104.569 316.391 139.333 316.391 139.333C316.391 139.333 304.616 119.147 292 139.333L389.843 137.056Z"
        fill="url(#paint2_linear_293_6421)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_293_6421"
          x1="99.6627"
          y1="281"
          x2="99.6627"
          y2="326.774"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#8E458A" />
          <Stop offset="1" stopColor="#945091" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_293_6421"
          x1="64.3674"
          y1="79"
          x2="64.3674"
          y2="101.492"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#8E458A" />
          <Stop offset="1" stopColor="#945091" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_293_6421"
          x1="340.921"
          y1="101"
          x2="340.921"
          y2="139.333"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#8E458A" />
          <Stop offset="1" stopColor="#945091" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default SignRevealCloud2;
