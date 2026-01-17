import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";

const Indication = () => {
  return (
    <View className="bg-purple-maxPurple" style={styles?.indication}>
      <Text
        className="text-white font-Avenir-heavy text-center"
        style={styles?.indicationText}
      >
        Tap the card above to see what the stars have in store for you today!
      </Text>
    </View>
  );
};

export default Indication;

const styles = StyleSheet.create({
  indication: {
    borderRadius: scale(10),
    padding: scale(10),
    marginBottom: scale(40),
  },
  indicationText: {
    fontSize: scale(16),
    lineHeight: scale(24),
  },
});
