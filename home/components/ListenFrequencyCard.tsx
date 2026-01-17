import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { scale } from "@/utils/helpers/sizeMatters";
import MusicHealingIllustrator from "@/assets/svg/homescreen/MusicHealingIllustrator";
import PlayIconRounded from "@/assets/svg/common/PlayIconRounded";
import TowardsRightArrow from "@/assets/svg/arrow/TowardsRightArrow";
import { router } from "expo-router";
import SoundWave from "@/assets/svg/frequency/SoundWave";
import { SCREEN_WIDTH } from "@/constants/Spacing";

const ListenFrequencyCard = () => {
  return (
    <TouchableOpacity
      onPress={() => router.push("/(app)/frequency")}
      className="bg-white  border-grey-lightSilver border-2 border-pink-pastel"
      style={styles.wrapper}
    >
      <View className="flex-row items-center justify-between">
        <View className="w-1/2">
          <Text
            className="font-Skillet-regular color-purple-deepPurple"
            style={styles.headingText}
          >
            The Healing Garden
          </Text>
        </View>
        <MusicHealingIllustrator />
      </View>
      <View
        className="flex-row items-center justify-between bg-pink-100 overflow-hidden"
        style={styles.musicCardWrapper}
      >
        <Text
          numberOfLines={2}
          className="font-Avenir-regular color-purple-deepPurple text-left pr-1"
          style={styles.healingFrequency}
        >
          Click here to discover healing frequencies
        </Text>
        <PlayIconRounded />
        <View className="absolute">
          <SoundWave />
        </View>
      </View>
      <View className="flex-row items-center justify-end gap-1">
        <Text className="font-Avenir-heavy color-purple-deepPurple text-right pr-1">
          Listen to more frequencies
        </Text>
        <TowardsRightArrow />
      </View>
    </TouchableOpacity>
  );
};

export default ListenFrequencyCard;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: scale(15),
    borderRadius: scale(20),
    paddingHorizontal: scale(10),
    paddingVertical: scale(20),
  },
  headingText: {
    fontSize: scale(32),
  },
  listenMoreTex: {},
  healingFrequency: {
    fontSize: scale(12),
    width: SCREEN_WIDTH / 2,
  },
  musicCardWrapper: {
    padding: scale(20),
    borderRadius: scale(15),
    marginBottom: scale(20),
    marginTop: scale(10),
  },
});
