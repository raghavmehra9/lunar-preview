import { useRef, useState } from "react";
import { View, Animated, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { GETTING_STARTED_DATA } from "./mock-data";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import Clouds from "./Clouds";
import SlideItem from "./SlideItem";
import DotIndicator from "./DotIndicator";
import ContinueButton from "./ContinueButton";
import { useAutoScroll } from "@/_hooks/useAutoScroll";
import { router } from "expo-router";

export default function GettingStartedView() {
  const navigation = useNavigation();
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  useAutoScroll(flatListRef, GETTING_STARTED_DATA.length, setCurrentIndex);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    setCurrentIndex(index);
  };

  const handleContinue = () => {
    if (currentIndex < GETTING_STARTED_DATA.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    } else {
      router.push("/(auth)/onboarding/auto-stack");
    }
  };

  return (
    <View className="flex-1 bg-brand-background">
      <SafeAreaView className="flex-1" edges={["top"]}>
        <View
          style={{
            position: "absolute",
            top: 55,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <Clouds />
        </View>

        <Animated.FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          data={GETTING_STARTED_DATA}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <SlideItem item={item} />}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScroll}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
          getItemLayout={(_, index) => ({
            length: SCREEN_WIDTH,
            offset: SCREEN_WIDTH * index,
            index,
          })}
        />

        <DotIndicator
          scrollX={scrollX}
          dataLength={GETTING_STARTED_DATA.length}
        />
        <ContinueButton
          currentIndex={currentIndex}
          total={GETTING_STARTED_DATA.length}
          onPress={handleContinue}
        />
      </SafeAreaView>
    </View>
  );
}
