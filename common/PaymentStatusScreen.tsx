import PurchaseFailed from "@/assets/svg/subscribe/PurchaseFailed";
import PurchaseSuccess from "@/assets/svg/subscribe/PurchaseSuccess";
import ZodiacSignRound from "@/assets/svg/subscribe/zodiacround";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { router, useGlobalSearchParams } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Button from "../form/Button";
import Heading from "../form/Heading";
import SubHeading from "../form/SubHeading";
import { PurchaseMapper } from "../subscription/Types";
import { SafeAreaView } from "react-native-safe-area-context";

type RouteParams = {
  type: keyof PurchaseMapper;
  successRoute: any;
  heading: string;
};

const PaymentStatusScreen = () => {
  const {
    type = "success",
    successRoute = "",
    heading = "Subscription Activated",
  } = useGlobalSearchParams<RouteParams>();

  console.log("type, successRoute, heading", type, successRoute, heading);

  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 8000,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  }, [rotation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  const STATUS_MAPPER: PurchaseMapper = {
    success: PurchaseSuccess,
    error: PurchaseFailed,
  };

  const PurchaseStatus =
    STATUS_MAPPER[type as keyof PurchaseMapper] ?? PurchaseSuccess;

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.zodiacWrapper}>
          <Animated.View style={animatedStyle}>
            <ZodiacSignRound width={SCREEN_WIDTH * 1.5} />
          </Animated.View>
          <View style={styles.contentContainer}>
            <View style={styles.iconContainer}>
              <PurchaseStatus />
            </View>
            <Heading heading={heading} />
            <SubHeading subHeading="Your cosmic journey begins!" />
          </View>
          {type === "error" ? (
            <Button
              title="Go Back"
              onPress={() => {
                router.canGoBack() && router.back();
              }}
              isLoading={false}
              isDisabled={false}
              variant="primary"
            />
          ) : (
            <></>
          )}
          {type === "success" ? (
            <View className="absolute bottom-10 self-center">
              <Button
                title="Continue"
                onPress={() => {
                  if (successRoute) {
                    router.replace(successRoute);
                  } else {
                    router.replace("/(app)/(tabs)");
                  }
                }}
                isLoading={false}
                isDisabled={false}
                variant="primary"
              />
            </View>
          ) : (
            <></>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default PaymentStatusScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F5F0",
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  zodiacWrapper: {
    position: "relative",
  },
  contentContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "50%",
    transform: [{ translateY: "-50%" }],
    gap: scale(10),
    alignItems: "center",
  },
  iconContainer: {
    alignSelf: "center",
  },
});
