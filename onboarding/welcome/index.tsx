import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "../../form/Button";
import Heading from "../../form/Heading";
import SubHeading from "../../form/SubHeading";

import GradientWavePurple from "@/assets/svg/onboarding/GradientWavePurple";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";

import { router } from "expo-router";
import FloatingImage from "./FloatingImage";
import MovingClouds from "./MovingClouds";

const CLOUD_HEIGHT = SCREEN_HEIGHT * 0.2;

const WelcomeScreen = () => {
  return (
    <View className="flex-1 bg-brand-primary">
      <SafeAreaView className="flex-1">
        <View style={{ height: CLOUD_HEIGHT }}>
          <MovingClouds
            cloudSource={require("@assets/images/welcome/clouds.webp")}
            speed={120}
            height={CLOUD_HEIGHT}
          />
        </View>

        <View style={styles.contentContainer}>
          <Heading
            heading="Welcome to Lunar"
            className="text-white"
            style={{ fontSize: scale(65), lineHeight: scale(50) }}
          />

          <SubHeading
            subHeading={
              "Discover the cosmic rhythms that\nshape your day and align your\nmind, body, and spirit."
            }
            className="mt-5 text-center"
            style={{
              color: "#fff",
              opacity: 0.8,
              fontSize: scale(15),
              lineHeight: scale(20),
            }}
          />

          <View style={styles.buttonWrapper}>
            <Button
              title="Begin Your Journey"
              onPress={() => {
                router.push("/(auth)/onboarding/getting-started");
              }}
              isLoading={false}
              isDisabled={false}
              variant="secondary"
            />
          </View>
        </View>

        <View style={styles.gradientWrapper}>
          <GradientWavePurple
            width={SCREEN_WIDTH}
            height={SCREEN_WIDTH * 0.72}
          />
          <View
            style={{
              position: "absolute",
              alignSelf: "center",
              top: scale(30),
            }}
          >
            <FloatingImage
              source={require("@assets/images/welcome/meditation.webp")}
              size={220}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: scale(20),
    marginBottom: SCREEN_HEIGHT * 0.3,
  },
  buttonWrapper: {
    alignSelf: "center",
    marginTop: scale(30),
  },
  gradientWrapper: {
    position: "absolute",
    bottom: scale(20),
    width: SCREEN_WIDTH,
    zIndex: -1,
  },
});
