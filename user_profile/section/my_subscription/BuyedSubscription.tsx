import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, View } from "react-native";
import PastSubscriptionDivider from "./PastSubscriptionDivder";
import SubscriptionItem from "./PlanCard";
import SubscriptionDetailBox from "./SubscriptionDetailBox";
import { ActiveSubscription, UserSubscriptionDetails } from "./constants";

const SubscriptionSection = ({
  subscriptions,
  isPast = false,
}: {
  subscriptions: ActiveSubscription[];
  isPast?: boolean;
}) => {
  return (
    <View style={isPast ? styles.pastSubscriptions : styles.mainContent}>
      {isPast && <PastSubscriptionDivider />}
      {subscriptions?.map((subscription, index) => (
        <View style={styles.subscriptionContainer} key={index}>
          <View className="items-center">
            <SubscriptionItem
              type={subscription.planId.plan_name}
              data={{
                plan_amount: subscription.planId.plan_amount,
                plan_name: subscription.planId.plan_name,
                validity: subscription.planId.validity,
              }}
            />
          </View>
          <View style={styles.detailsRow}>
            <SubscriptionDetailBox
              width={"48%"}
              data={{
                label: "Purchased On",
                value: subscription.display_subscription_start_date,
              }}
            />
            <SubscriptionDetailBox
              width={"48%"}
              data={{
                label: "Valid Upto",
                value: subscription.display_subscription_end_date,
              }}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const BuyedSubscription = ({ data }: { data: UserSubscriptionDetails }) => {
  const { activeSubscriptions, expiredSubscriptions } = data;

  return (
    <View style={styles.mainContent}>
      {activeSubscriptions?.length > 0 && (
        <SubscriptionSection subscriptions={activeSubscriptions} />
      )}

      {expiredSubscriptions?.length > 0 && (
        <SubscriptionSection subscriptions={expiredSubscriptions} isPast />
      )}
    </View>
  );
};

export default BuyedSubscription;

const styles = StyleSheet.create({
  mainContent: {
    gap: scale(30),
  },
  subscriptionContainer: {
    gap: scale(10),
  },
  detailsRow: {
    gap: scale(10),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pastSubscriptions: {
    gap: scale(15),
  },
  astrologerIcon: {
    marginTop: scale(40),
  },
});
