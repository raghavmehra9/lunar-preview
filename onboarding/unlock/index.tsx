import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "../../form/Button";
import Heading from "../../form/Heading";
import SubHeading from "../../form/SubHeading";

import GradientWavePurple from "@/assets/svg/onboarding/GradientWavePurple";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/Spacing";
import { useSession } from "@/context/ctx";
import { scale } from "@/utils/helpers/sizeMatters";
import MovingClouds from "../welcome/MovingClouds";
import MagicAnimation from "./MagicAnimation";
import { router } from "expo-router";

const CLOUD_HEIGHT = SCREEN_HEIGHT * 0.2;

const UnlockScreen = () => {
  const { session } = useSession();
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
            heading={"Preparing\nyour path to\ncalm &\nclarity"}
            className="text-white"
            style={{ fontSize: scale(65), lineHeight: scale(50) }}
          />

          <SubHeading
            subHeading={
              "Your answers help us align\nguidance, timings, and energy\ntips made just for you."
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
              title="Let's Unlock It"
              onPress={() => {
                if (session && !session.isUserOnboarded) {
                  router.replace("/(auth)/registration");
                } else {
                  router.replace("/(app)/(tabs)");
                }
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
          <MagicAnimation />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default UnlockScreen;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: scale(20),
    marginBottom: SCREEN_HEIGHT * 0.15,
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
