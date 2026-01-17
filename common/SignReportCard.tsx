import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";
import Heading from "../form/Heading";
import { ZODIAC_SIGNS } from "@/constants/ZodiaSign";
import EmptyFragment from "../EmptyFragment";
import { ZodiacSignTypes } from "../register/Types";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { ReportType } from "../report/Types";

const SignReportCard = ({
  sign = "Aquarius",
  type,
}: {
  sign: ZodiacSignTypes;
  type: ReportType;
}) => {
  const ZodiacSign = ZODIAC_SIGNS[sign] ?? EmptyFragment;
  return (
    <View className="bg-purple-maximumPurple" style={styles.cardContainer}>
      <Text
        className="font-Avenir-light text-center text-white"
        style={styles.textStyle}
      >
        Know more about your {type} sign
      </Text>
      <View style={{ gap: scale(16) }}>
        <Heading heading={sign} className="text-white" />

        <ZodiacSign
          width={SCREEN_WIDTH / scale(1.75)}
          height={SCREEN_WIDTH / scale(1.75)}
        />
      </View>
    </View>
  );
};

export default SignReportCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: scale(10),
    paddingVertical: scale(10),
    gap: scale(5),
    alignItems: "center",
  },
  textStyle: {
    fontSize: scale(15),
  },
});
