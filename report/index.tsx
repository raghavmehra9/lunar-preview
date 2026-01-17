import useAscendant from "@/_hooks/astro-service/useAscendant";
import useMoon from "@/_hooks/astro-service/useMoon";
import { capitalizeWord } from "@/utils/helpers/capitalizeWord";
import { scale } from "@/utils/helpers/sizeMatters";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InfoModalBtn from "../common/InfoModalBtn";
import { PointsHeading, PointsView } from "../common/PointsView";
import SignReportCard from "../common/SignReportCard";
import ErrorScreen from "../ErrorScreen";
import BackNavigation from "../form/BackNavigation";
import LoadingScreen from "../LoadingScreen";
import SpaceElement from "../SpaceElement";
import AscendantSection from "./AscendantSection";
import MoonSection from "./MoonSection";
import { useEffect } from "react";
import { router } from "expo-router";

const ReportScreen = ({ type }: { type: "moon" | "ascendant" }) => {
  const fetchMoonReport = useMoon(type === "moon");
  const fetchAscendantReport = useAscendant(type === "ascendant");

  const moonSignReport = fetchMoonReport?.data?.data;
  const ascendantSignReport = fetchAscendantReport?.data?.data;

  const ReportSign =
    type === "moon" ? moonSignReport?.sign : ascendantSignReport?.sign;

  if (
    (fetchMoonReport && fetchMoonReport.isLoading) ||
    (fetchAscendantReport && fetchAscendantReport.isLoading)
  ) {
    return <LoadingScreen />;
  }

  if (
    (fetchMoonReport && fetchMoonReport.isError) ||
    (fetchAscendantReport && fetchAscendantReport.isError)
  ) {
    return <ErrorScreen />;
  }

  return (
    <View className="flex-1 bg-brand-primary">
      <SafeAreaView>
        <View style={styles.screenContainer}>
          <BackNavigation
            headerName={`Your ${capitalizeWord(type)} Sign`}
            type="white"
            rightComponent={
              type === "moon" ? (
                <></>
              ) : (
                <InfoModalBtn title={`${capitalizeWord(type)} Sign`}>
                  <PointsHeading heading="Ascendant Report" />
                  <PointsView
                    points={[
                      "Vedic astrology centers your chart around your Ascendant, as opposed to just your Sun or Moon sign. In Vedic astrology your Ascendant influences the placements of all the planets in your chart. It is how people see you and how you navigate life.",
                      "It’s the most personal part of your chart, setting the foundation for everything else. The Ascendant represents who you are, your personality, and your physical appearance.",
                      "In contrast, your Moon sign is a mirror into your emotions, your feelings, and psyche. While your Sun sign represents your soul, its purpose, and what motivates you.",
                      "Your Ascendant is unique to you because it changes every 2 hours. That’s why knowing your exact birth time is crucial for an accurate chart.",
                    ]}
                  />
                </InfoModalBtn>
              )
            }
          />
        </View>

        <ScrollView
          style={styles.screenContainer}
          showsVerticalScrollIndicator={false}
        >
          {ReportSign ? (
            <SignReportCard sign={ReportSign} type={type} />
          ) : (
            <></>
          )}

          {type === "moon" && moonSignReport ? (
            <MoonSection {...moonSignReport} />
          ) : type === "ascendant" && ascendantSignReport ? (
            <AscendantSection {...ascendantSignReport} />
          ) : (
            <></>
          )}
          <SpaceElement spacing={100} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ReportScreen;

// Styles
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
