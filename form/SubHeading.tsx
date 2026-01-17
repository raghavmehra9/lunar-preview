import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, TextStyle } from "react-native";

interface SubheadingProps {
  subHeading: string;
  className?: string;
  style?: TextStyle;
}

const SubHeading = (props: SubheadingProps) => {
  const { subHeading, className, style } = props;
  return (
    <Text
      style={[styles.fontStyle, style]}
      className={`text-center text-heading-secondary font-Avenir-regular ${className}`}
    >
      {subHeading}
    </Text>
  );
};

export default SubHeading;

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: scale(16),
  },
});
