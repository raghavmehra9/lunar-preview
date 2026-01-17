import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text } from "react-native";

type Props = {
  name: string;
};

const NameHeading = ({ name }: Props) => {
  return (
    <Text
      numberOfLines={3}
      className="font-Skillet-regular color-purple-deepPurple"
      style={styles.welcomeHeading}
    >
      Hi {name}!
    </Text>
  );
};

export default NameHeading;

const styles = StyleSheet.create({
  welcomeHeading: {
    fontSize: scale(36),
    flex: 0.9,
    lineHeight: 38,
  },
});
