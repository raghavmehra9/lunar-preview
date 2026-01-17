import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, View } from "react-native";
import ElementCard from "../common/ElementCard";
import ReportSection from "../common/ReportSection";
import { AscendantReport } from "./Types";
import TuneWithYourVibe from "../frequency/TuneWithYourVibe";
import { router } from "expo-router";

const AscendantSection = (props: AscendantReport) => {
  const {
    sign,
    lagna,
    loveAndRelationships,
    friendship,
    careers,
    element,
    rulingPlanets,
    modality,
    traits,
  } = props;
  return (
    <View>
      <View className="flex-row" style={styles.elementsContainer}>
        <ElementCard cardTitle="Element" icon={element} />
        <ElementCard cardTitle="Ruled By" icon={rulingPlanets[0]} />
        <ElementCard cardTitle="Modality" icon={modality} />
      </View>
      <View style={styles.reportContainer}>
        {traits.good && (
          <ReportSection title={`The Good Stuff`} data={traits.good} bullet />
        )}
        {traits.needsWork && (
          <ReportSection
            title={`The Stuff That Needs Work`}
            data={traits.needsWork}
            bullet
          />
        )}
        {lagna && (
          <ReportSection
            title={`The Lowdown on ${sign} Ascendant`}
            data={lagna.trimEnd()}
          />
        )}
        {loveAndRelationships && (
          <ReportSection
            title={`${sign} in Love & Relationships`}
            data={loveAndRelationships.trimEnd()}
          />
        )}
        {friendship && (
          <ReportSection
            title={`${sign} as Your Bestie`}
            data={friendship.trimEnd()}
          />
        )}
        {careers && (
          <ReportSection title={`Careers for ${sign}`} bullet data={careers} />
        )}
      </View>
      <TuneWithYourVibe
        heading="Strengthen your presence"
        onPress={() => {
          router.push("/(app)/frequency");
        }}
        subheading={"Tune into your\nAscendant Frequency"}
      />
    </View>
  );
};

export default AscendantSection;

const styles = StyleSheet.create({
  elementsContainer: { gap: scale(10), marginTop: scale(20) },
  screenContainer: {
    paddingHorizontal: scale(20),
  },
  reportContainer: {
    paddingBottom: scale(20),
    paddingTop: scale(10),
    paddingHorizontal: scale(20),
    marginTop: scale(20),
    borderRadius: scale(10),
    backgroundColor: "white",
    marginBottom: scale(20),
  },
  descriptionText: {
    fontSize: scale(14),
  },
});
