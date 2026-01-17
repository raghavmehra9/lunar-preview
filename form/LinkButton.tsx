import React from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
} from "react-native";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  variant: ButtonVariant;
  textStyle?: TextStyle;
  textClass?: string;
}

const buttonStyles = {
  primary: {
    default: "",
    loading: "opacity-75",
    disabled: "opacity-50",
    text: "text-heading-primary",
    indicator: "text-heading-primary",
  },
  secondary: {
    default: "",
    loading: "opacity-75",
    disabled: "opacity-50",
    text: "text-heading-secondary",
    indicator: "text-heading-secondary",
  },
};

const LinkButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  isLoading = false,
  isDisabled = false,
  variant = "primary",
  textStyle = {},
  textClass = "",
}) => {
  const currentStyle = isDisabled
    ? buttonStyles[variant].disabled
    : isLoading
    ? buttonStyles[variant].loading
    : buttonStyles[variant].default;

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${currentStyle} `}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? (
        <ActivityIndicator
          size="small"
          className={buttonStyles[variant].indicator}
        />
      ) : (
        <Text
          style={[styles.fontStyle, textStyle]}
          className={`font-Avenir-heavy text-lg text-center  ${buttonStyles[variant].text} ${textClass}`}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fontStyle: {
    fontWeight: 500,
  },
});

export default LinkButton;
