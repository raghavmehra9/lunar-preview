import ServiceStars from "@/assets/svg/purchase/ServiceStars";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";

type PurchaseCardProps = {
  serviceName: string;
  servicePrice: number;
  color?: "pink" | "purple";
  starsAllowed?: boolean;
};

const PurchaseCard = (props: PurchaseCardProps) => {
  const { serviceName, servicePrice, color, starsAllowed = true } = props;

  const COLORS = {
    pink: "#F58EA8",
    purple: "#AC99D3",
  };

  const dynamicColors = { backgroundColor: COLORS[color ?? "pink"] };
  return (
    <View
      style={[styles.card, dynamicColors]}
      className="flex-row items-center justify-between"
    >
      <Text
        className="text-white font-Skillet-regular"
        numberOfLines={2}
        ellipsizeMode="tail"
        style={styles.title}
      >
        {serviceName === "Ascendent Report" ? "Ascendant Report" : serviceName}
      </Text>
      <View className="flex-col items-center">
        <Text className="text-white font-Avenir-heavy" style={styles.price}>
          ${servicePrice}
        </Text>
        <Text
          className="text-white font-Avenir-regular"
          style={styles.accessText}
        >
          Life Time Access
        </Text>
      </View>
      {starsAllowed && (
        <View style={styles.absoluteStars}>
          <ServiceStars />
        </View>
      )}
    </View>
  );
};

export default PurchaseCard;

const styles = StyleSheet.create({
  card: {
    paddingVertical: scale(18),
    paddingHorizontal: scale(20),
    borderRadius: scale(10),
  },
  title: {
    fontSize: scale(26),
    lineHeight: scale(22),
    flex: 0.9,
  },
  price: {
    fontSize: scale(18),
  },
  accessText: {
    fontSize: scale(11),
  },
  absoluteStars: { position: "absolute", left: "65%", top: "20%" },
});
