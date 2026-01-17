import { StyleSheet, Text, View } from "react-native";
import { scale } from "@/utils/helpers/sizeMatters";
import { ZODIAC_SIGNS } from "@/constants/ZodiaSign";
import EmptyFragment from "@/components/EmptyFragment";
import PercentageCircle from "../../common/PercentageCircle";
import { ZodiacSignTypes } from "@/components/register/Types";

type Props = {
  zodiac: ZodiacSignTypes;
  percentage: number;
};

const FavourCard = ({ zodiac, percentage }: Props) => {
  const ZodiacSign = ZODIAC_SIGNS[zodiac] ?? EmptyFragment;

  return (
    <View className="bg-purple-darkPastelPurple" style={styles.wrapper}>
      <Text className="color-white font-Avenir-regular text-center">
        Plan your day with Today’s
      </Text>
      <Text
        className="color-white font-Skillet-regular text-center"
        style={styles.lunarscopeText}
      >
        Lunarscope
      </Text>

      <View className="items-center" style={styles.zodiacWrapper}>
        <PercentageCircle percentage={percentage}>
          <ZodiacSign height={scale(160)} width={scale(160)} />
        </PercentageCircle>
      </View>

      <Text
        className="color-white font-Avenir-regular text-center"
        style={styles.horrorScopeText}
      >
        Your horoscope is
      </Text>

      <View className="bg-white self-center" style={styles.percentageWrapper}>
        <Text
          className="color-purple-pastelPurple font-Skillet-regular text-center"
          style={styles.percentageText}
        >
          60% in favor today
        </Text>
      </View>
    </View>
  );
};

export default FavourCard;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(20),
    borderRadius: scale(15),
    marginTop: scale(30),
  },
  lunarscopeText: {
    fontSize: scale(36),
    lineHeight: scale(50),
  },
  horrorScopeText: {
    lineHeight: scale(24),
    marginBottom: scale(5),
  },
  percentageWrapper: {
    borderRadius: scale(40),
    paddingVertical: scale(10),
    paddingHorizontal: scale(10),
  },
  percentageText: {
    fontSize: scale(24),
    lineHeight: scale(24),
  },
  zodiacWrapper: {
    paddingVertical: scale(25),
  },
});
