import IntroScreen_1 from "@/assets/svg/onboarding/IntroScreen_1";
import IntroScreen_2 from "@/assets/svg/onboarding/IntroScreen_2";
import IntroScreen_3 from "@/assets/svg/onboarding/IntroScreen_3";
import IntroScreen_4 from "@/assets/svg/onboarding/IntroScreen_4";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { Platform, StyleSheet, View } from "react-native";
import Heading from "../form/Heading";
import SubHeading from "../form/SubHeading";

const OnBoardingScreen1 = () => {
  return (
    <View
      className="items-center justify-center"
      style={[styles.onboardingScreen1, styles.gap10, styles.screenContainer]}
    >
      <IntroScreen_1 height={scale(SCREEN_WIDTH / 1.3)} />
      <View className="text-center" style={styles.textContainer}>
        <Heading
          heading="Discover Your Moon Sign"
          style={{
            fontSize: scale(48),
            lineHeight: scale(40),
            paddingHorizontal: scale(20),
          }}
        />
        <SubHeading
          subHeading="Vedic astrology uses the moon sign for deeper insights into your emotions, inner-self, and life purpose."
          style={styles.subheadingStyle}
        />
      </View>
    </View>
  );
};

const OnBoardingScreen2 = () => (
  <View
    className="items-center justify-center"
    style={[styles.gap10, styles.screenContainer]}
  >
    <IntroScreen_2 height={scale(SCREEN_WIDTH)} />
    <View className="text-center" style={styles.textContainer}>
      <Heading
        heading="Get Daily Guidance"
        className="mx-24"
        style={{ fontSize: scale(48), lineHeight: scale(40) }}
      />
      <SubHeading
        subHeading="in all aspects of life and plan your day with insights generated just for you!"
        style={styles.onboardingScreen2Subheading}
      />
    </View>
  </View>
);

const OnBoardingScreen3 = () => {
  return (
    <View
      className="items-center justify-center"
      style={[
        styles.onboardingscreen3view,
        styles.gap10,
        styles.screenContainer,
      ]}
    >
      <IntroScreen_3 height={scale(SCREEN_WIDTH / 1.25)} />
      <View className="text-center" style={styles.textContainer}>
        <Heading
          heading="Personalised Insights"
          style={{ fontSize: scale(48), lineHeight: scale(40) }}
        />
        <SubHeading
          subHeading="individually tailored for you according to your time, place, & date of birth"
          style={styles.onboardingScreen3Subheading}
        />
      </View>
    </View>
  );
};

const OnBoardingScreen4 = () => {
  return (
    <View
      className="items-center justify-center"
      style={[
        styles.onboardingscreen4view,
        styles.gap5,
        styles.screenContainer,
      ]}
    >
      <IntroScreen_4 height={scale(SCREEN_WIDTH / 1.3)} />
      <View className="text-center" style={styles.textContainer}>
        <Heading
          heading="Start Your Cosmic Journey"
          className="mx-10"
          style={{ fontSize: scale(48), lineHeight: scale(40) }}
        />
        <SubHeading
          subHeading="we’re here to guide you every step of the way!"
          className="mx-4"
        />
      </View>
    </View>
  );
};

export {
  OnBoardingScreen1,
  OnBoardingScreen2,
  OnBoardingScreen3,
  OnBoardingScreen4,
};

const styles = StyleSheet.create({
  textContainer: {
    gap: scale(10),
  },
  screenContainer: {
    width: SCREEN_WIDTH,
  },
  onboardingScreen1: {
    marginTop: scale(65),
  },
  subheadingStyle: {
    paddingHorizontal: scale(12),
  },
  gap10: {
    gap: scale(10),
  },
  gap5: {
    gap: scale(5),
  },
  onboardingScreen2Subheading: {
    marginHorizontal: scale(26),
  },
  onboardingScreen3Subheading: {
    marginHorizontal: scale(8),
    paddingHorizontal: scale(20),
  },
  onboardingscreen3view: {
    marginTop: scale(Platform.OS === "ios" ? 75 : 100),
  },
  onboardingscreen4view: { marginTop: scale(Platform.OS === "ios" ? 50 : 30) },
});
