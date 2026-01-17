import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/Spacing";
import { Image, StyleSheet, View } from "react-native";

const Clouds = ({ height = SCREEN_HEIGHT * 0.15 }: { height?: number }) => {
  return (
    <View style={[styles.container, { height }]}>
      <Image
        source={require("@assets/images/getting-started/light_clouds.webp")}
        style={[styles.cloud]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    overflow: "hidden",
  },
  cloud: {
    position: "absolute",
    width: SCREEN_WIDTH,
    height: "100%",
  },
});

export default Clouds;
