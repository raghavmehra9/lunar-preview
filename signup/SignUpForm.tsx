import { useState } from "react";
import { StyleSheet, View } from "react-native";

import useGoogleLogin from "@/_hooks/auth/useGoogleLogin";
import commonStyles from "@/styles/commonStyle";
import { scale } from "@/utils/helpers/sizeMatters";
import Heading from "../form/Heading";
import Divider from "./components/Divider";
import SignupEmail from "./components/SignupEmail";
import SocialLoginButton from "./components/SocialLoginButton";

const SignUpForm = () => {
  const [disabledButton, setDisabledButton] = useState(false);
  const { promptAsync } = useGoogleLogin();

  const handleGoogleLogin = () => {
    try {
      setDisabledButton(true);
      promptAsync();
    } catch (error) {
      setDisabledButton(false);
    } finally {
      setDisabledButton(false);
    }
  };
  return (
    <>
      <Heading heading="Sign Up" style={styles.headingStyle} />

      <View className="gap-3" style={commonStyles.dynamicWidth({})}>
        <SocialLoginButton
          platform="google"
          label="Sign in with Google"
          onPress={handleGoogleLogin}
          isDisabled={disabledButton}
          isLoading={disabledButton}
        />
      </View>
      <Divider />
      <SignupEmail />
    </>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  headingStyle: { marginBottom: scale(54) },
});
