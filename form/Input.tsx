import { scale } from "@/utils/helpers/sizeMatters";
import React from "react";
import {
  KeyboardTypeOptions,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import Error from "./Error";

type inputProps = {
  name: string;
  value: string;
  error?: string;
  disabled?: boolean;
  inputClass?: string;
  placeholder: string;
  numberOfLines?: number;
  leftIcon?: React.ReactNode;
  isPasswordField?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onChangeText(value: string, name?: string): void;
};

const Input: React.FC<inputProps> = (props: inputProps) => {
  const {
    leftIcon,
    name = "",
    value = "",
    error = "",
    onChangeText,
    numberOfLines = 1,
    inputClass = "",
    disabled = false,
    placeholder = "Text",
    keyboardType = "default",
    isPasswordField = false,
  } = props;

  const errorStyling = error
    ? Platform.OS === "ios"
      ? styles.errorIOS
      : styles.errorAndroid
    : {};

  return (
    <View className="flex-col w-full">
      <View
        style={[
          errorStyling,
          disabled ? styles.disabledInput : styles.enableInput,
        ]}
        className={`flex-row items-center rounded-full`}
      >
        {leftIcon && <View style={{ marginLeft: scale(18) }}>{leftIcon}</View>}
        <TextInput
          style={[styles.fontStyle, !leftIcon && styles.inputWithoutIcon]}
          value={value}
          numberOfLines={numberOfLines}
          editable={!disabled}
          placeholder={placeholder}
          placeholderTextColor="#8D8D8D"
          keyboardType={keyboardType}
          secureTextEntry={isPasswordField}
          onChangeText={(text) => onChangeText(text, name)}
          className={`w-full font-Avenir-regular text-purple-jacarta ${inputClass}`}
        />
      </View>
      <Error error={error} />
    </View>
  );
};

const styles = StyleSheet.create({
  fontStyle: {
    flex: 1,
    fontSize: scale(14),
    paddingVertical: scale(17),
    paddingRight: scale(22),
    paddingLeft: scale(12),
  },
  inputWithoutIcon: {
    paddingLeft: scale(22),
  },

  errorIOS: {
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowColor: "rgba(204, 14, 14, 0.25)",
    shadowOffset: { width: 1, height: 1 },
  },
  errorAndroid: {
    elevation: 8,
  },
  enableInput: {
    backgroundColor: "#fff",
  },
  disabledInput: {
    backgroundColor: "#F3E9F3",
  },
});

export default Input;
