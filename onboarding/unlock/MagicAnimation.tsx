import { scale } from "@/utils/helpers/sizeMatters";
import { useEffect, useRef } from "react";
import { Animated, Dimensions, Easing, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");

export default function MagicAnimation() {
  const crystal1Position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const crystal1Rotation = useRef(new Animated.Value(0)).current;

  const crystal2Position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const crystal2Rotation = useRef(new Animated.Value(0)).current;

  const crystal3Position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const crystal3Rotation = useRef(new Animated.Value(0)).current;

  const crystal4Position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const crystal4Rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const verticalDistance = 40;
    const tiltAngle = 12;

    const createAnimation = (position, rotation, delay = 0) => {
      return Animated.loop(
        Animated.sequence([
          Animated.delay(delay),

          Animated.parallel([
            Animated.timing(position, {
              toValue: { x: 0, y: -verticalDistance },
              duration: 1800,
              easing: Easing.bezier(0.25, 0.46, 0.45, 0.94),
              useNativeDriver: true,
            }),
            Animated.timing(rotation, {
              toValue: -tiltAngle,
              duration: 1800,
              easing: Easing.bezier(0.25, 0.46, 0.45, 0.94),
              useNativeDriver: true,
            }),
          ]),

          Animated.delay(200),
          Animated.timing(rotation, {
            toValue: -30,
            duration: 800,
            easing: Easing.bezier(0.455, 0.03, 0.515, 0.955),
            useNativeDriver: true,
          }),

          Animated.delay(300),

          Animated.parallel([
            Animated.timing(position, {
              toValue: { x: 0, y: 0 },
              duration: 1800,
              easing: Easing.bezier(0.55, 0.055, 0.675, 0.19),
              useNativeDriver: true,
            }),
            Animated.timing(rotation, {
              toValue: 0,
              duration: 1600,
              easing: Easing.bezier(0.645, 0.045, 0.355, 1),
              useNativeDriver: true,
            }),
          ]),

          Animated.delay(400),
        ])
      );
    };

    const animation1 = createAnimation(crystal1Position, crystal1Rotation, 0);
    const animation2 = createAnimation(crystal2Position, crystal2Rotation, 500);
    const animation3 = createAnimation(
      crystal3Position,
      crystal3Rotation,
      1000
    );
    const animation4 = createAnimation(
      crystal4Position,
      crystal4Rotation,
      1500
    );

    animation1.start();
    animation2.start();
    animation3.start();
    animation4.start();

    return () => {
      animation1.stop();
      animation2.stop();
      animation3.stop();
      animation4.stop();
    };
  }, []);

  const createRotateInterpolate = (rotation) => {
    return rotation.interpolate({
      inputRange: [-360, 360],
      outputRange: ["-360deg", "360deg"],
      extrapolate: "clamp",
    });
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("@assets/images/unlock/crystal.webp")}
        style={[
          styles.image,
          styles.crystal1,
          {
            transform: [
              ...crystal1Position.getTranslateTransform(),
              { rotate: createRotateInterpolate(crystal1Rotation) },
            ],
          },
        ]}
      />
      <Animated.Image
        source={require("@assets/images/unlock/card.webp")}
        style={[
          styles.image,
          styles.crystal2,
          {
            transform: [
              ...crystal2Position.getTranslateTransform(),
              { rotate: createRotateInterpolate(crystal2Rotation) },
            ],
          },
        ]}
      />
      <Animated.Image
        source={require("@assets/images/unlock/potion.webp")}
        style={[
          styles.image,
          styles.crystal3,
          {
            transform: [
              ...crystal3Position.getTranslateTransform(),
              { rotate: createRotateInterpolate(crystal3Rotation) },
            ],
          },
        ]}
      />
      <Animated.Image
        source={require("@assets/images/unlock/hand.webp")}
        style={[
          styles.image,
          styles.crystal4,
          {
            transform: [
              ...crystal4Position.getTranslateTransform(),
              { rotate: createRotateInterpolate(crystal4Rotation) },
            ],
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2a0a3d",
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  image: {
    resizeMode: "contain",
    width: scale(115),
    height: scale(115),
  },
  crystal1: {
    position: "absolute",
    left: width * 0.001,
  },
  crystal2: {
    position: "absolute",
    left: width * 0.24,
  },
  crystal3: {
    position: "absolute",
    left: width * 0.47,
  },
  crystal4: {
    position: "absolute",
    left: width * 0.7,
  },
});
