import OnboardingScreen from "@/components/signup/OnboardingScreen";
import commonStyles from "@/styles/commonStyle";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Registration = () => {
  return (
    <SafeAreaView
      className="flex-1 bg-brand-background items-center"
      edges={["top"]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={commonStyles.container}
      >
        <OnboardingScreen />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Registration;
