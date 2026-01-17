import { COUNCIL_COLOR_MAPPER } from "@/constants/Council";
import { capitalizeWord } from "@/utils/helpers/capitalizeWord";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";
import { CouncilCardBodyProps, CouncilCardProps } from "../Type";

const CouncilCard = ({ children, title, subTitle }: CouncilCardProps) => {
  const currentBackgroundColor = {
    backgroundColor: COUNCIL_COLOR_MAPPER[title]?.background,
  };
  const panchangEnglish =
    title === "tithi"
      ? "Day Star"
      : title === "nakshatra"
      ? "Constellation"
      : "Solar Noon";
  return (
    <View className="w-full" style={[styles?.card, currentBackgroundColor]}>
      <View className="items-center" style={styles?.headingGroup}>
        {title && (
          <Text className="text-white font-Avenir-heavy" style={styles?.title}>
            {capitalizeWord(title)}{" "}
            <Text
              className="font-Avenir-regular"
              style={{ fontSize: scale(12) }}
            >
              ({panchangEnglish})
            </Text>
          </Text>
        )}
        {subTitle && (
          <Text
            className="text-white font-Skillet-regular"
            style={styles?.subtitle}
          >
            {subTitle}
          </Text>
        )}
      </View>
      {children}
    </View>
  );
};

CouncilCard.Body = ({
  label,
  value,
  title,
  className,
}: CouncilCardBodyProps) => {
  const currentSectionColor = {
    backgroundColor: COUNCIL_COLOR_MAPPER[title]?.section,
  };

  if (!value) {
    return <></>;
  }
  return (
    <View style={[styles?.section, currentSectionColor]}>
      {label && (
        <Text
          className="font-Avenir-black text-white"
          style={styles?.sectionFontStyle}
        >
          {`${label}: `}
        </Text>
      )}
      <Text
        className={`font-Avenir-light text-white ${className}`}
        style={styles?.sectionFontStyle}
      >
        {value}
      </Text>
    </View>
  );
};

export default CouncilCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "red",
    gap: scale(9),
    borderRadius: scale(16.7),
    paddingVertical: scale(16),
    paddingHorizontal: scale(11),
  },
  title: {
    fontSize: scale(14),
  },
  subtitle: {
    fontSize: scale(30),
  },
  headingGroup: { gap: scale(5) },
  sectionFontStyle: { fontSize: scale(14) },
  section: { padding: scale(11), borderRadius: scale(11) },
});
