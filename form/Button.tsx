import { scale } from "@/utils/helpers/sizeMatters";
import React from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

type ButtonVariant = "primary" | "secondary" | "white" | "inline" | "warning";

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  variant?: ButtonVariant;
  parentClass?: string;
  textClass?: string;
  textStyle?: object;
}

const buttonStyles = {
  primary: {
    default: "bg-brand-primary border-brand-primary",
    loading: "bg-brand-primary border-brand-primary opacity-75",
    disabled: "bg-grey-lightSilver border-grey-lightSilver opacity-50",
    text: "text-brand-secondary",
    indicatorColor: "#your-brand-secondary-color",
  },
  secondary: {
    default: "bg-brand-secondary border-brand-secondary",
    loading: "bg-brand-secondary border-brand-secondary opacity-75",
    disabled: "bg-brand-secondary border-brand-secondary opacity-50",
    text: "text-brand-primary",
    indicatorColor: "#your-brand-primary-color",
  },
  white: {
    default: "bg-white border-white",
    loading: "bg-white border-white opacity-75",
    disabled: "bg-white border-white opacity-50",
    text: "text-purple-jacarta",
    indicatorColor: "#your-purple-jacarta-color",
  },
  inline: {
    default: "bg-transparent border-purple-plum",
    loading: "bg-transparent border-purple-plum opacity-75",
    disabled: "bg-transparent border-purple-plum opacity-50",
    text: "text-brand-primary",
    indicatorColor: "#your-brand-primary-color",
  },
  warning: {
    default: "bg-orange-topaz border-orange-topaz",
    loading: "bg-orange-topaz border-orange-topaz opacity-75",
    disabled: "bg-orange-topaz border-orange-topaz opacity-50",
    text: "text-white",
    indicatorColor: "#ffffff",
  },
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  textClass = "",
  parentClass = "",
  isLoading = false,
  isDisabled = false,
  textStyle = {},
  variant = "primary",
}) => {
  const safeVariant = buttonStyles[variant] ? variant : "primary";

  const currentStyle = isDisabled
    ? buttonStyles[safeVariant].disabled
    : isLoading
    ? buttonStyles[safeVariant].loading
    : buttonStyles[safeVariant].default;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`px-12 py-4 rounded-full border ${currentStyle} ${parentClass}`.trim()}
      disabled={isDisabled || isLoading}
      accessibilityLabel={title}
      accessibilityHint={isLoading ? "Loading..." : undefined}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled || isLoading }}
    >
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={buttonStyles[safeVariant].indicatorColor}
        />
      ) : (
        <Text
          style={[styles.fontStyle, textStyle]}
          className={`font-Avenir-heavy text-center ${buttonStyles[safeVariant].text} ${textClass}`.trim()}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: scale(16),
  },
});

export default Button;
