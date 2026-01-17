import useAstrologerBookings from "@/_hooks/astro-service/useAstrologerBookings";
import Astrologer from "@/assets/svg/astrologer/Astrologer";
import commonStyles from "@/styles/commonStyle";
import { scale } from "@/utils/helpers/sizeMatters";
import { useState } from "react";
import { FlatList, RefreshControl, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ErrorScreen from "../ErrorScreen";
import BackNavigation from "../form/BackNavigation";
import LoadingScreen from "../LoadingScreen";
import SpaceElement from "../SpaceElement";
import ConsultationCard from "./section/my_consultation/ConsultationCard";
import TabSwitcher from "./section/my_consultation/TabSwitcher";
import { ConsultationType } from "./Types";

const ConsultationScreen = () => {
  const [active, setActive] = useState<ConsultationType>("scheduledBookings");
  const fetchAstrologerBookings = useAstrologerBookings();

  const astrologerBookingsData =
    fetchAstrologerBookings.data?.pages?.flatMap((page) => page?.data || []) ||
    [];

  if (fetchAstrologerBookings?.isLoading) {
    return <LoadingScreen />;
  }

  if (fetchAstrologerBookings.isError) {
    return <ErrorScreen />;
  }
  return (
    <View className="bg-brand-background flex-1">
      <SafeAreaView className="flex-1">
        <View className="flex-1" style={commonStyles.screenContainer}>
          <BackNavigation headerName="My Consultations" />
          <View style={{ gap: scale(10) }}>
            <TabSwitcher setActive={setActive} active={active} />
            <FlatList
              data={astrologerBookingsData[0][active]}
              ListEmptyComponent={
                <View className="items-center" style={styles.astrologerIcon}>
                  <Astrologer />
                </View>
              }
              keyExtractor={(item) => item._id}
              contentContainerStyle={{ gap: scale(10) }}
              ListFooterComponent={<SpaceElement spacing={220} />}
              refreshControl={
                <RefreshControl
                  refreshing={fetchAstrologerBookings.isFetching}
                  onRefresh={fetchAstrologerBookings.refetch}
                />
              }
              onEndReached={() => {
                if (
                  fetchAstrologerBookings.hasNextPage &&
                  !fetchAstrologerBookings.isFetchingNextPage
                ) {
                  fetchAstrologerBookings.fetchNextPage();
                }
              }}
              onEndReachedThreshold={0.5}
              renderItem={({ item }) => {
                return (
                  <ConsultationCard
                    data={{
                      name: item.name,
                      experience: item.astrologerId.experience,
                      date: item.formatted_booking_date,
                      start_time: item.start_time,
                      status: item.status,
                      pastStatus: item.customStatus,
                      button_disabled: item.button_disabled,
                      active,
                      google_meet_link: item.google_meet_link,
                    }}
                  />
                );
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ConsultationScreen;

const styles = StyleSheet.create({
  astrologerIcon: { marginTop: scale(40) },
});
