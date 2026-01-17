import { View, Animated } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";

type DotIndicatorProps = {
  scrollX: Animated.Value;
  dataLength: number;
};

export default function DotIndicator({
  scrollX,
  dataLength,
}: DotIndicatorProps) {
  return (
    <View
      style={{
        position: "absolute",
        bottom: SCREEN_HEIGHT * 0.31,
        alignSelf: "center",
        flexDirection: "row",
        marginBottom: scale(10),
      }}
    >
      {Array.from({ length: dataLength }).map((_, i) => {
        const inputRange = [
          (i - 1) * SCREEN_WIDTH,
          i * SCREEN_WIDTH,
          (i + 1) * SCREEN_WIDTH,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 25, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={i}
            style={{
              height: 10,
              borderRadius: 5,
              backgroundColor: "#EABF99",
              marginHorizontal: 2,
              width: dotWidth,
              opacity,
            }}
          />
        );
      })}
    </View>
  );
}
