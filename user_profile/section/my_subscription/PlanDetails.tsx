import { PlanDetailsProps } from "@/components/subscription/Types";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";

const PlanDetails = (props: PlanDetailsProps) => {
  const { plan_amount, validity, plan_name } = props?.data;
  const month = validity > 1 ? "months" : "month";
  return (
    <View className="items-center " style={styles.textContainer}>
      <Text
        className="font-Avenir-regular text-white bg-purple-lightPurple"
        style={styles.planText}
      >
        {plan_name}
      </Text>

      <Text className="text-white font-Avenir-black" style={styles.priceText}>
        ${plan_amount}
      </Text>

      <Text
        className="font-Avenir-regular text-white"
        style={styles.durationText}
      >
        {validity} {month}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    gap: scale(2),
  },
  planText: {
    paddingHorizontal: scale(10),
    paddingVertical: scale(5),
    fontSize: scale(11),
    borderRadius: scale(60),
    borderWidth: scale(1),
    borderColor: "#fff",
  },
  priceText: {
    fontSize: scale(28),
  },
  durationText: {
    fontSize: scale(14),
  },
});

export default PlanDetails;
