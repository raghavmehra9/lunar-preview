import { CosmicCrew } from "@/api/lunar-services/types";
import CategoryCard from "@/assets/svg/cosmic_crew/category/CategoryCard";
import { scale } from "@/utils/helpers/sizeMatters";
import React, { useMemo } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  newData: CosmicCrew[];
  setNewData: React.Dispatch<React.SetStateAction<CosmicCrew[]>>;
  maxVisibleItems: number;
  index: number;
  dataLength: number;
  animatedValue: SharedValue<number>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

const CosmicCard = ({
  newData,
  setNewData,
  maxVisibleItems,
  index,
  dataLength,
  animatedValue,
  currentIndex,
  setCurrentIndex,
}: Props) => {
  const { width } = useWindowDimensions();
  const translateX = useSharedValue(0);
  const direction = useSharedValue(0);
  const SWIPE_THRESHOLD = 150;
  const VELOCITY_THRESHOLD = 1000;

  const pan = useMemo(
    () =>
      Gesture.Pan()
        .onUpdate((e) => {
          if (currentIndex !== index) return;
          direction.value = e.translationX > 0 ? 1 : -1;
          translateX.value = e.translationX;
          animatedValue.value = interpolate(
            Math.abs(e.translationX),
            [0, width],
            [index, index + 1]
          );
        })
        .onEnd((e) => {
          if (currentIndex !== index) return;
          const shouldSwipe =
            Math.abs(e.translationX) > SWIPE_THRESHOLD ||
            Math.abs(e.velocityX) > VELOCITY_THRESHOLD;

          if (shouldSwipe) {
            translateX.value = withTiming(width * direction.value, {}, () => {
              runOnJS(setNewData)([...newData, newData[currentIndex]]);
              const nextIndex = (currentIndex + 1) % newData.length;
              runOnJS(setCurrentIndex)(nextIndex);
            });
            animatedValue.value = withTiming(currentIndex + 1);
          } else {
            translateX.value = withTiming(0, { duration: 500 });
            animatedValue.value = withTiming(currentIndex, { duration: 500 });
          }
        }),
    [
      currentIndex,
      index,
      width,
      animatedValue,
      translateX,
      direction,
      setNewData,
      newData,
      setCurrentIndex,
    ]
  );

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      animatedValue.value,
      [index - 1, index],
      [-30, 0]
    );
    const scale = interpolate(
      animatedValue.value,
      [index - 1, index],
      [0.9, 1]
    );
    const rotateZ = interpolate(
      Math.abs(translateX.value),
      [0, width],
      [0, 20]
    );
    const opacity = interpolate(
      animatedValue.value + maxVisibleItems,
      [index, index + 1],
      [0, 1]
    );

    return {
      transform: [
        { translateY: index === currentIndex ? 0 : translateY },
        { scale: index === currentIndex ? 1 : scale },
        { translateX: translateX.value },
        {
          rotateZ:
            index === currentIndex ? `${direction.value * rotateZ}deg` : "0deg",
        },
      ],
      opacity: index < currentIndex + maxVisibleItems ? 1 : opacity,
    };
  });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[
          styles.container,
          { zIndex: dataLength - index },
          animatedStyle,
        ]}
      >
        <View style={styles.cardWrapper}>
          <CategoryCard width={scale(220)} data={newData[index]} />
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default React.memo(CosmicCard);

const styles = StyleSheet.create({
  container: { position: "absolute" },
  cardWrapper: { marginTop: scale(18) },
});
