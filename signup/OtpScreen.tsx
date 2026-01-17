import { formatMaskedEmail } from "@/utils/helpers/formatMaskedEmail";
import { scale } from "@/utils/helpers/sizeMatters";
import { useLocalSearchParams } from "expo-router";
import { KeyboardAvoidingView, Platform, StyleSheet, Text } from "react-native";
import AppBackground from "../common/AppBackground";
import BackNavigation from "../form/BackNavigation";
import Heading from "../form/Heading";
import SubHeading from "../form/SubHeading";
import { EmailProps } from "./Types";
import OtpForm from "./components/OtpForm";
import commonStyles from "@/styles/commonStyle";
import { SafeAreaView } from "react-native-safe-area-context";

const OtpScreen = () => {
  const { email } = useLocalSearchParams<Omit<EmailProps, "reset">>();
  const maskedEmail = formatMaskedEmail(email);

  return (
    <AppBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        style={commonStyles.container}
      >
        <SafeAreaView style={commonStyles.container}>
          <BackNavigation headerName="Email Verification" />

          <Heading heading="Enter your code" style={styles.headingStyle} />
          <SubHeading
            subHeading={`Please enter the 6 digit code sent to ${maskedEmail}`}
            style={styles.subHeadingStyle}
          />

          <OtpForm email={email} />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </AppBackground>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  headingStyle: { fontSize: scale(42), marginTop: scale(89) },
  subHeadingStyle: {
    marginTop: scale(20),
    fontSize: scale(15),
    marginBottom: scale(12),
  },
});
