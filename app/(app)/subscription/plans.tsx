import SubscriptionPlansScreen from "@/components/subscription";
import { SubscriptionProvider } from "@/context/subscriptionCtx";

const SubscriptionPlans = () => {
  return (
    <SubscriptionProvider>
      <SubscriptionPlansScreen />
    </SubscriptionProvider>
  );
};

export default SubscriptionPlans;
