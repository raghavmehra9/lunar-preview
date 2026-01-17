import { useUserDetails } from "@/_hooks/user/useUserDetails";
import Cross from "@/assets/svg/common/Cross";
import { SCREEN_HEIGHT } from "@/constants/Spacing";
import { useNotification } from "@/context/notificationContext";
import { requestLocationPermission } from "@/utils/helpers/requestLocationPermission";
import { scale } from "@/utils/helpers/sizeMatters";
import { Href, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { IndividualPlans } from "../purchase/Types";

const SCREEN_WIDTH = Dimensions.get("window").width;
const DRAWER_WIDTH = SCREEN_WIDTH * 0.85;

type RightDrawerProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const menuItems: {
  name: string;
  route: Href;
  individualService?: IndividualPlans;
}[] = [
  {
    name: "Cosmic Crew",
    route: "/(app)/cosmic-crew",
    individualService: "cosmic-crew",
  },
  { name: "Your Daily Advisor", route: "/(app)/cosmic-council" },
  { name: "The Healing Garden", route: "/(app)/frequency" },
  { name: "Get Lucky", route: "/(app)/get-lucky" },
  // { name: "Celestial Clock", route: "/(app)/celestial-clock" },
  // {
  //   name: "Gemstone Recommendation",
  //   route: "/(app)/gem-stone",
  //   individualService: "gemstone",
  // },
  { name: "Release and Reflect", route: "/(app)/moon-calendar" },
  {
    name: "How You Process Emotions",
    route: "/(app)/reports/moon",
    individualService: "moon-sign",
  },
  {
    name: "Your First Impressions",
    route: "/(app)/reports/ascendant",
    individualService: "ascendent-report",
  },
  // { name: "Birth Chart", route: "/(app)/birth-chart/list" },
  { name: "Talk To Our Expert", route: "/(app)/astrologer" },
  { name: "Subscription Plans", route: "/(app)/subscription/plans" },
];

const RightDrawer: React.FC<RightDrawerProps> = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const userDetails = useUserDetails();
  const { showNotification } = useNotification();

  const translateX = useSharedValue(DRAWER_WIDTH);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      requestAnimationFrame(() => {
        translateX.value = withTiming(0, { duration: 300 });
      });
    } else {
      translateX.value = withTiming(
        DRAWER_WIDTH,
        { duration: 300 },
        (finished) => {
          if (finished) runOnJS(setShouldRender)(false);
        }
      );
    }
  }, [isOpen]);

  const drawerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, DRAWER_WIDTH], [0.5, 0]),
    backgroundColor: "rgba(0,0,0,.1)",
  }));

  const navigateAfterClose = (callback?: () => void) => {
    translateX.value = withTiming(
      DRAWER_WIDTH,
      { duration: 300 },
      (finished) => {
        if (finished) {
          runOnJS(setShouldRender)(false);
          runOnJS(setIsOpen)(false);
          if (callback) runOnJS(callback)();
        }
      }
    );
  };

  const handleRouteChange = async (route: Href) => {
    const isGranted = await requestLocationPermission();
    if (isGranted) {
      router.push(route);
    } else {
      showNotification(
        "Please enable location permission to continue",
        "error"
      );
      return;
    }
  };

  const handleIndividualPlans = async (individualService: IndividualPlans) => {
    const isGranted = await requestLocationPermission();
    if (isGranted) {
      const plan = userDetails?.data?.plans;
      const canAccess =
        (individualService === "gemstone" && plan?.gemstone_enabled) ||
        (individualService === "cosmic-crew" && plan?.cosmic_crew_enabled) ||
        (individualService === "moon-sign" && plan?.moon_sign_enabled) ||
        (individualService === "ascendent-report" &&
          plan?.ascendent_report_enabled);

      if (canAccess) {
        const route = menuItems.find(
          (item) => item.individualService === individualService
        )?.route;
        if (route) router.push(route);
      } else {
        router.push({
          pathname: "/(app)/purchase/plans",
          params: { service: individualService },
        });
      }
    } else {
      showNotification("Location not enabled", "error");
    }
  };

  if (!shouldRender) return null;
  return (
    <View style={StyleSheet.absoluteFill}>
      <TouchableOpacity
        style={styles.overlayTouchableArea}
        onPress={() => navigateAfterClose()}
      >
        <Animated.View style={[styles.overlay, overlayStyle]} />
      </TouchableOpacity>

      <View style={[styles.drawerContainer]}>
        <View style={styles.drawer}>
          <View style={styles.header}>
            <Text
              style={styles.title}
              className="font-Skillet-regular text-purple-deepPurple"
            >
              Lunar Services
            </Text>
            <TouchableOpacity onPress={() => navigateAfterClose()}>
              <View style={styles.closeButton}>
                <Cross height={scale(18)} width={scale(18)} color="#883D85" />
              </View>
            </TouchableOpacity>
          </View>

          <FlatList
            data={menuItems}
            keyExtractor={(item) => item.name}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              gap: scale(10),
              paddingBottom: scale(100),
            }}
            renderItem={({ item }) => {
              if (
                item.name === "Subscription Plans" &&
                userDetails?.data?.activeSubscriptions &&
                userDetails?.data?.activeSubscriptions?.length > 0
              ) {
                return null;
              }
              return (
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    navigateAfterClose(() => {
                      if (item.individualService) {
                        handleIndividualPlans(item.individualService);
                      } else {
                        handleRouteChange(item.route);
                      }
                    });
                  }}
                >
                  <Text
                    style={styles.menuText}
                    className="font-Avenir-regular text-purple-jacarta"
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlayTouchableArea: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 5,
  },
  overlay: {
    flex: 1,
  },
  drawerContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    width: DRAWER_WIDTH,
    height: SCREEN_HEIGHT,
    borderTopLeftRadius: scale(20),
    backgroundColor: "white",
    zIndex: 10,
    paddingTop: scale(35),
    shadowColor: "rgba(93, 79, 92, 0.30)",
    // shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: -2, height: 0 },
    shadowRadius: 5,
  },
  drawer: {
    flex: 1,
    padding: scale(20),
    paddingLeft: scale(30),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: scale(20),
  },
  closeButton: {
    backgroundColor: "#F8F4FA",
    padding: scale(8),
    borderRadius: scale(5),
  },
  title: {
    fontSize: scale(30),
  },
  menuItem: {
    paddingVertical: scale(10),
    borderBottomWidth: scale(1),
    borderBottomColor: "#F8F4FA",
  },
  menuText: {
    fontSize: scale(16),
  },
});

export default RightDrawer;
