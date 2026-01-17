import PurchaseStarPower from "@/assets/svg/purchase/PurchaseStarPower";
import Button from "@/components/form/Button";
import FeaturesSection from "@/components/subscription/section/FeaturesSection";
import PurchaseCard from "@/components/user_profile/section/my_purchase/PurchaseCard";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, View } from "react-native";
import { IndividualPlanDetails } from "../Types";

const PurchaseServiceCard = (props: {
  data: IndividualPlanDetails;
  stripeData: { isProcessingPayment: boolean; handleBuyNow: () => void };
}) => {
  const { data, stripeData } = props;
  return (
    <View style={styles.cardContainer} className="bg-white items-center">
      <View className="items-center">
        <PurchaseStarPower height={scale(230)} />
        <View className="bg-brand-background" style={styles.planContainer}>
          <View style={styles.purchaseCardContainer}>
            <PurchaseCard
              serviceName={data.plan_name}
              servicePrice={data.plan_amount}
              starsAllowed={false}
            />
          </View>
          <View style={styles.featureContainer}>
            <FeaturesSection serviceName={data.plan_name} />
            <Button
              title="Buy Now"
              onPress={stripeData.handleBuyNow}
              isLoading={stripeData.isProcessingPayment}
              isDisabled={stripeData.isProcessingPayment}
              variant="warning"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PurchaseServiceCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: SCREEN_WIDTH - scale(20 * 2),
    borderRadius: scale(30),
    paddingHorizontal: scale(20),
    paddingBottom: scale(20),
    marginTop: scale(30),
  },
  planContainer: {
    marginTop: scale(30),
    borderRadius: scale(10),
    marginHorizontal: scale(20),
  },
  purchaseCardContainer: {
    width: SCREEN_WIDTH - scale(40 * 2),
  },
  featureContainer: {
    gap: scale(20),
    paddingVertical: scale(20),
    paddingHorizontal: scale(10),
  },
});
