import MeditatingIllustrator from "@/assets/svg/homescreen/MeditatingIllustrator";
import Button from "@/components/form/Button";
import { scale } from "@/utils/helpers/sizeMatters";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BookNowCard = () => {
  return (
    <LinearGradient
      colors={["#713385", "#3E1F48"]}
      start={{ x: 1.3, y: 0.82 }}
      end={{ x: 0.15, y: 0.78 }}
      style={styles.wrapper}
    >
      <Text
        className="font-Skillet-regular text-center color-white  max-w-72"
        style={styles.heading}
      >
        Expert Guidance
      </Text>
      <Text
        className="font-Avenir-regular text-center "
        style={styles.subHeading}
      >
        Have questions about your future? Connect with expert astrologers for
        personalized insights and clarity.
      </Text>
      <View style={styles.IllustratorWrapper}>
        <MeditatingIllustrator />
      </View>
      <Button
        title="Book Now"
        variant="warning"
        onPress={() => {
          router.push("/(app)/astrologer");
        }}
        isDisabled={false}
        isLoading={false}
        parentClass="w-full"
      />
    </LinearGradient>
  );
};

export default BookNowCard;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(20),
    borderRadius: scale(20),
    alignItems: "center",
    marginTop: scale(15),
  },
  heading: {
    fontSize: scale(36),
    marginTop: scale(10),
  },
  subHeading: {
    fontSize: scale(13),
    lineHeight: scale(18),
    color: "#FFFFFFCC",
  },
  IllustratorWrapper: {
    paddingVertical: scale(30),
  },
});
