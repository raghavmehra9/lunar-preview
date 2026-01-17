import usePurchasedFrequencies from "@/_hooks/purchase/usePurchasedFrequencies";
import Astrologer from "@/assets/svg/astrologer/Astrologer";
import { scale } from "@/utils/helpers/sizeMatters";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyStateMessage from "../common/EmptyStateMessage";
import ErrorScreen from "../ErrorScreen";
import BackNavigation from "../form/BackNavigation";
import LoadingScreen from "../LoadingScreen";
import PurchaseCard from "./section/my_purchase/PurchaseCard";
import SubscriptionDetailBox from "./section/my_subscription/SubscriptionDetailBox";

const MyFrequenciesScreen = () => {
  const frequencies = usePurchasedFrequencies();
  const [refreshing, setRefreshing] = useState(false);

  const frequency = frequencies?.data?.pages.flatMap((page) => page.data) || [];

  const handleRefresh = async () => {
    setRefreshing(true);
    await frequencies.refetch();
    setRefreshing(false);
  };

  const handleLoadMore = () => {
    if (frequencies.hasNextPage) {
      frequencies.fetchNextPage();
    }
  };

  if (frequencies.isLoading) {
    return <LoadingScreen />;
  }
  if (frequencies.isError) {
    return <ErrorScreen />;
  }

  return (
    <View className="flex-1">
      <SafeAreaView className="flex-1">
        <View style={{ flex: 1, paddingHorizontal: scale(20) }}>
          <BackNavigation headerName="My Frequencies" />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={frequency}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  router.push(`/(app)/frequency/${item.planId._id}`);
                }}
                style={styles.spacingBottom}
              >
                <PurchaseCard
                  serviceName={item.planId.name}
                  servicePrice={item.planId.price}
                  color="purple"
                  starsAllowed={false}
                />
                <SubscriptionDetailBox
                  data={{
                    label: "Purchased On",
                    value: item.display_purchase_date,
                  }}
                />
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              <View style={styles.emptySubscriptionContainer}>
                <EmptyStateMessage
                  title="No Frequencies Purchased"
                  description="Explore and unlock the power of healing frequencies. Start your journey today!"
                  buttonText="Buy Now"
                  onButtonPress={() => router.push("/(app)/frequency")}
                />
              </View>
            }
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              <View className="items-center" style={styles.astrologerIcon}>
                <Astrologer />
              </View>
            }
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MyFrequenciesScreen;

const styles = StyleSheet.create({
  astrologerIcon: { marginTop: scale(40) },
  emptySubscriptionContainer: { marginTop: scale(80) },
  spacingBottom: { marginBottom: scale(10) },
});
