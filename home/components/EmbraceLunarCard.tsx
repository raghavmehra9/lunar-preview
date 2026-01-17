import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const EmbraceLunarCard = () => {
  return (
    <ImageBackground
      source={require("@/assets/images/homescreen/EmbraceLunarCard.png")}
      style={styles.background}
      imageStyle={styles.imgStyle}
    >
      <Text
        className="font-Skillet-regular text-right self-end color-purple-deepPurple"
        style={styles.text}
      >
        Embrace lunar guidance for mindful serenity.
      </Text>
    </ImageBackground>
  );
};

export default EmbraceLunarCard;

const styles = StyleSheet.create({
  background: {
    height: SCREEN_HEIGHT / scale(3.6),
    paddingRight: scale(12),
    paddingTop: scale(7),
    marginTop: scale(60),
    width: SCREEN_WIDTH - scale(40),
  },
  text: {
    fontSize: scale(30),
    maxWidth: "70%",
  },
  imgStyle: {
    resizeMode: "cover",
  },
});
