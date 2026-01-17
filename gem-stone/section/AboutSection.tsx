import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";
import SectionHeader from "./SectionHeader";
import { COLOR_MAPPER } from "@/constants/Stone";
import { useGemStone } from "@/context/gemstoneCtx";
import { SingleGemDetails } from "../Types";

type AboutSectionProps = Pick<
  SingleGemDetails,
  "color" | "planet" | "significance"
>;

const AboutSection = ({ data }: { data: AboutSectionProps }) => {
  const { activeStone } = useGemStone();
  const sectionBackgroundColor = {
    backgroundColor: COLOR_MAPPER[activeStone].section,
  };
  return (
    <View style={[styles?.aboutSection, sectionBackgroundColor]}>
      <SectionHeader title="About" />
      <View>
        <AboutDetails label="Planet" value={data?.planet} />
        <AboutDetails label="Color" value={data?.color} />
      </View>
      <View>
        {data.significance.length > 0 &&
          data.significance?.map((significance, index) => (
            <Text
              key={index}
              style={styles?.aboutSignificance}
              className="text-white font-Avenir-regular"
            >
              {significance}
            </Text>
          ))}
      </View>
    </View>
  );
};

const AboutDetails = ({ label, value }: { label: string; value: string }) => {
  return (
    <View className="flex-row">
      <Text
        className="text-white font-Avenir-regular"
        style={styles?.aboutDetails}
      >
        {label}:{" "}
      </Text>
      <Text
        className="text-white font-Avenir-regular"
        style={styles?.aboutDetails}
      >
        {value}
      </Text>
    </View>
  );
};

export default AboutSection;

const styles = StyleSheet.create({
  aboutSection: {
    padding: scale(20),
    gap: scale(10),
    borderRadius: scale(14),
    paddingVertical: scale(20),
    width: SCREEN_WIDTH - scale(20 * 2),
  },
  aboutDetails: {
    fontSize: scale(14),
  },
  aboutSignificance: {
    fontSize: scale(14),
  },
});
