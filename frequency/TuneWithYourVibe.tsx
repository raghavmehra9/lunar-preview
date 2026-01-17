import BoostFrequency from "@/assets/svg/frequency/BoostFrequency";
import { scale } from "@/utils/helpers/sizeMatters";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../form/Button";

type TuneWithYourVibeProps = {
  onPress: () => void;
  heading: string;
  subheading: string;
};

const TuneWithYourVibe = ({
  onPress = () => {},
  heading,
  subheading,
}: TuneWithYourVibeProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/wave.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.innerContainer}>
        <Text
          style={[styles.headingText]}
          className="text-brand-primary font-Skillet-regular"
        >
          {heading}
        </Text>

        <View className="flex-row">
          <Text
            style={styles.subheadingText}
            className="text-brand-primary font-Avenir-regular"
          >
            {subheading}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.frequencyIcon}>
            <BoostFrequency height={scale(80)} />
          </View>
          <Button
            title="Explore our healing frequencies!"
            onPress={onPress}
            isLoading={false}
            isDisabled={false}
            textStyle={styles.buttonText}
            variant={"primary"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: scale(1.5),
    borderRadius: scale(20),
    borderColor: "#FCE0DC",
    backgroundColor: "#FCF8F9",
    overflow: "hidden",
  },
  backgroundImage: {
    width: "100%",
    position: "absolute",
  },
  innerContainer: {
    paddingHorizontal: scale(20),
    paddingTop: scale(30),
    paddingBottom: scale(20),
  },
  headingText: {
    fontSize: scale(28),
  },
  subheadingText: {
    fontSize: scale(14),
  },
  buttonContainer: {
    marginTop: scale(50),
  },
  frequencyIcon: {
    position: "absolute",
    top: -90,
    right: scale(-20),
    zIndex: 1,
  },
  buttonText: {
    fontSize: scale(12),
  },
});

export default TuneWithYourVibe;
