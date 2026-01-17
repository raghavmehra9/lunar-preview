import CosmicIconIllustrator from "@/assets/svg/homescreen/CosmicIconIllustrator";
import { useNotification } from "@/context/notificationContext";
import { requestLocationPermission } from "@/utils/helpers/requestLocationPermission";
import { scale } from "@/utils/helpers/sizeMatters";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const YourCosmicCouncil = () => {
  const { showNotification } = useNotification();

  return (
    <View className="bg-purple-lightPastel items-center" style={styles.wrapper}>
      <Text
        className="font-Skillet-regular color-purple-deepPurple text-center"
        style={styles.headingText}
      >
        Your Daily Advisor
      </Text>
      <Text
        className="font-Avenir-regular color-purple-deepPurple text-center self-center"
        style={styles.subHeadingText}
      >
        {
          "Plan your day with purpose!\nTap into the energies of the day to make better choices & align with the universe’s timing"
        }
      </Text>
      <CosmicIconIllustrator />
      <TouchableOpacity
        onPress={async () => {
          const isGranted = await requestLocationPermission();

          if (isGranted) {
            router.push("/(app)/cosmic-council");
          } else {
            showNotification("Location not enabled", "error");
            return;
          }
        }}
      >
        <Text
          className="font-Avenir-regular color-white text-center bg-purple-plum self-center"
          style={styles.checkVerdictText}
        >
          See What’s In Store Today
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default YourCosmicCouncil;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: scale(25),
    paddingVertical: scale(20),
    paddingHorizontal: scale(10),
    marginTop: scale(15),
  },
  headingText: {
    fontSize: scale(30),
  },
  subHeadingText: {
    fontSize: scale(13),
    lineHeight: scale(18),
    maxWidth: "80%",
  },
  checkVerdictText: {
    fontSize: scale(16),
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    borderRadius: scale(40),
  },
});
