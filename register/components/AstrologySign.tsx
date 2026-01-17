import Heading from "@/components/form/Heading";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";
import { AstrologySignProps, AstrologyTypes } from "../Types";
import { ZODIAC_SIGNS } from "@/constants/ZodiaSign";
import EmptyFragment from "@/components/EmptyFragment";

const AstrologySign = ({ type, heading }: AstrologySignProps) => {
  const ZodiacSign = ZODIAC_SIGNS[heading] ?? EmptyFragment;

  return (
    <View className="flex-col items-center" style={styles?.signContainer}>
      <View>
        <Title heading={type} />
        <Heading heading={heading} className="text-white" />
      </View>

      <ZodiacSign
        width={SCREEN_WIDTH / scale(1.6)}
        height={SCREEN_WIDTH / scale(1.6)}
      />
    </View>
  );
};

const Title = ({ heading }: { heading: AstrologyTypes }) => {
  return (
    <Text className="font-Avenir-light text-white" style={styles?.titleStyle}>
      Your <Text className="font-Avenir-heavy">{heading}</Text> Sign Is
    </Text>
  );
};

export default AstrologySign;

const styles = StyleSheet.create({
  signContainer: { gap: scale(8) },
  titleStyle: {
    fontSize: scale(16),
  },
});
