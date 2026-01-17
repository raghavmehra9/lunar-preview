import { SunSubscription } from "@/assets/images";
import SubscriptionCard from "@/assets/svg/astrologer/SubscriptionCard";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { Image, StyleSheet, View } from "react-native";
import CorePlan from "./CorePlan";
import { Subscription } from "./constants";

const SubscriptionItem = ({ data }: { data: Subscription }) => {
  return (
    <View>
      <SubscriptionCard width={SCREEN_WIDTH - scale(40)} />
      <View style={styles.subscriptionInfoContainer}>
        <Image source={SunSubscription} style={styles.subscriptionImage} />
        <CorePlan data={data} />
      </View>
    </View>
  );
};

export default SubscriptionItem;

const styles = StyleSheet.create({
  subscriptionInfoContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    width: SCREEN_WIDTH - scale(88),
    alignItems: "center",
    top: "50%",
    transform: [{ translateY: "-50%" }],
    left: scale(24),
  },
  subscriptionImage: {
    height: scale(75),
    width: scale(75),
  },
});
