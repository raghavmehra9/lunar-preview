import { scale } from "@/utils/helpers/sizeMatters";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ImageProps,
  StyleSheet,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

interface MovingCloudsProps {
  cloudSource: ImageProps["source"];
  speed?: number;
  height?: number;
}

const MovingClouds: React.FC<MovingCloudsProps> = ({
  cloudSource,
  speed = 30,
  height = 100,
}) => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loopAnimation = () => {
      translateX.setValue(0);
      Animated.timing(translateX, {
        toValue: -width,
        duration: (width / speed) * 700,
        useNativeDriver: true,
      }).start(() => loopAnimation());
    };
    loopAnimation();
  }, [speed, translateX]);

  return (
    <View style={[styles.container, { height }]}>
      <Image
        source={require("@assets/images/welcome/moon.webp")}
        style={[{ left: scale(75), width: scale(70), height: scale(70) }]}
        resizeMode="contain"
      />
      <Animated.Image
        source={cloudSource}
        style={[
          styles.cloud,
          {
            transform: [{ translateX }],
          },
        ]}
        resizeMode="contain"
      />

      <Animated.Image
        source={cloudSource}
        style={[
          styles.cloud,
          {
            left: width,
            transform: [{ translateX }],
          },
        ]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    overflow: "hidden",
  },
  cloud: {
    position: "absolute",
    width: width,
    height: "100%",
  },
});

export default MovingClouds;
