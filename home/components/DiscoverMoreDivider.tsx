import { scale } from "@/utils/helpers/sizeMatters";
import { View, Text, StyleSheet } from "react-native";

const DiscoverMoreDivider = () => {
  return (
    <View
      className="flex-row items-center justify-betweens"
      style={styles.wrapper}
    >
      <Divider />
      <Text
        className="font-Avenir-regular color-purple-plum"
        style={styles.text}
      >
        Discover more celestial wonders!
      </Text>
      <Divider />
    </View>
  );
};

export default DiscoverMoreDivider;

const Divider = () => {
  return <View className="bg-purple-plum" style={styles.divider} />;
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: scale(15),
  },
  divider: {
    height: scale(1),
    flex: 1,
    marginHorizontal: scale(5),
  },
  text: {
    fontSize: scale(15),
  },
});
