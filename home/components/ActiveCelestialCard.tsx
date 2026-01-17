import RightLineArrow from "@/assets/svg/arrow/RightLineArrow";
import CelestialClockFrame from "@/assets/svg/celestial_clock/CelestialClockFrame";
import { useNotification } from "@/context/notificationContext";
import { getCurrentTimeString } from "@/utils/helpers/getCurrentTimeString";
import { requestLocationPermission } from "@/utils/helpers/requestLocationPermission";
import { scale } from "@/utils/helpers/sizeMatters";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ActiveCelestialCard = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTimeString());
  const { showNotification } = useNotification();

  const handlePress = async () => {
    const isGranted = await requestLocationPermission();
    if (isGranted) {
      router.push("/(app)/(tabs)/center");
    } else {
      showNotification("Location not enabled", "error");
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTimeString());
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        className="bg-purple-mediumPastelPurple flex-row justify-between items-center overflow-hidden"
        style={styles.wrapper}
      >
        <View>
          <View>
            <Text
              className="text-white font-Skillet-regular"
              style={styles.heading}
            >
              Plan Your Day
            </Text>
            <Text
              className="text-white font-Avenir-regular"
              style={styles.SubHeading}
            >
              Explore ideal times for the day’s activities
            </Text>
          </View>
          <View
            className="flex-row bg-purple-deepPastelPurple items-center"
            style={styles.indication}
          >
            <Text className="text-white font-Avenir-regular">Let’s Go!</Text>
            <RightLineArrow />
          </View>
        </View>
        <View
          className="absolute"
          style={{
            right: scale(-30),
            bottom: scale(-45),
          }}
        >
          <CelestialClockFrame />

          <View
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: [
                { translateX: scale(-25) },
                { translateY: scale(-10) },
              ],
            }}
          >
            <Text className="text-center font-Avenir-regular text-brand-primary">
              {currentTime}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ActiveCelestialCard;

const styles = StyleSheet.create({
  wrapper: {
    padding: scale(20),
    borderRadius: scale(15),
    marginTop: scale(15),
  },
  heading: {
    fontSize: scale(26),
  },
  SubHeading: {
    fontSize: scale(12),
  },
  indication: {
    marginTop: scale(10),
    gap: scale(6),
    paddingVertical: scale(6),
    paddingHorizontal: scale(10),
    borderRadius: scale(8),
    alignSelf: "flex-start",
  },
  planetSvgWrapper: {
    paddingHorizontal: scale(5),
  },
});
