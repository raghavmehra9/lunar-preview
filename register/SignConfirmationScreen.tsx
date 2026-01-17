import SignConfusion from "@/assets/svg/SignConfusion";
import commonStyles from "@/styles/commonStyle";
import { scale } from "@/utils/helpers/sizeMatters";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBackground from "../common/AppBackground";
import Heading from "../form/Heading";
import StickyButton from "../onboarding.tsx/StickyButton";

const SignConfirmationScreen = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmitLocation = async () => {
    setLoading(true);
    try {
      router.replace("/(app)/(tabs)");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <AppBackground>
        <SafeAreaView style={commonStyles.container}>
          <View className="items-center">
            <View className="items-center" style={styles?.headerContainer}>
              <SignConfusion width={scale(235)} height={scale(235)} />
              <Heading
                heading="Do things look a little different?"
                style={styles.headingStyle}
              />
            </View>
            <View style={{ gap: scale(20), marginVertical: scale(16) }}>
              <Text
                className="text-darkLiver text-center font-Avenir-heavy"
                style={styles.subHeadingStyle}
              >
                At Lunar we do things differently.
              </Text>
              <Text
                style={styles.subHeadingStyle}
                className="text-darkLiver font-Avenir-regular text-center"
              >
                We use vedic system of knowledge, which varies from Western
                astrology. Vedic astrology uses the sidereal calendar, which
                considers the position of the constellations in the sky in order
                to calculate your placements and birth chart.{" "}
              </Text>
              <Text
                style={styles.subHeadingStyle}
                className="text-darkLiver font-Avenir-regular text-center"
              >
                Whereas Western astrology uses the tropical calendar and
                considers the Earth’s seasons to calculate your chart and
                placements.
              </Text>
            </View>
            <StickyButton
              buttonLoading={loading}
              handleNext={handleSubmitLocation}
              handleSkip={() => {
                if (router.canGoBack()) {
                  router.back();
                }
              }}
              linkTitle="Back"
            />
          </View>
        </SafeAreaView>
      </AppBackground>
    </>
  );
};

export default SignConfirmationScreen;

const styles = StyleSheet.create({
  headingStyle: { fontSize: scale(36), lineHeight: scale(34) },
  subHeadingStyle: { fontSize: scale(14) },
  headerContainer: {
    marginTop: scale(20),
    gap: scale(20),
  },
});
