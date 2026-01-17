import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";

const MoonPhaseDescription = ({ description }: { description: string }) => {
  return (
    <View
      className="bg-whitefloral"
      style={styles?.moonPhaseDescriptionContainer}
    >
      <Text className="font-Avenir-light" style={styles.moonPhaseDescription}>
        {description}
      </Text>
    </View>
  );
};

export default MoonPhaseDescription;

const styles = StyleSheet.create({
  moonPhaseDescriptionContainer: {
    padding: scale(16),
    borderRadius: scale(10),
  },
  moonPhaseDescription: { fontSize: scale(14) },
});
