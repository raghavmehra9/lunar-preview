import { useUserDetails } from "@/_hooks/user/useUserDetails";
import GemstoneHolding from "@/assets/svg/gem-stone/GemstoneHolding";
import { IndividualPlans } from "@/components/purchase/Types";
import { useNotification } from "@/context/notificationContext";
import { requestLocationPermission } from "@/utils/helpers/requestLocationPermission";
import { scale } from "@/utils/helpers/sizeMatters";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const KnowGemsCard = () => {
  const userDetails = useUserDetails();
  const { showNotification } = useNotification();

  const handleIndividualPlans = async (individualService: IndividualPlans) => {
    const isGranted = await requestLocationPermission();
    if (isGranted) {
      if (
        individualService === "gemstone" &&
        userDetails?.data?.plans?.gemstone_enabled
      ) {
        router.push("/(app)/gem-stone");
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
      return;
    }
  };

  return (
    <TouchableOpacity
      onPress={() => handleIndividualPlans("gemstone")}
      className="bg-pink-lightPink flex-row justify-between items-center"
      style={styles.wrapper}
    >
      <View
        style={{
          gap: scale(4),
          paddingTop: scale(20),
          paddingBottom: scale(10),
        }}
      >
        <Text
          className="text-white font-Skillet-regular"
          style={styles.heading}
        >
          Gemstone{"\n"}Recommendation
        </Text>
      </View>
      <View style={{ position: "absolute", bottom: 0, right: scale(5) }}>
        <GemstoneHolding width={scale(86)} height={scale(93)} />
      </View>
    </TouchableOpacity>
  );
};

export default KnowGemsCard;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: scale(15),
    paddingHorizontal: scale(20),
    marginTop: scale(15),
    paddingVertical: scale(10),
  },
  heading: {
    fontSize: scale(32),
    lineHeight: scale(28),
  },
  subHeading: {
    fontSize: scale(16),
  },
});
