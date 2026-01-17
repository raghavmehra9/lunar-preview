import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useMutateEmailOtp } from "@/_hooks/auth/useMutateEmailOtp";
import Button from "@/components/form/Button";
import Error from "@/components/form/Error";
import OtpInput from "@/components/form/OtpInput";
import commonStyles from "@/styles/commonStyle";
import { scale } from "@/utils/helpers/sizeMatters";
import { EmailProps } from "../Types";
import Resend from "./Resend";

const OtpForm = (props: EmailProps) => {
  const { email } = props;

  const [otp, setOtp] = useState("");
  const [key, setKey] = useState(0);
  const { isLoading, mutateEmail } = useMutateEmailOtp();

  const handleOtp = (value: string) => {
    setOtp(value);
  };

  const handleVerifyOtp = () => {
    if (otp.trim().length === 6) {
      const data = {
        email,
        otp,
      };
      mutateEmail.mutate(data);
    }
  };

  const disabledButton = otp?.trim()?.length === 0 || isLoading;

  const resetOTP = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <View style={commonStyles.container}>
      <View>
        <OtpInput setOtp={handleOtp} refresh={key} />
        <Error
          error={
            (mutateEmail?.error as any)?.response?.data?.errors?.otp?.message ||
            (mutateEmail?.error as any)?.message ||
            (mutateEmail?.error as any)?.errors?.otp?.message
          }
          style={styles.errorStyle}
        />
      </View>

      <View style={styles.resendContainer} className="items-center">
        <Resend email={email} reset={resetOTP} />
      </View>
      <Text
        className="font-Avenir-regular text-center text-heading-secondary"
        style={styles.warningText}
      >
        If you don’t see the code in your inbox, please check your spam or junk
        folder.
      </Text>

      <View className="items-center flex-1 justify-end">
        <Button
          title={"Verify and Proceed"}
          parentClass="w-4/5 mb-8"
          onPress={handleVerifyOtp}
          isLoading={isLoading}
          isDisabled={disabledButton}
          variant={"primary"}
        />
      </View>
    </View>
  );
};

export default OtpForm;

const styles = StyleSheet.create({
  errorStyle: { marginTop: scale(6) },
  resendContainer: { marginTop: scale(24) },
  warningText: {
    marginTop: scale(12),
  },
});
