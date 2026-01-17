import { ScrollView, StyleSheet, Text, View } from "react-native";

import useCosmicCouncil from "@/_hooks/astro-service/useCosmicCouncil";
import FeatureCouncil from "@/assets/svg/cosmic_council/FeatureCouncil";
import { COSMIC_COUNCIL_INFO } from "@/constants/Informations";
import { useNotification } from "@/context/notificationContext";
import { isLocationError } from "@/utils/helpers/isLocationError";
import { scale } from "@/utils/helpers/sizeMatters";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TodaysDate from "../common/DateSection";
import InfoModalBtn from "../common/InfoModalBtn";
import { PointsContent, PointsHeading } from "../common/PointsView";
import ErrorScreen from "../ErrorScreen";
import BackNavigation from "../form/BackNavigation";
import LoadingScreen from "../LoadingScreen";
import KaranaSection from "./section/KaranaSection";
import NakshatraSection from "./section/NakshatraSection";
import TithiSection from "./section/TithiSection";

const CosmicCouncilService = () => {
  const cosmicCouncil = useCosmicCouncil();
  const { showNotification } = useNotification();

  const councilLoading = cosmicCouncil?.isLoading;
  const councilError = cosmicCouncil?.isError;
  const councilData = cosmicCouncil?.data?.data;

  useEffect(() => {
    if (isLocationError(cosmicCouncil.error)) {
      showNotification(
        "User location is not updated, enable location to sync",
        "error"
      );
    }
  }, [cosmicCouncil?.error]);

  if (councilLoading) {
    return <LoadingScreen />;
  }
  if (councilError && cosmicCouncil?.error?.status !== 403) {
    return <ErrorScreen />;
  }

  return (
    <View className="bg-brand-background" style={{ flex: 1 }}>
      <SafeAreaView className="flex-1" edges={["top"]}>
        <View style={styles?.wrapper}>
          <BackNavigation
            headerName="Your Daily Advisor"
            rightComponent={
              <InfoModalBtn infoColor="#883D85" title="Your Daily Advisor">
                <View>
                  {COSMIC_COUNCIL_INFO.map((item, index) => {
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
        </View>
        <ScrollView
          className=" flex-1"
          style={styles?.wrapper}
          showsVerticalScrollIndicator={false}
        >
          <CouncilHeading />
          {councilData?.date ? (
            <View style={styles.todaysDateContainer}>
              <TodaysDate data={councilData?.date} />
            </View>
          ) : (
            <View />
          )}
          {councilData ? (
            <View style={styles?.body}>
              <TithiSection data={councilData?.["tithi"]} />
              <KaranaSection data={councilData?.["karan"]} />
              <NakshatraSection data={councilData?.["nakshatra"]} />
            </View>
          ) : (
            <View />
          )}
          <FeatureCouncil />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const CouncilHeading = () => {
  return (
    <Text
      className="font-Avenir-light text-center text-brand-primary"
      style={styles?.councilHeading}
    >
      Think of this as your daily cosmic weather report, helping you understand
      the feel of the day before diving in!
    </Text>
  );
};

const styles = StyleSheet.create({
  wrapper: { paddingHorizontal: scale(20) },
  body: { gap: scale(20) },
  councilHeading: { fontSize: scale(14), marginBottom: scale(20) },
  todaysDateContainer: {
    marginBottom: scale(20),
  },
});

export default CosmicCouncilService;
