import useCelestialClock from "@/_hooks/astro-service/useCelestialClock";
import LoadingScreen from "@/components/LoadingScreen";
import { DESCRIPITON, INSTRUCTIONS, TABS } from "@/constants/CelestialClock";
import { CELESTIAL_CLOCK_INFO } from "@/constants/Informations";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import commonStyles from "@/styles/commonStyle";
import { scale } from "@/utils/helpers/sizeMatters";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyFragment from "../EmptyFragment";
import ErrorScreen from "../ErrorScreen";
import SpaceElement from "../SpaceElement";
import InfoModalBtn from "../common/InfoModalBtn";
import { PointsContent, PointsHeading } from "../common/PointsView";
import BackNavigation from "../form/BackNavigation";
import { CelestialClockTypes, TabsType } from "./Types";
import CategoryHeader from "./section/CategoryHeader";
import CelestialClock from "./section/CelestialClock";
import HoraInstructionCard from "./section/HoraInstructionCard";
import TimeCategoryTabs from "./section/TimeCategoryTabs";

const CelestialClockScreen = ({
  showNavigation = true,
}: {
  showNavigation: boolean;
}) => {
  const [activeTab, setActiveTab] =
    useState<CelestialClockTypes>("current_hora");
  const handleTabChange = (tab: TabsType, _: number) => {
    setActiveTab(tab.name);
  };

  const fetchCelestial = useCelestialClock();
  const celestialData = fetchCelestial?.data?.data;

  if (fetchCelestial.isLoading) {
    return <LoadingScreen />;
  }

  if (fetchCelestial.isError || !celestialData) {
    return <ErrorScreen />;
  }

  const startTime =
    activeTab === "current_hora"
      ? celestialData[activeTab]?.time?.split(" : ")[0] || "00:00"
      : celestialData[activeTab]?.start || "00:00";
  const endTime =
    activeTab === "current_hora"
      ? celestialData[activeTab]?.time?.split(" : ")[1] || "00:00"
      : celestialData[activeTab]?.end || "00:00";

  return (
    <View className="flex-1 bg-brand-background">
      <SafeAreaView>
        <View style={commonStyles.screenContainer}>
          {showNavigation && (
            <BackNavigation
              headerName="Celestial Clock"
              rightComponent={
                <InfoModalBtn infoColor="#883D85" title="Celestial Clock">
                  {CELESTIAL_CLOCK_INFO.map((item, index) => {
                    return (
                      <View key={index} className="mb-10">
                        <PointsHeading heading={item.title} />
                        <PointsContent content={item.content} />
                      </View>
                    );
                  })}
                </InfoModalBtn>
              }
            />
          )}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={
              !showNavigation ? { paddingTop: scale(20) } : {}
            }
          >
            <View style={{ gap: scale(10) }}>
              <View style={{ gap: scale(20) }}>
                <Info />
                <CelestialClock
                  data={{
                    celestialData: celestialData,
                    startTime: startTime,
                    endTime: endTime,
                    activeTab: activeTab,
                  }}
                />
              </View>
              <TimeCategoryTabs tabs={TABS} onTabChange={handleTabChange} />
            </View>
            <View className="bg-white" style={styles.categoryContainer}>
              <CategoryHeader
                planetName={celestialData.current_hora.name}
                type={activeTab}
                activeTabTime={{ startTime, endTime }}
              />
              <Text
                className="font-Avenir-regular text-darkLiver"
                style={styles.descriptionStyle}
              >
                {DESCRIPITON[activeTab]}
              </Text>
            </View>
            {activeTab === "current_hora" && INSTRUCTIONS.length > 0 ? (
              <HoraInstructionCard
                instructions={celestialData.current_hora.details}
              />
            ) : (
              <EmptyFragment />
            )}
            <SpaceElement spacing={160} />
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

const Info = () => (
  <Text
    className="font-Avenir-regular text-brand-primary text-center"
    style={styles.textStyle}
  >
    Take a look at the clock below to see the most optimal way to spend your
    day!
  </Text>
);

export default CelestialClockScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: scale(14),
    paddingHorizontal: scale(20),
  },
  categoryContainer: {
    padding: scale(20),
    width: SCREEN_WIDTH - scale(20 * 2),
    marginTop: scale(20),
    borderRadius: scale(10),
    gap: scale(20),
  },
  descriptionStyle: { fontSize: scale(14), lineHeight: scale(20) },
});
