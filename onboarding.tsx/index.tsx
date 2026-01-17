import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import Cloud from "@/assets/svg/onboarding/Cloud";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";

import { useSession } from "@/context/ctx";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  OnBoardingScreen1,
  OnBoardingScreen2,
  OnBoardingScreen3,
  OnBoardingScreen4,
} from "./OnBoardingSlides";
import StickyButton from "./StickyButton";

type ScrollEvent = NativeSyntheticEvent<NativeScrollEvent>;
const TOTAL_SCREENS = 4;

const OnBoarding = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { session, setValue } = useSession();

  const handleScroll = (event: ScrollEvent) => {
    const { contentOffset } = event.nativeEvent;
    const index = Math.round(contentOffset.x / SCREEN_WIDTH);
    setCurrentIndex(index);
  };

  const scrollToScreenByIndex = (index: number) => {
    scrollViewRef.current?.scrollTo({
      x: SCREEN_WIDTH * index,
      animated: true,
    });
  };

  const updateSession = () => setValue({ ...session });

  const update = () => {
    updateSession();
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      scrollToScreenByIndex(nextIndex);
      if (nextIndex === TOTAL_SCREENS) {
        router.replace("/(auth)/signup");
      }
      return nextIndex;
    });
  };

  const handleSkip = () => {
    updateSession();
    router.replace("/(auth)/signup");
  };

  const handleNext = () => {
    update();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < 3) {
        update();
      } else {
        clearInterval(interval);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View className="flex-1 bg-brand-background">
      <SafeAreaView className="flex-1 items-center">
        <View className="absolute" style={styles.cloudSvg}>
          <Cloud />
        </View>
        <ScrollView
          horizontal
          scrollEnabled
          pagingEnabled
          ref={scrollViewRef}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <OnBoardingScreen1 />
          <OnBoardingScreen2 />
          <OnBoardingScreen3 />
          <OnBoardingScreen4 />
        </ScrollView>
        <StickyButton handleSkip={handleSkip} handleNext={handleNext} />
      </SafeAreaView>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  cloudSvg: {
    top: scale(32),
  },
});
