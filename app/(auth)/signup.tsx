import AppBackground from "@/components/common/AppBackground";
import SignUpForm from "@/components/signup/SignUpForm";
import commonStyles from "@/styles/commonStyle";
import { scale } from "@/utils/helpers/sizeMatters";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const signup = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "padding"}
      style={commonStyles.container}
    >
      <AppBackground>
        <SafeAreaView style={[commonStyles.container, styles.signUpContainer]}>
          <SignUpForm />
        </SafeAreaView>
      </AppBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  signUpContainer: { marginTop: scale(72) },
});

export default signup;
