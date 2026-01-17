import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";
import ReportSection from "../common/ReportSection";
import { MoonSignReport } from "./Types";

const MoonSection = (props: MoonSignReport) => {
  const { description, loveNeeds, strengths, watchOutFor } = props;
  return (
    <View style={styles.reportContainer}>
      <Text
        style={styles.descriptionText}
        className="font-Avenir-regular text-darkLiver"
      >
        {description.trimEnd()}
      </Text>
      <ReportSection title="What Makes You Strong?" data={strengths} />
      <ReportSection
        title="What You Need to Watch Out For:"
        data={watchOutFor}
      />
      <ReportSection title="What You Need in Love:" data={loveNeeds} />
    </View>
  );
};

export default MoonSection;

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: scale(20),
  },
  reportContainer: {
    padding: scale(20),
    marginTop: scale(20),
    borderRadius: scale(10),
    backgroundColor: "white",
  },
  descriptionText: {
    fontSize: scale(14),
  },
});
