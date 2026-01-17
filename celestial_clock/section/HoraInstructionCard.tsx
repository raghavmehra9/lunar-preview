import CircleTick from "@/assets/svg/CircleTick"; // Assuming this is the correct import
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";
import { HoraInstructionCardProps } from "../Types";

const LABEL: Record<string, string> = {
  doThis: "Do This",
  avoidThis: "Avoid This",
};

const HoraInstructionCard: React.FC<HoraInstructionCardProps> = ({
  instructions,
}) => {
  return (
    <View className="bg-purple-lavenderWeb" style={styles.cardContainer}>
      {Object.entries(instructions).map(([label, value], index) => {
        if (!LABEL[label] || !Array.isArray(value) || value.length === 0) {
          return null;
        }
        return (
          <View style={styles.rowContainer} key={index}>
            <CircleTick />
            <View style={styles.textContainer}>
              <Text
                className="font-Avenir-regular"
                style={styles.instructionText}
              >
                <Text className="font-Avenir-heavy">{LABEL[label]}: </Text>
                {value.join(", ")}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default HoraInstructionCard;

const styles = StyleSheet.create({
  cardContainer: {
    padding: scale(20),
    width: "100%",
    marginTop: scale(20),
    borderRadius: scale(10),
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: scale(10),
  },
  rowSpacing: {
    marginTop: scale(10),
  },
  textContainer: {
    flex: 1,
  },
  instructionText: {
    fontSize: scale(14),
    flexWrap: "wrap",
  },
});
