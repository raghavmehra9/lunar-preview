import usePurchasePlans from "@/_hooks/purchase/usePurchasePlans";
import Astrologer from "@/assets/svg/astrologer/Astrologer";
import { scale } from "@/utils/helpers/sizeMatters";
import { useState } from "react";
import { FlatList, RefreshControl, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyStateMessage from "../common/EmptyStateMessage";
import ErrorScreen from "../ErrorScreen";
import BackNavigation from "../form/BackNavigation";
import LoadingScreen from "../LoadingScreen";
import PurchaseCard from "./section/my_purchase/PurchaseCard";
import SubscriptionDetailBox from "./section/my_subscription/SubscriptionDetailBox";

const MyPurchaseScreen = () => {
  const purchasePlans = usePurchasePlans();
  const [refreshing, setRefreshing] = useState(false);

  const purchases =
    purchasePlans?.data?.pages.flatMap((page) => page.data) || [];

  const handleRefresh = async () => {
    setRefreshing(true);
    await purchasePlans.refetch();
    setRefreshing(false);
  };

  const handleLoadMore = () => {
    if (purchasePlans.hasNextPage) {
      purchasePlans.fetchNextPage();
    }
  };

  if (purchasePlans.isLoading) {
    return <LoadingScreen />;
  }
  if (purchasePlans.isError) {
    return <ErrorScreen />;
  }

  return (
    <View className="flex-1">
      <SafeAreaView className="flex-1">
        <View style={{ flex: 1, paddingHorizontal: scale(20) }}>
          <BackNavigation headerName="My Purchase" />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={purchases}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={styles.spacingBottom}>
                <PurchaseCard
                  serviceName={item.planId.plan_name}
                  servicePrice={item.planId.plan_amount}
                  color="purple"
                  starsAllowed={false}
                />
                <SubscriptionDetailBox
                  data={{
                    label: "Purchased On",
                    value: item.display_purchase_date,
                  }}
                />
              </View>
            )}
            ListEmptyComponent={
              <View style={styles.emptySubscriptionContainer}>
                <EmptyStateMessage
                  title="You Haven’t Made a Purchase Yet"
                  description="Explore exclusive astrology reports and insights—get yours today!"
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

export default MyPurchaseScreen;

const styles = StyleSheet.create({
  astrologerIcon: { marginTop: scale(40) },
  emptySubscriptionContainer: { marginTop: scale(80) },
  spacingBottom: { marginBottom: scale(20) },
});
