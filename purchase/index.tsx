import { LinearGradient } from "expo-linear-gradient";
import { useGlobalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useIndividualPlanDetails from "@/_hooks/plans/useIndividualPlanDetails";
import useMutateIndividualPayment from "@/_hooks/plans/useMutateIndividualPayment";
import BackgroundStars from "@/assets/svg/purchase/BackgroundStars";
import useStripePayment from "@/hooks/useStripePayment";
import { scale } from "@/utils/helpers/sizeMatters";
import EmptyFragment from "../EmptyFragment";
import ErrorScreen from "../ErrorScreen";
import BackNavigation from "../form/BackNavigation";
import Heading from "../form/Heading";
import SubHeading from "../form/SubHeading";
import LoadingScreen from "../LoadingScreen";
import SpaceElement from "../SpaceElement";
import PurchaseServiceCard from "./section/PurchaseServiceCard";
import { IndividualPlans } from "./Types";

const PurchaseScreen = () => {
  const { service } = useGlobalSearchParams<{ service: IndividualPlans }>();

  const fetchIndividualDetails = useIndividualPlanDetails(service);
  const initiateIndividualPayment = useMutateIndividualPayment(service);
  const { isProcessingPayment } = useStripePayment();

  const planDetails = fetchIndividualDetails?.data;

  const handleBuyNow = () => {
    if (!planDetails) return;

    const payload = {
      planId: planDetails._id,
      type: planDetails.slug,
    };

    initiateIndividualPayment.mutate(payload);
  };

  if (fetchIndividualDetails?.isLoading) {
    return <LoadingScreen />;
  }
  if (fetchIndividualDetails?.isError) {
    return <ErrorScreen />;
  }

  const stripeData = {
    isProcessingPayment,
    handleBuyNow,
  };

  return (
    <LinearGradient colors={["#713385", "#3E1F48"]} style={{ flex: 1 }}>
      <SafeAreaView className="flex-1">
        <View style={styles.wrapper}>
          <BackNavigation headerName="Back" type="white" />
          <View style={styles.absoluteStars}>
            <BackgroundStars />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Heading
              heading="It’s All Written In The Stars!"
              className="text-white"
              style={styles.headingStyle}
            />
            <SubHeading
              subHeading="Upgrade once and get infinite insights!"
              className="text-white"
              style={styles.subHeadingStyle}
            />
            {planDetails ? (
              <PurchaseServiceCard data={planDetails} stripeData={stripeData} />
            ) : (
              <EmptyFragment />
            )}
            <SpaceElement spacing={80} />
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default PurchaseScreen;

const styles = StyleSheet.create({
  wrapper: { paddingHorizontal: scale(20) },
  absoluteStars: { position: "absolute", top: scale(40), right: scale(20) },
  headingStyle: {
    textAlign: "left",
    marginTop: scale(19),
    fontSize: scale(42),
    lineHeight: scale(36),
  },
  subHeadingStyle: {
    fontSize: scale(14),
    textAlign: "left",
    marginTop: scale(10),
  },
});
