import useSubscriptionPlans from "@/_hooks/subscriptions/useSubscriptionPlans";
import { useUserDetails } from "@/_hooks/user/useUserDetails";
import SubscriptionMeditation from "@/assets/svg/subscribe/SubscriptionMeditation";
import PlanCard from "@/components/user_profile/section/my_subscription/PlanCard";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { useSelectedSubscription } from "@/context/subscriptionCtx";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PlanSection = () => {
  const userDetails = useUserDetails();
  const subscriptionPlans = useSubscriptionPlans();
  const { activePlan, handlePlanSelection } = useSelectedSubscription();

  const svgIconWidth = SCREEN_WIDTH - scale(20 * 2);

  if (subscriptionPlans?.data?.length === 0 || subscriptionPlans?.isError) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.plansWrapper}>
      {subscriptionPlans?.data?.map((subscribePlan) => (
        <TouchableOpacity
          style={[
            styles.planContainer,
            activePlan === subscribePlan._id
              ? styles.selectedPlan
              : activePlan
              ? styles.unselectedPlan
              : null,
          ]}
          onPress={() => {
            if (userDetails?.data?.activeSubscriptions?.length === 0) {
              handlePlanSelection(subscribePlan._id);
            }
          }}
          key={subscribePlan._id}
        >
          <PlanCard type={subscribePlan?.plan_name} data={subscribePlan} />
        </TouchableOpacity>
      ))}
      <SubscriptionMeditation width={svgIconWidth} />
    </View>
  );
};

export default PlanSection;

const styles = StyleSheet.create({
  plansWrapper: { gap: scale(20) },
  planContainer: {
    borderRadius: scale(12),
    borderWidth: scale(2),
    borderColor: "#FFF",
  },
  selectedPlan: {
    borderColor: "#FFC981",
  },
  unselectedPlan: {
    opacity: 0.8,
  },
});
