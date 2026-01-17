import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import React from "react";
import { View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle } from "react-native-svg";

const LoadingScreen = () => {
  return (
    <View className="flex-1 bg-brand-secondary">
      <SafeAreaView className="flex-1 items-center justify-center">
        <RotatingOrbits />
      </SafeAreaView>
    </View>
  );
};

const width = SCREEN_WIDTH - scale(20 * 2);
const height = SCREEN_HEIGHT;
const CENTER_X = width / 2;
const CENTER_Y = height / 2;
const ORBIT_RADII = [
  width * 0.055,
  width * 0.14,
  width * 0.2,
  width * 0.26,
  width * 0.32,
  width * 0.42,
  width * 0.49,
];

const RotatingOrbits = () => {
  const rotation = useSharedValue(0);

  React.useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 8000, easing: Easing.linear }),
      -1
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      className="bg-brand-background"
    >
      <Animated.View style={[animatedStyle, { position: "absolute" }]}>
        <Svg width={width} height={height}>
          {ORBIT_RADII.map((radius, index) => (
            <React.Fragment key={index}>
              <Circle
                cx={CENTER_X}
                cy={CENTER_Y}
                r={radius}
                stroke="#EDC7DB"
                strokeWidth={0.7}
                fill="#D8CCED33"
              />
              <Circle
                cx={
                  CENTER_X +
                  Math.cos(index * ((2 * Math.PI) / ORBIT_RADII.length)) *
                    radius
                }
                cy={
                  CENTER_Y +
                  Math.sin(index * ((2 * Math.PI) / ORBIT_RADII.length)) *
                    radius
                }
                r={5 + index * 1.2}
                fill="white"
                stroke="#EDC7DB"
                strokeWidth={0.5}
              />
            </React.Fragment>
          ))}
        </Svg>
      </Animated.View>
    </View>
  );
};

export default LoadingScreen;
