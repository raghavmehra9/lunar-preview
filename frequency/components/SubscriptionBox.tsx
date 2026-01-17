import useMutateFrequencyPayment from "@/_hooks/frequency/useMutateFrequencyPayment";
import { Frequency } from "@/api/frequency/types";
import FreqMeditation from "@/assets/svg/frequency/FreqMeditation";
import Button from "@/components/form/Button";
import useStripePayment from "@/hooks/useStripePayment";
import { scale } from "@/utils/helpers/sizeMatters";
import { Alert, StyleSheet, Text, View } from "react-native";

const SubscriptionBox = ({
  freqId,
  price,
}: {
  freqId: string;
  price: Pick<Frequency, "price">;
}) => {
  const createFrequencyPayment = useMutateFrequencyPayment(freqId);

  const { isProcessingPayment } = useStripePayment();

  const handlePurchaseAudio = () => {
    if (!freqId) {
      Alert.alert("Something went wrong");
      return;
    }

    createFrequencyPayment.mutate(freqId);
  };
  return (
    <View className="bg-white" style={styles.container}>
      <View className=" flex-row">
        <View style={styles.imageContainer}>
          <FreqMeditation width={scale(105)} height={scale(105)} />
        </View>
        <View style={styles.contentContainer}>
          <PriceSection price={price} />
          <DescriptionSection />
        </View>
      </View>
      <Button
        title="Buy Now"
        onPress={handlePurchaseAudio}
        isLoading={isProcessingPayment}
        isDisabled={isProcessingPayment}
        variant="primary"
      />
    </View>
  );
};

const PriceSection = ({ price }: { price: Pick<Frequency, "price"> }) => {
  return (
    <View
      className="flex-row items-center justify-center"
      style={styles.priceContainer}
    >
      <Text
        className="text-brand-primary font-Skillet-regular"
        style={styles.currentPrice}
      >
        $ {price.price}
      </Text>
    </View>
  );
};

const DescriptionSection = () => {
  return (
    <View style={styles.descriptionContainer}>
      <Text
        className="text-purple-plum font-Avenir-heavy"
        style={styles.descriptionTitle}
      >
        Unlock the Power of Sound!
      </Text>
      <Text
        className="text-purple-plum font-Avenir-regular"
        style={styles.descriptionText}
      >
        This is a premium frequency, buy now to listen.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: scale(15),
    gap: scale(10),
    borderRadius: scale(10),
    marginVertical: scale(30),
  },
  imageContainer: {
    flex: 0.4,
  },
  contentContainer: {
    flex: 0.6,
    height: "auto",
    borderRadius: scale(8),
    borderColor: "#FCF1D4",
    borderWidth: scale(1),
  },
  priceContainer: {
    gap: scale(5),
  },
  currentPrice: {
    fontSize: scale(46),
  },
  originalPrice: {
    textDecorationLine: "line-through",
    fontSize: scale(30),
  },
  descriptionContainer: {
    backgroundColor: "#FFFAED",
    padding: scale(10),
    borderRadius: scale(8),
  },
  descriptionTitle: {
    fontSize: scale(11),
  },
  descriptionText: {
    fontSize: scale(10),
  },
});

export default SubscriptionBox;
