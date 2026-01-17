import { scale } from "@/utils/helpers/sizeMatters";
import { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Image,
  ImageProps,
  StyleSheet,
  View,
} from "react-native";

const FloatingImage = ({
  source,
  size = 250,
}: {
  source: ImageProps["source"];
  size: number;
}) => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: 25,
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0, // back to start (so loop is seamless)
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [translateY]);

  return (
    <View style={{ width: size + 50, height: size + 50 }}>
      <Image
        source={require("@assets/images/welcome/leaveswithbase.webp")}
        style={[styles.image, { width: size + 50, height: size + 50 }]}
        resizeMode="contain"
      />

      <Animated.View
        style={[StyleSheet.absoluteFillObject, { transform: [{ translateY }] }]}
      >
        <View>
          <Image
            source={require("@assets/images/welcome/meditationcircle.webp")}
            style={[
              styles.image,
              { width: scale(75), height: scale(75), position: "absolute" },
            ]}
            resizeMode="contain"
          />
          <Image
            source={source}
            style={[styles.image, { width: size, height: size }]}
            resizeMode="contain"
          />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
  },
});

export default FloatingImage;
