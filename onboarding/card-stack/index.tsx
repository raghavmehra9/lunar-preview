import React, { useEffect, useRef } from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Clouds from "../getting-started/Clouds";
import { router } from "expo-router";

const CARD_WIDTH: number = 320;
const CARD_HEIGHT: number = 420;
const ANIMATION_DURATION: number = 800;
const STACK_DELAY: number = 2500;

const CARD_IMAGES: ImageSourcePropType[] = [
  require("@assets/images/card-stack/card1.webp"),
  require("@assets/images/card-stack/card2.webp"),
  require("@assets/images/card-stack/card3.webp"),
];

interface CardTransform {
  translateX: SharedValue<number>;
  translateY: SharedValue<number>;
  rotateZ: SharedValue<number>;
  scale: SharedValue<number>;
  opacity: SharedValue<number>;
  zIndex: SharedValue<number>;
}

interface AnimationStyle {
  transform: Array<
    | { translateX: number }
    | { translateY: number }
    | { scale: number }
    | { rotateZ: string }
  >;
  zIndex: number;
  opacity: number;
}

const CardStackAnimation: React.FC = () => {
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentCardIndex: SharedValue<number> = useSharedValue(0);

  const cardTransforms: CardTransform[] = CARD_IMAGES.map(
    (_, index: number) => ({
      translateX: useSharedValue(0),
      translateY: useSharedValue(index * 5),
      rotateZ: useSharedValue(0),
      scale: useSharedValue(1 - index * 0.05),
      opacity: useSharedValue(index === 0 ? 1 : 0.9),
      zIndex: useSharedValue(CARD_IMAGES.length - index),
    })
  );

  const navigateToHome = (): void => {
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }
    router.replace("/(auth)/onboarding/preferences");
  };

  const animateCardToStack = (cardIndex: number): void => {
    const isLastCard: boolean = cardIndex === CARD_IMAGES.length - 1;
    const transform: CardTransform = cardTransforms[cardIndex];

    transform.translateX.value = withSequence(
      withTiming(150, {
        duration: ANIMATION_DURATION * 0.6,
        easing: Easing.out(Easing.cubic),
      }),
      withTiming(-cardIndex * 8, {
        duration: ANIMATION_DURATION * 0.4,
        easing: Easing.inOut(Easing.cubic),
      })
    );

    transform.translateY.value = withSequence(
      withTiming(-30, {
        duration: ANIMATION_DURATION * 0.6,
        easing: Easing.out(Easing.cubic),
      }),
      withTiming(cardIndex * 12, {
        duration: ANIMATION_DURATION * 0.4,
        easing: Easing.inOut(Easing.cubic),
      })
    );

    transform.rotateZ.value = withSequence(
      withTiming(8, {
        duration: ANIMATION_DURATION * 0.6,
        easing: Easing.out(Easing.cubic),
      }),
      withTiming(-cardIndex * 3, {
        duration: ANIMATION_DURATION * 0.4,
        easing: Easing.inOut(Easing.cubic),
      })
    );

    transform.scale.value = withSequence(
      withTiming(1.05, {
        duration: ANIMATION_DURATION * 0.6,
        easing: Easing.out(Easing.cubic),
      }),
      withTiming(0.9 + cardIndex * 0.03, {
        duration: ANIMATION_DURATION * 0.4,
        easing: Easing.inOut(Easing.cubic),
      })
    );

    if (cardIndex === 0) {
      transform.zIndex.value = withDelay(
        ANIMATION_DURATION * 0.6,
        withTiming(cardTransforms[2].zIndex.value - 1, { duration: 1 })
      );
    } else if (cardIndex === 1) {
      transform.zIndex.value = withDelay(
        ANIMATION_DURATION * 0.6,
        withTiming(cardTransforms[0].zIndex.value - 1, { duration: 1 })
      );
    } else if (cardIndex === 2) {
      transform.zIndex.value = withDelay(
        ANIMATION_DURATION * 0.6,
        withTiming(cardTransforms[1].zIndex.value - 1, { duration: 1 })
      );
    }

    if (isLastCard) {
      animationTimeoutRef.current = setTimeout(() => {
        runOnJS(navigateToHome)();
      }, ANIMATION_DURATION + 500);
    }
  };

  const startContinuousStacking = (): void => {
    currentCardIndex.value = 0;

    cardTransforms.forEach((transform: CardTransform, index: number) => {
      transform.translateX.value = 0;
      transform.translateY.value = index * 5;
      transform.rotateZ.value = 0;
      transform.scale.value = 1 - index * 0.05;
      transform.opacity.value = index === 0 ? 1 : 0.9;
      transform.zIndex.value = CARD_IMAGES.length - index;
    });

    CARD_IMAGES.forEach((_: ImageSourcePropType, index: number) => {
      animationTimeoutRef.current = setTimeout(() => {
        animateCardToStack(index);
        currentCardIndex.value = index + 1;
      }, index * STACK_DELAY);
    });
  };

  useEffect(() => {
    const initialDelay: NodeJS.Timeout = setTimeout(() => {
      startContinuousStacking();
    }, 1000);

    return () => {
      clearTimeout(initialDelay);
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const getCardStyle = (index: number) =>
    useAnimatedStyle((): AnimationStyle => {
      const transform: CardTransform = cardTransforms[index];
      return {
        transform: [
          { translateX: transform.translateX.value },
          { translateY: transform.translateY.value },
          { scale: transform.scale.value },
          { rotateZ: `${transform.rotateZ.value}deg` },
        ],
        zIndex: transform.zIndex.value,
        opacity: transform.opacity.value,
      };
    });

  return (
    <View style={styles.container} className="bg-brand-background">
      <SafeAreaView className="flex-1">
        <View>
          <Clouds />
        </View>
        <View style={styles.cardContainer}>
          {CARD_IMAGES.map(
            (imageSource: ImageSourcePropType, index: number) => (
              <Animated.View
                key={index}
                style={[styles.card, getCardStyle(index)]}
              >
                <Image
                  source={imageSource}
                  style={styles.cardImage}
                  resizeMode="contain"
                />
              </Animated.View>
            )
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: CARD_WIDTH + 100,
    height: CARD_HEIGHT + 100,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 16,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
});

export default CardStackAnimation;
