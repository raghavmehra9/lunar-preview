"use client";

import type { CosmicCrew } from "@/api/lunar-services/types";
import { PLANETS } from "@/constants/LuckyUnLucky";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import React, { useEffect, useMemo, useRef } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import EmptyFragment from "../EmptyFragment";

type Props = {
  item: CosmicCrew;
};

const CosmicInformation = ({ item }: Props) => {
  const scrollViewRef = useRef<ScrollView>(null);

  const PlanetIcon = useMemo(
    () => PLANETS[item?.planet_name] ?? EmptyFragment,
    [item?.planet_name]
  );

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
  };

  useEffect(() => {
    scrollToTop();
  }, [item]);

  return (
    <View>
      <View className="items-center" style={styles?.indicationView}>
        <Text className="font-Avenir-regular" style={styles?.indicationSize}>
          Swipe to see your cosmic crew
        </Text>
      </View>
      <View className="bg-white" style={styles.container}>
        <ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          // onScrollBeginDrag={scrollToTop}
        >
          <View
            className={`bg-voilet-americanVoilet flex-row justify-center items-center`}
            style={styles.planetContainer}
          >
            <PlanetIcon height={scale(60)} width={scale(76)} />
            <Text
              className="font-Skillet-regular text-white"
              style={styles.planetNameFont}
            >
              {item?.planet_name}
            </Text>
          </View>
          <View style={styles.planetDescription}>
            <Text
              className="font-Avenir-regular text-darkLiver"
              style={styles.planetDescriptionFont}
            >
              {item?.description}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(CosmicInformation);

const styles = StyleSheet.create({
  container: {
    borderRadius: scale(20),
    marginBottom: scale(10),
  },
  planetContainer: {
    borderRadius: scale(20),
    padding: scale(5),
    marginTop: scale(18),
    marginHorizontal: scale(20),
    gap: scale(10),
    width: SCREEN_WIDTH - scale(40 * 2),
  },
  planetNameFont: { fontSize: scale(24) },
  planetDescription: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(20),
  },
  planetDescriptionFont: { lineHeight: scale(20), fontSize: scale(14) },
  indicationView: { marginVertical: scale(10) },
  indicationSize: { marginTop: scale(10), fontSize: scale(11) },
});
