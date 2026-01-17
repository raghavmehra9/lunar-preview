import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { useCallback, useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { TabsType } from "../Types";

interface TimeCategoryTabsProps<T extends TabsType> {
  tabs: T[];
  onTabChange: (tab: T, index: number) => void;
}

const TimeCategoryTabs = <T extends TabsType>({
  tabs,
  onTabChange,
}: TimeCategoryTabsProps<T>) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const translateX = useSharedValue(0);

  const tabWidth = useMemo(
    () => (SCREEN_WIDTH - scale(40)) / tabs.length,
    [tabs.length]
  );

  const handleTabPress = useCallback(
    (tab: T, index: number) => {
      setActiveTabIndex(index);
      translateX.value = withTiming(index * tabWidth, { duration: 250 });
      onTabChange?.(tab, index);
    },
    [tabWidth, translateX, onTabChange]
  );

  const animatedUnderlineStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => (
          <Pressable
            key={tab.name + index}
            style={[styles.tab, { width: tabWidth }]}
            onPress={() => handleTabPress(tab, index)}
          >
            <Text
              className="font-Skillet-regular"
              style={[styles.tabText, { color: tab.textColor }]}
            >
              {tab.tabName}
            </Text>
          </Pressable>
        ))}
      </View>
      <Animated.View
        style={[
          styles.underline,
          {
            width: tabWidth,
            backgroundColor: tabs[activeTabIndex]?.borderColor,
          },
          animatedUnderlineStyle,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tab: {
    alignItems: "center",
  },
  tabText: {
    fontSize: scale(26),
    paddingVertical: scale(10),
  },
  underline: {
    position: "absolute",
    bottom: 0,
    height: scale(3),
    borderRadius: scale(2),
  },
});

export default TimeCategoryTabs;
