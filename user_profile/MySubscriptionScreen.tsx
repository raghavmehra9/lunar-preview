import useUserSubscriptions from "@/_hooks/subscriptions/useUserSubscriptions";
import Astrologer from "@/assets/svg/astrologer/Astrologer";
import { scale } from "@/utils/helpers/sizeMatters";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ErrorScreen from "../ErrorScreen";
import LoadingScreen from "../LoadingScreen";
import EmptyStateMessage from "../common/EmptyStateMessage";
import BackNavigation from "../form/BackNavigation";
import BuyedSubscription from "./section/my_subscription/BuyedSubscription";

const MySubscriptionScreen: React.FC = () => {
  const fetchUserSubscription = useUserSubscriptions();
  const subscriptionData = fetchUserSubscription?.data;

  if (fetchUserSubscription?.isLoading) {
    return <LoadingScreen />;
  }
  if (fetchUserSubscription?.isError) {
    return <ErrorScreen />;
  }

  const BuyedSubscriptionLength = subscriptionData
    ? subscriptionData?.activeSubscriptions?.length +
      subscriptionData?.expiredSubscriptions?.length
    : 0;

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <View style={styles.container}>
          <BackNavigation headerName="My Subscription" />
          <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
            {BuyedSubscriptionLength > 0 && subscriptionData ? (
              <BuyedSubscription data={subscriptionData} />
            ) : (
              <View style={styles.emptySubscriptionContainer}>
                <EmptyStateMessage
                  title="No Active Subscription Found"
                  description="Unlock unlimited astrology insights—subscribe now and let the stars guide you!"
                  buttonText="Buy Now"
                  onButtonPress={() => router.push("/(app)/subscription/plans")}
                />
              </View>
            )}
            <View className="items-center" style={styles.astrologerIcon}>
              <Astrologer />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MySubscriptionScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  astrologerIcon: { marginTop: scale(40) },
  emptySubscriptionContainer: { marginTop: scale(80) },
});
