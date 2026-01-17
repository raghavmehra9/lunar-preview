import { ScrollView, StyleSheet, View } from "react-native";

import useLuckyUnlucky from "@/_hooks/astro-service/useLuckyUnlucky";
import { scale } from "@/utils/helpers/sizeMatters";
import { router } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyFragment from "../EmptyFragment";
import BackNavigation from "../form/BackNavigation";
import TuneWithYourVibe from "../frequency/TuneWithYourVibe";
import LoadingScreen from "../LoadingScreen";
import SpaceElement from "../SpaceElement";
import CardSection from "./section/CardSection";
import LuckyUnLuckyDetails from "./section/LuckyUnLuckyDetails";

const GetLuckyService = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const luckyUnlucky = useLuckyUnlucky();
  const luckyUnluckyData = luckyUnlucky?.data;

  if (luckyUnlucky.isLoading) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView className="flex-1 bg-brand-primary" edges={["top"]}>
      <View style={styles?.wrapper}>
        <BackNavigation headerName="Get Lucky" type="white" />
      </View>
      <ScrollView
        className="flex-1"
        style={styles?.wrapper}
        showsVerticalScrollIndicator={false}
      >
        <>
          <CardSection
            percentage={luckyUnluckyData?.data?.percentage || 0}
            isFlipped={isFlipped}
            setIsFlipped={setIsFlipped}
          />
          {isFlipped && luckyUnluckyData ? (
            <LuckyUnLuckyDetails data={luckyUnluckyData} />
          ) : (
            <EmptyFragment />
          )}

          <View style={{ marginTop: scale(20) }}>
            <TuneWithYourVibe
              heading="Support what’s weak, Amplify what’s strong"
              onPress={() => {
                router.push("/(app)/frequency");
              }}
              subheading={"Through Healing Frequencies"}
            />
          </View>
          <SpaceElement spacing={40} />
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GetLuckyService;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: scale(20),
  },
});
