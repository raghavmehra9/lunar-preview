import useFetchReason from "@/_hooks/user/useFetchReason";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ErrorScreen from "../ErrorScreen";
import BackNavigation from "../form/BackNavigation";
import Heading from "../form/Heading";
import SubHeading from "../form/SubHeading";
import LoadingScreen from "../LoadingScreen";
import StepWiseForm from "./section/delete_account/StepWiseForm";

const DeleteAccountScreen = () => {
  const fetchReason = useFetchReason();

  if (fetchReason?.isLoading) {
    return <LoadingScreen />;
  }
  if (fetchReason?.isError) {
    return <ErrorScreen />;
  }

  return (
    <View className="flex-1 bg-brand-background">
      <SafeAreaView className="flex-1">
        <View style={styles.innerContainer}>
          <BackNavigation headerName="Delete Profile" />
          <View style={styles.textContainer}>
            <Heading
              heading="Thinking of leaving?"
              className="font-Skillet-regular"
              style={{ fontSize: scale(36), textAlign: "left" }}
            />
            <SubHeading
              subHeading="We’re sad to see you go! Before you proceed, please let us know why you're leaving—your feedback helps us improve."
              style={{ fontSize: scale(11), textAlign: "left" }}
            />
          </View>
          {fetchReason?.data?.data ? (
            <StepWiseForm reason={fetchReason?.data?.data} />
          ) : (
            <></>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeleteAccountScreen;

const styles = StyleSheet.create({
  innerContainer: { flex: 1, paddingHorizontal: scale(20) },
  textContainer: { gap: scale(10), marginBottom: scale(20) },
});
