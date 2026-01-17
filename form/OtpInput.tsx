import { scale } from "@/utils/helpers/sizeMatters";
import React from "react";
import { OtpInput } from "react-native-otp-entry";
import { OtpState } from "../signup/Types";

const NUMBER_OF_DIGITS = 6;
const INPUT_COLOR = "#F3E9F3";
const FOCUS_COLOR = "#B57FB3";
const OTP_THEME = {
  pinCodeContainerStyle: {
    width: scale(45),
    height: scale(60),
    borderColor: INPUT_COLOR,
    backgroundColor: INPUT_COLOR,
  },
  filledPinCodeContainerStyle: {
    borderWidth: 1,
    borderColor: FOCUS_COLOR,
  },
  pinCodeTextStyle: {
    color: "#704896",
    fontWeight: "700" as const,
  },
};

const OtpField = (props: OtpState) => {
  const { setOtp, onfilled, refresh } = props;
  return (
    <OtpInput
      blurOnFilled
      onFilled={onfilled}
      type="numeric"
      key={refresh}
      autoFocus={false}
      theme={OTP_THEME}
      focusColor={FOCUS_COLOR}
      onTextChange={(text) => setOtp(text, "")}
      numberOfDigits={NUMBER_OF_DIGITS}
    />
  );
};

export default React.memo(OtpField);
