import { useEffect, useRef } from "react";
import { Animated, Easing, Platform, StyleSheet, View } from "react-native";

import { SCREEN_WIDTH } from "@/constants/Spacing";
import Taurus from "@/assets/svg/zodiac_symbols/Taurus";
import Aries from "@/assets/svg/zodiac_symbols/Aries";
import Gemini from "@/assets/svg/zodiac_symbols/Gemini";
import Cancer from "@/assets/svg/zodiac_symbols/Cancer";
import { scale } from "@/utils/helpers/sizeMatters";

const ANIMATION_DURATION = 10000;

export default function HorizontalZodiacAnimate() {
  const position = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      position.setValue(0);

      Animated.loop(
        Animated.timing(position, {
          toValue: -(SCREEN_WIDTH + scale(Platform.OS === "ios" ? 40 : 80)),
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
          easing: Easing.linear,
        })
      ).start();
    };

    startAnimation();

    return () => {
      position.stopAnimation();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.zodiacWrapper,
          { transform: [{ translateX: position }] },
        ]}
      >
        <View style={styles.zodiacContainer}>
          <Taurus />
          <Aries />
          <Gemini />
          <Cancer />
        </View>
        <View style={styles.zodiacContainer}>
          <Taurus />
          <Aries />
          <Gemini />
          <Cancer />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    overflow: "hidden",
  },
  zodiacWrapper: {
    flexDirection: "row",
  },
  zodiacContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: SCREEN_WIDTH + scale(Platform.OS === "ios" ? 40 : 80),
  },
});
