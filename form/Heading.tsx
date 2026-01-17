import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, TextStyle } from "react-native";

interface HeadingProps {
  heading: string;
  className?: string;
  style?: TextStyle;
}

const Heading = (props: HeadingProps) => {
  const { heading, className, style } = props;
  return (
    <Text
      style={[styles.fontStyle, style]}
      className={`text-center text-heading-primary font-Skillet-regular leading-tight ${className}`}
    >
      {heading}
    </Text>
  );
};

export default Heading;

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: scale(44),
    lineHeight: scale(44),
  },
});
