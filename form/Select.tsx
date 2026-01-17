import fonts from "@/constants/fonts";
import { scale } from "@/utils/helpers/sizeMatters";
import React from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

interface SelectProps {
  name: string;
  value: string | null;
  placeholder: string;
  onChange: (name: string, value: string) => void;
  data: { label: string; value: string }[];
}

const Select: React.FC<SelectProps> = ({
  name,
  value,
  placeholder,
  onChange,
  data,
}) => {
  return (
    <Dropdown
      style={styles.dropdown}
      itemTextStyle={styles.itemText}
      data={data}
      placeholderStyle={styles.placeholder}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      value={value}
      onChange={(item) => onChange(name, item.value)}
      inputSearchStyle={styles.itemText}
      selectedTextStyle={styles.itemText}
      itemContainerStyle={styles.itemContainerStyle}
      containerStyle={styles.containerStyle}
    />
  );
};

export default Select;

const styles = StyleSheet.create({
  dropdown: {
    paddingVertical: scale(17),
    paddingRight: scale(22),
    paddingLeft: scale(20),
    borderRadius: scale(50),
    backgroundColor: "white",
  },
  itemText: {
    fontFamily: "AvenirRegular",
    color: "#4B2C5E",
    fontSize: scale(14),
  },
  placeholder: {
    color: "#8D8D8D",
  },
  containerStyle: {
    borderRadius: scale(10),
  },
  itemContainerStyle: {},
});
