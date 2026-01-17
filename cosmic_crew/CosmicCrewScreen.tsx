import useCosmicCrew from "@/_hooks/astro-service/useCosmicCrew";
import { CosmicCrew } from "@/api/lunar-services/types";
import BackNavigation from "@/components/form/BackNavigation";
import { BACKGROUND_COLORS } from "@/constants/CategoryTypes";
import { COSMIC_CREW_INFO } from "@/constants/Informations";
import commonStyles from "@/styles/commonStyle";
import { scale } from "@/utils/helpers/sizeMatters";
import { router } from "expo-router";
import { SetStateAction, useEffect, useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import InfoModalBtn from "../common/InfoModalBtn";
import { PointsContent, PointsHeading } from "../common/PointsView";
import ErrorScreen from "../ErrorScreen";
import TuneWithYourVibe from "../frequency/TuneWithYourVibe";
import LoadingScreen from "../LoadingScreen";
import SpaceElement from "../SpaceElement";
import CosmicCard from "./CosmicCard";
import CosmicInformation from "./CosmicInformation";

const CosmicCrewScreen = () => {
  const cosmicCrew = useCosmicCrew();
  const cosmicCrewData = useMemo(
    () => cosmicCrew?.data?.data ?? [],
    [cosmicCrew?.data?.data]
  );
  const [newData, setNewData] = useState<CosmicCrew[] | []>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cosmicIndex, setCosmicIndex] = useState(0);
  const animatedValue = useSharedValue(0);
  const MAX = 2;

  const [itemLayout, setItemLayout] = useState<{
    width: number;
    height: number;
    x: number;
    y: number;
  } | null>(null);

  const handleLayout = (event: any) => {
    if (!itemLayout) {
      const { width, height, x, y } = event.nativeEvent.layout;
      setItemLayout({ width, height, x, y });
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    if (animatedValue.value > currentIndex + 0.5) {
      runOnJS(setCosmicIndex)(currentIndex + 1);
    } else {
      runOnJS(setCosmicIndex)(currentIndex);
    }

    const opacity = interpolate(
      animatedValue.value,
      [currentIndex, currentIndex + 0.3, currentIndex + 0.8, currentIndex + 1],
      [1, 0, 0, 1],
      Extrapolation.CLAMP
    );

    return {
      opacity: opacity,
    };
  }, [currentIndex]);

  const animatedStyleView = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animatedValue.value,
      [currentIndex, currentIndex + 1],
      [
        BACKGROUND_COLORS[newData[currentIndex]?.category_name] || "white",
        BACKGROUND_COLORS[newData[currentIndex + 1]?.category_name] || "white",
      ]
    );

    return {
      backgroundColor,
    };
  }, [currentIndex, newData]);

  const handleSetNewData = (data: SetStateAction<CosmicCrew[]>) => {
    setNewData(data);
  };

  const handleSetCurrentIndex = (value: SetStateAction<number>) => {
    setCurrentIndex(value);
  };

  useEffect(() => {
    if (cosmicCrew?.data?.data) {
      setNewData(cosmicCrewData);
    }
  }, [cosmicCrewData]);

  const currentCosmicItem = useMemo(
    () => newData[cosmicIndex],
    [newData, cosmicIndex]
  );

  if (cosmicCrew.isLoading) {
    return <LoadingScreen />;
  }
  if (cosmicCrew.isError) {
    return <ErrorScreen />;
  }
  return (
    <Animated.View style={[styles?.container, animatedStyleView]}>
      <SafeAreaView style={styles?.container} edges={["top"]}>
        <ScrollView className="flex-1">
          <View style={commonStyles.screenContainer}>
            <BackNavigation
              headerName="Cosmic Crew"
              rightComponent={
                <InfoModalBtn infoColor="#883D85" title="Cosmic Crew">
                  <Text className="font-Avenir-regular mb-10">
                    {COSMIC_CREW_INFO.information}
                  </Text>
                  <View>
                    {COSMIC_CREW_INFO.subItems.map((item, index) => {
                      return (
                        <View key={index} className="mb-10">
                          <PointsHeading heading={item.title} />
                          <PointsContent content={item.content} />
                        </View>
                      );
                    })}
                  </View>
                </InfoModalBtn>
              }
            />
          </View>
          <View style={styles?.wrapper}>
            <View style={styles?.container}>
              <GestureHandlerRootView style={{ flex: 1 }}>
                <View style={styles.container} onLayout={handleLayout}>
                  <View style={{ alignItems: "center" }}>
                    {newData.map((_, index) => {
                      if (index > currentIndex + MAX || index < currentIndex) {
                        return null;
                      }
                      return (
                        <CosmicCard
                          newData={newData}
                          setNewData={handleSetNewData}
                          maxVisibleItems={MAX}
                          index={index}
                          dataLength={newData.length}
                          animatedValue={animatedValue}
                          currentIndex={currentIndex}
                          setCurrentIndex={handleSetCurrentIndex}
                          key={index}
                        />
                      );
                    })}
                  </View>
                </View>
              </GestureHandlerRootView>
              <View
                style={{
                  marginTop: scale(280),
                }}
              >
                <Animated.View style={[animatedStyle]}>
                  <CosmicInformation item={currentCosmicItem} />
                </Animated.View>
              </View>
            </View>
          </View>
          <View style={{ marginHorizontal: scale(20) }}>
            <TuneWithYourVibe
              heading="Boost your strengths and balance your energy "
              onPress={() => {
                router.push("/(app)/frequency");
              }}
              subheading={"With Healing Frequencies"}
            />
          </View>
          <SpaceElement spacing={40} />
        </ScrollView>
      </SafeAreaView>
    </Animated.View>
  );
};

export default CosmicCrewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: { flex: 1, paddingHorizontal: scale(20) },
  divideView: { flex: 0.5 },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
