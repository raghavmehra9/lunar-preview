import useMoonCalendar from "@/_hooks/astro-service/useMoonCalendar";
import CloudBottom from "@/assets/svg/cloud/cloudbottom";
import commonStyles from "@/styles/commonStyle";
import { scale } from "@/utils/helpers/sizeMatters";
import { LinearGradient } from "expo-linear-gradient";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TodaysDate from "../common/DateSection";
import EmptyFragment from "../EmptyFragment";
import ErrorScreen from "../ErrorScreen";
import BackNavigation from "../form/BackNavigation";
import LoadingScreen from "../LoadingScreen";
import ManifestationBox from "./components/ManifestationBox";
import MoonPhase from "./components/MoonPhase";
import MoonPhaseDescription from "./components/MoonPhaseDescription";

const MoonCalendarService = () => {
  const { isLoading, isError, data, error } = useMoonCalendar();

  if (isLoading) return <LoadingScreen />;
  if (isError) {
    return <ErrorScreen />;
  }

  const moonCalendarData = data?.data;

  return (
    <LinearGradient
      colors={["#713385", "#3E1F48"]}
      style={commonStyles.container}
    >
      <View className=" flex-1">
        <SafeAreaView className="flex-1 z-10" edges={["top"]}>
          <View style={styles.serviceContainer}>
            <BackNavigation headerName="Lunar Calendar" type="white" />
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={commonStyles.container}
            >
              <ScrollView
                style={styles.spacingComponents}
                showsVerticalScrollIndicator={false}
              >
                {moonCalendarData && (
                  <TodaysDate type="jacarta" data={moonCalendarData?.date} />
                )}
                {moonCalendarData ? (
                  <View style={{ marginVertical: scale(10) }}>
                    {moonCalendarData?.moon_phase_name && (
                      <MoonPhase name={moonCalendarData?.name} />
                    )}
                    <MoonPhaseDescription
                      description={moonCalendarData?.description}
                    />
                    <ManifestationBox
                      content={moonCalendarData?.manifestationData?.content}
                      id={moonCalendarData?.manifestationData?._id}
                    />
                  </View>
                ) : (
                  <EmptyFragment />
                )}
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        </SafeAreaView>
        <View className="absolute bottom-0">
          <CloudBottom />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  serviceContainer: { flex: 1, paddingHorizontal: scale(20) },
  spacingComponents: { gap: scale(50) },
});

export default MoonCalendarService;
