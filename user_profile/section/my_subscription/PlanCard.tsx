import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

import CorePlan from "@/assets/svg/subscribe/CorePlan";
import { PlanCardProps } from "@/components/subscription/Types";
import { PLAN_ICON } from "@/constants/Plans";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import PlanDetails from "./PlanDetails";

const PlanCard = (props: PlanCardProps) => {
  const { type = "QuickStart", data } = props;

  const PlanIcon = PLAN_ICON[type] ?? CorePlan;

  return (
    <LinearGradient
      colors={["#713385", "#3E1F48"]}
      className="items-center"
      style={styles.planCard}
    >
      <View className="flex-row justify-between items-center">
        <PlanIcon width={scale(126)} height={scale(86)} />
        <PlanDetails data={data} />
      </View>
    </LinearGradient>
  );
};

export default PlanCard;

const styles = StyleSheet.create({
  planCard: {
    width: SCREEN_WIDTH - scale(44),
    paddingVertical: scale(18),
    paddingHorizontal: scale(24),
    borderRadius: scale(10),
  },
});
