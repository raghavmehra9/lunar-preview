import { useUserDetails } from "@/_hooks/user/useUserDetails";
import { useSyncUserLocation } from "@/_hooks/useSyncUserLocation";
import { useNotification } from "@/context/notificationContext";
import commonStyles from "@/styles/commonStyle";
import { requestLocationPermission } from "@/utils/helpers/requestLocationPermission";
import { scale } from "@/utils/helpers/sizeMatters";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RightDrawer from "../common/RightDrawer";
import ErrorScreen from "../ErrorScreen";
import LoadingScreen from "../LoadingScreen";
import SignSection from "../user_profile/section/user_profile/SignSection";
import ActiveCelestialCard from "./components/ActiveCelestialCard";
import BookNowCard from "./components/BookNowCard";
import CosmicCrewCard from "./components/CosmikCrewCard";
import DiscoverMoreDivider from "./components/DiscoverMoreDivider";
import EmbraceLunarCard from "./components/EmbraceLunarCard";
import GetLuckyCard from "./components/GetLuckyCard";
import KnowGemsCard from "./components/KnowGemsCard";
import ListenFrequencyCard from "./components/ListenFrequencyCard";
import ReleaseAndReflect from "./components/ReleaseAndReflect";
import TopBar from "./components/TopBar";
import YourCosmicCouncil from "./components/YourCosmicCouncil";

export default function HomeScreen() {
  const userDetails = useUserDetails();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { showNotification } = useNotification();
  const { mutate } = useSyncUserLocation();
  const queryClient = useQueryClient();

  useEffect(() => {
    const updateLocation = async () => {
      const isGranted = await requestLocationPermission();
      if (isGranted) {
        mutate(undefined, {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ["service-moon-phase"],
            });
          },
        });
      } else {
        showNotification(
          "Please enable location permission to continue",
          "error"
        );
      }
    };
    updateLocation();
  }, []);

  if (userDetails?.isLoading) {
    return <LoadingScreen />;
  }
  if (userDetails?.isError) {
    return <ErrorScreen />;
  }

  return (
    <View className="bg-brand-background flex-1">
      <SafeAreaView style={commonStyles.container} edges={["top"]}>
        <ScrollView
          className="bg-brand-background flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <TopBar menuPress={() => setIsDrawerOpen(true)} />
          {userDetails &&
          userDetails?.data?.moon_sign &&
          userDetails?.data?.ascendent_sign ? (
            <SignSection
              data={{
                moonSign: userDetails?.data?.moon_sign,
                ascendantSign: userDetails?.data?.ascendent_sign,
              }}
              moonRoute={"moon-sign"}
              ascendantRoute={"ascendent-report"}
            />
          ) : (
            <></>
          )}
          <ReleaseAndReflect />
          <GetLuckyCard />
          <ActiveCelestialCard />
          <CosmicCrewCard />
          <ListenFrequencyCard />
          <YourCosmicCouncil />
          <KnowGemsCard />
          <DiscoverMoreDivider />
          <BookNowCard />
          <EmbraceLunarCard />
        </ScrollView>

        {isDrawerOpen && (
          <RightDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(20),
    paddingBottom: scale(90),
  },
});
