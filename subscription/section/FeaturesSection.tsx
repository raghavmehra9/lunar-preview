import SubHeading from "@/components/form/SubHeading";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, View } from "react-native";
import FeaturePoints from "./FeaturePoints";

const FeaturesSection = ({
  serviceName = "Moon Sign",
}: {
  serviceName?: string;
}) => {
  return (
    <View style={styles.featureContainer}>
      <SubHeading
        subHeading="Features"
        className="font-Avenir-light text-purple-africanVoilet"
        style={styles.featureTitle}
      />
      <View style={styles.featurePoints}>
        {serviceName === "Moon Sign" ? (
          <FeaturePointsMoonSign />
        ) : serviceName === "Ascendent Report" ? (
          <FeaturePointsAscendentReport />
        ) : serviceName === "Gemstone" ? (
          <FeaturePointsGemstone />
        ) : serviceName === "Cosmic Crew" ? (
          <FeaturePointsCosmicCrew />
        ) : (
          <FeaturePointsAstrologer />
        )}
      </View>
    </View>
  );
};

const FeaturePointsMoonSign = () => {
  return (
    <View>
      <FeaturePoints feature="Discover how your moon sign shapes your emotions, instincts, and inner world." />
      <FeaturePoints feature="Get personalized insights into your emotional strengths and challenges." />
      <FeaturePoints feature="Learn how your moon sign influences relationships, self-care, and decision-making." />
    </View>
  );
};

const FeaturePointsAscendentReport = () => {
  return (
    <View>
      <FeaturePoints feature="Understand how your ascendant shapes your personality, presence, and first impressions." />
      <FeaturePoints feature="Get insights into your natural style, strengths, and approach to life." />
      <FeaturePoints feature="Learn how your ascendant influences relationships, career, and daily choices." />
    </View>
  );
};

const FeaturePointsGemstone = () => {
  return (
    <View>
      <FeaturePoints feature="Get a personalized gemstone based on your birth chart for balance and support." />
      <FeaturePoints feature="Understand which stone enhances your strengths and protects against challenges." />
      <FeaturePoints feature="Learn how to use your gemstone for clarity, confidence, and growth." />
    </View>
  );
};

const FeaturePointsCosmicCrew = () => {
  return (
    <View>
      <FeaturePoints feature="A highly detailed analysis of each planet in your chart." />
      <FeaturePoints feature="Understand which of your planets support you and which ones may challenge you." />
      <FeaturePoints feature="Find out your" />
      <View style={{ marginLeft: scale(20) }}>
        <FeaturePoints
          feature="Life Purpose Planet"
          bullet={false}
          dash={true}
        />
        <FeaturePoints feature="Wealth Planet" bullet={false} dash={true} />
        <FeaturePoints feature="Romantic Planet" bullet={false} dash={true} />
        <FeaturePoints feature="Supportive Planet" bullet={false} dash={true} />
        <FeaturePoints feature="Nurturing Planet" bullet={false} dash={true} />
        <FeaturePoints feature="Creativity Planet" bullet={false} dash={true} />
        <FeaturePoints feature="And more!" dash={false} bullet={false} />
      </View>
    </View>
  );
};

const FeaturePointsAstrologer = () => {
  return (
    <View>
      <FeaturePoints feature="Deep dive into your birth chart." />
      <FeaturePoints feature="Get detailed answers to your questions." />
      <FeaturePoints feature="Ask about love, health, career, & so much more!" />
      <FeaturePoints feature="Gain insight into yourself" />
      <FeaturePoints feature="Receive personalized remedies." />
    </View>
  );
};

export default FeaturesSection;

const styles = StyleSheet.create({
  featureContainer: { paddingHorizontal: scale(10), gap: scale(8) },
  featureTitle: {
    fontSize: scale(14),
    textAlign: "left",
  },
  featurePoints: {
    gap: scale(8),
  },
});
