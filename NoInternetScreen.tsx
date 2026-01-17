import NetInfo from "@react-native-community/netinfo";
import NointernetPlanet1 from "@/assets/svg/NoInternet/NointernetPlanet1";
import NoInternetPlanet2 from "@/assets/svg/NoInternet/NoInternetPlanet2";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { BackHandler, StyleSheet, View } from "react-native";
import Heading from "./form/Heading";
import SubHeading from "./form/SubHeading";
import WifiIcon from "./WifiIcon";
import { router, useFocusEffect } from "expo-router";
import React, { useEffect } from "react";

const NoInternetScreen = () => {
  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        router.back();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () => {
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      };
    }, [])
  );

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <View style={styles.topPlanet}>
        <NointernetPlanet1 />
      </View>
      <WifiIcon />
      <Heading heading="Oops!" />
      <SubHeading subHeading="Looks like Mercury retrograde struck your internet. Reconnect and realign!" />
      <View style={styles.bottomPlanet}>
        <NoInternetPlanet2 width={scale(326)} height={scale(204)} />
      </View>
    </View>
  );
};

export default NoInternetScreen;

const styles = StyleSheet.create({
  topPlanet: {
    position: "absolute",
    top: 0,
    right: scale(-20),
  },
  bottomPlanet: {
    position: "absolute",
    bottom: 0,
    left: -(SCREEN_WIDTH / 3.5),
  },
});
