import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useMutateEmail } from "@/_hooks/auth/useMutateEmail";
import Inbox from "@/assets/svg/sso/Inbox";
import Button from "@/components/form/Button";
import Input from "@/components/form/Input";
import commonStyles from "@/styles/commonStyle";
import { scale } from "@/utils/helpers/sizeMatters";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SignupEmail = () => {
  const [email, setEmail] = useState("");
  const mutateEmail = useMutateEmail({});

  const isEmailValid = email.trim().length > 0 && EMAIL_PATTERN.test(email);
  const emailError =
    (mutateEmail?.error as any)?.errors?.email?.message ||
    (mutateEmail?.error as any)?.response?.data?.errors?.email?.message;

  const handleChangeText = (value: string) => {
    setEmail(value);
  };

  const handleEmailLogin = () => {
    if (isEmailValid) {
      mutateEmail.mutate(email);
    }
  };
  return (
    <View style={commonStyles.container}>
      <View>
        <Text
          style={styles.emailLabel}
          className="text-purple-jacarta font-Avenir-regular text-center "
        >
          Sign in with Email
        </Text>
        <View style={commonStyles.dynamicWidth({})}>
          <Input
            leftIcon={<Inbox />}
            keyboardType="email-address"
            name={"email"}
            value={email}
            placeholder={"Your Email Address"}
            error={emailError}
            onChangeText={handleChangeText}
          />
        </View>
      </View>

      <View className="items-center" style={styles.buttonContainer}>
        <Button
          parentClass="w-4/5"
          title="Get verification code"
          onPress={handleEmailLogin}
          isLoading={mutateEmail?.isPending}
          isDisabled={mutateEmail?.isPending || !isEmailValid}
          variant="primary"
        />
      </View>
    </View>
  );
};

export default React.memo(SignupEmail);

const styles = StyleSheet.create({
  emailLabel: { fontSize: scale(14), marginBottom: scale(12) },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: scale(20),
    marginBottom: scale(20),
  },
});
