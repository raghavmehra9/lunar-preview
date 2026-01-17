import { scale } from "@/utils/helpers/sizeMatters";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import BackCard from "../BackCard";
import Indication from "../components/Indication";

const CardSection = ({
  percentage,
  isFlipped,
  setIsFlipped,
}: {
  percentage: number;
  isFlipped: boolean;
  setIsFlipped: (isFlipped: boolean) => void;
}) => {
  const rotation = useSharedValue(0);
  const scaleValue = useSharedValue(1);
  const cardPosition = useSharedValue(36);

  const handlePress = () => {
    const newRotation = isFlipped ? 0 : 180;
    const newScale = isFlipped ? 1 : 0.9;
    const newCardPosition = isFlipped ? 36 : 0;

    rotation.value = withTiming(newRotation, { duration: 500 });
    scaleValue.value = withTiming(newScale, { duration: 500 });
    cardPosition.value = withTiming(newCardPosition, { duration: 500 });

    setIsFlipped(!isFlipped);
  };

  const animatedFrontStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotateY: `${rotation.value}deg` },
        { scale: scaleValue.value },
      ],
      opacity: rotation.value > 90 ? 0 : 1,
    };
  });

  const animatedBackStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotateY: `${rotation.value - 180}deg` },
        { scale: scaleValue.value },
      ],
      opacity: rotation.value > 90 ? 1 : 0,
    };
  });

  const transformTiltCard = {
    transform: [
      { scale: scaleValue },
      { translateY: scale(10) },
      { translateX: scale(27) },
    ],
  };

  const animatedIndicationStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: cardPosition.value }],
  }));

  return (
    <View>
      <View className="relative items-center" style={{ marginTop: scale(20) }}>
        <TouchableOpacity
          className="relative"
          style={{ zIndex: 4 }}
          onPress={() => (isFlipped ? undefined : handlePress())}
          activeOpacity={1}
        >
          <View>
            <Animated.View style={[animatedFrontStyle]}>
              <Image
                source={require("@/assets/images/get-lucky/MeditationCover.webp")}
                style={{
                  width: scale(257),
                  height: scale(354),
                }}
              />
            </Animated.View>
          </View>
          <Animated.View style={[{ position: "absolute" }, animatedBackStyle]}>
            <BackCard percentage={percentage} />
          </Animated.View>
        </TouchableOpacity>
        <Animated.View style={[styles.tiltCover, transformTiltCard]}>
          <Image
            source={require("@/assets/images/get-lucky/TiltMeditationCover.webp")}
            style={{
              width: scale(257),
              height: scale(354),
            }}
          />
        </Animated.View>
      </View>
      {isFlipped ? (
        <></>
      ) : (
        <Animated.View style={animatedIndicationStyle}>
          <Indication />
        </Animated.View>
      )}
    </View>
  );
};

export default CardSection;

const styles = StyleSheet.create({
  tiltCover: {
    position: "absolute",
    zIndex: 1,
  },
});
