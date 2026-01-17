import useCreateOrderId from "@/_hooks/subscriptions/useCreateOrderId";
import { useUserDetails } from "@/_hooks/user/useUserDetails";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { useSelectedSubscription } from "@/context/subscriptionCtx";
import useStripePayment from "@/hooks/useStripePayment";
import { scale } from "@/utils/helpers/sizeMatters";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackNavigation from "../form/BackNavigation";
import Button from "../form/Button";
import SpaceElement from "../SpaceElement";
import FeaturesSection from "./section/FeaturesSection";
import HeadingFeature from "./section/HeadingFeature";
import PlanSection from "./section/PlanSection";

const SubscriptionPlansScreen = () => {
  const userDetails = useUserDetails();
  const createOrderId = useCreateOrderId();

  const { activePlan } = useSelectedSubscription();
  const { isProcessingPayment } = useStripePayment();

  const handlePurchase = () => {
    if (!activePlan) {
      Alert.alert("Please select a plan");
      return;
    }
    createOrderId.mutate(activePlan);
  };

  return (
    <View className="flex-1 bg-brand-background">
      <SafeAreaView className="flex-1" edges={["top"]}>
        <View style={{ paddingHorizontal: scale(20) }}>
          <BackNavigation headerName="Back" />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="bg-white"
          style={styles.scrollStyle}
          contentContainerStyle={styles.wrapper}
        >
          <HeadingFeature />
          <FeaturesSection />
          <PlanSection />
          <SpaceElement spacing={50} />
        </ScrollView>
        {userDetails?.data?.activeSubscriptions &&
        userDetails?.data?.activeSubscriptions?.length > 0 ? (
          <></>
        ) : (
          <View style={styles.stickyButton}>
            <Button
              title="Buy Now"
              onPress={handlePurchase}
              isLoading={isProcessingPayment}
              isDisabled={!activePlan || isProcessingPayment}
              variant="warning"
            />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default SubscriptionPlansScreen;

const styles = StyleSheet.create({
  scrollStyle: {
    borderTopLeftRadius: scale(60),
    borderTopRightRadius: scale(60),
  },
  wrapper: {
    paddingTop: scale(40),
    paddingHorizontal: scale(20),
    gap: scale(25),
  },
  stickyButton: {
    width: SCREEN_WIDTH - scale(20 * 2),
    position: "absolute",
    bottom: scale(40),
    left: "50%",
    transform: [{ translateX: "-50%" }],
  },
});
