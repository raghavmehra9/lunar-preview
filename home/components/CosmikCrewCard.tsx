import { useUserDetails } from "@/_hooks/user/useUserDetails";
import CrewCosmicTeam from "@/assets/svg/cosmic_crew/category/CrewCosmicTeam";
import { IndividualPlans } from "@/components/purchase/Types";
import { useNotification } from "@/context/notificationContext";
import { requestLocationPermission } from "@/utils/helpers/requestLocationPermission";
import { scale } from "@/utils/helpers/sizeMatters";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CosmicCrewCard = () => {
  const userDetails = useUserDetails();
  const { showNotification } = useNotification();

  const handleIndividualPlans = async (individualService: IndividualPlans) => {
    const isGranted = await requestLocationPermission();
    if (isGranted) {
      if (
        individualService === "cosmic-crew" &&
        userDetails?.data?.plans?.cosmic_crew_enabled
      ) {
        router.push("/(app)/cosmic-crew");
      } else {
        router.push({
          pathname: "/(app)/purchase/plans",
          params: {
            service: individualService,
          },
        });
      }
    } else {
      showNotification("Location not enabled", "error");
    }
  };

  return (
    <TouchableOpacity
      onPress={() => handleIndividualPlans("cosmic-crew")}
      className="bg-purple-pastelPurple flex-row justify-between items-center"
      style={[styles.wrapper, { paddingVertical: scale(20) }]}
    >
      <View>
        <Text
          className="text-white font-Avenir-regular"
          style={styles.subHeading}
        >
          Check out your
        </Text>
        <Text
          className="text-white font-Skillet-regular"
          style={styles.heading}
        >
          Cosmic Crew
        </Text>
      </View>
      <View style={{ position: "absolute", bottom: 0, right: scale(5) }}>
        <CrewCosmicTeam height={scale(94)} width={scale(125)} />
      </View>
    </TouchableOpacity>
  );
};

export default CosmicCrewCard;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: scale(15),
    paddingHorizontal: scale(20),
    marginTop: scale(15),
  },
  heading: {
    fontSize: scale(30),
  },
  subHeading: {
    fontSize: scale(16),
  },
});
