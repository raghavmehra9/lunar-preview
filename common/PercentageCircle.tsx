import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface ProgressCircleProps {
  percentage: number;
  radius?: number;
  strokeWidth?: number;
  color?: string;
  bgColor?: string;
  children?: React.ReactNode;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  percentage,
  radius = 100,
  strokeWidth = 8,
  color = "#E7B56A",
  bgColor = "#E6E6E6",
  children,
}) => {
  const normalizedPercentage = Math.max(0, Math.min(percentage, 100));
  const circumference = 2 * Math.PI * (radius - strokeWidth / 2);
  const strokeDashoffset = (1 - normalizedPercentage / 100) * circumference;

  return (
    <View style={[styles.container, { width: radius * 2, height: radius * 2 }]}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      >
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          transform={`rotate(-90, ${radius}, ${radius})`}
        />
      </Svg>

      <View style={styles.innerContent}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  innerContent: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProgressCircle;
