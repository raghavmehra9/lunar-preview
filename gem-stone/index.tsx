import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";

import useGemstone from "@/_hooks/astro-service/useGemstone";
import { GEMSTONE_RECOMMENDATION_INFO } from "@/constants/Informations";
import commonStyles from "@/styles/commonStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import InfoModalBtn from "../common/InfoModalBtn";
import { PointsContent, PointsHeading } from "../common/PointsView";
import ErrorScreen from "../ErrorScreen";
import BackNavigation from "../form/BackNavigation";
import LoadingScreen from "../LoadingScreen";
import CategorySpotlightCard from "./CategorySpotlightCard";
import GemStoneDetails from "./GemStoneDetails";

const GemStoneSection = () => {
  const gemStone = useGemstone();

  if (gemStone?.isLoading) {
    return <LoadingScreen />;
  }

  if (gemStone?.isError) {
    return <ErrorScreen />;
  }

  return (
    <View style={commonStyles.container}>
      <SafeAreaView className="bg-brand-background">
        <View style={styles.wrapper}>
          <BackNavigation
            headerName="Gemstone Recommendation"
            rightComponent={
              <InfoModalBtn infoColor="#883D85" title="Gemstone Recommendation">
                <Text className="font-Avenir-regular mb-10">
                  {GEMSTONE_RECOMMENDATION_INFO.information}
                </Text>
                <View>
                  {GEMSTONE_RECOMMENDATION_INFO.subItems.map((item, index) => {
                    return (
                      <View key={index} className="mb-10">
                        <PointsHeading heading={item.title} />
                        <PointsContent content={item.content} />
                      </View>
                    );
                  })}
                </View>
              </InfoModalBtn>
            }
          />
          <View style={styles?.spotlightCard}>
            <CategorySpotlightCard />
          </View>
        </View>
      </SafeAreaView>
      {gemStone?.data?.data && <GemStoneDetails data={gemStone?.data?.data} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: scale(20),
  },
  spotlightCard: { marginBottom: scale(22.5) },
});

export default GemStoneSection;
