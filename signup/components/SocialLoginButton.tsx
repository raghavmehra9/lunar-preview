import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import AppleIcon from "@/assets/svg/sso/AppleIcon";
import GoogleIcon from "@/assets/svg/sso/GoogleIcon";
import FacebookIcon from "@/assets/svg/sso/FacebookIcon";
import { scale } from "@/utils/helpers/sizeMatters";
import React, { useRef, useState } from "react";

type SocialLoginPlatform = "facebook" | "apple" | "google";

type SocialLoginButtonProps = {
  platform: SocialLoginPlatform;
  label: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress: () => void;
};

const SOCIAL_LOGIN_ICONS: Record<SocialLoginPlatform, React.ComponentType> = {
  facebook: FacebookIcon,
  apple: AppleIcon,
  google: GoogleIcon,
};

// NEED TO CHANGE THE BACKGROUND COLOR OF THE DISABLED AND LOADING STATE
const BUTTON_STATE = {
  default: "bg-brand-secondary",
  loading: "bg-brand-background",
  disabled: "bg-brand-background",
  selected: "bg-grey-brightGrey",
};

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  platform,
  label,
  isDisabled,
  isLoading,
  onPress,
}) => {
  const IconComponent = SOCIAL_LOGIN_ICONS[platform];
  const [pressed, setPressed] = useState(false);

  const currentStyle = pressed
    ? BUTTON_STATE.selected
    : isDisabled
    ? BUTTON_STATE.disabled
    : isLoading
    ? BUTTON_STATE.loading
    : BUTTON_STATE.default;

  return (
    <TouchableOpacity
      style={styles.ssoButton}
      className={` flex-row justify-center rounded-full gap-4 ${currentStyle}`}
      onPressIn={() => {
        setPressed(true);
      }}
      onPressOut={() => {
        setPressed(false);
      }}
      onPress={onPress}
      disabled={isDisabled || isLoading}
    >
      <>
        {IconComponent && <IconComponent />}
        {isLoading ? (
          <ActivityIndicator size="small" />
        ) : (
          <Text
            className="font-Avenir-book text-purple-jacarta "
            style={styles.ssolabel}
          >
            {label}
          </Text>
        )}
      </>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ssoButton: {
    paddingVertical: scale(14),
    alignItems: "center",
  },
  ssolabel: {
    fontSize: scale(14),
    lineHeight: scale(24),
  },
});

export default SocialLoginButton;
