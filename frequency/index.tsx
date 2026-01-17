import useFrequencyList from "@/_hooks/frequency/useFrequencyList";
import { Frequency } from "@/api/frequency/types";
import AudioPause from "@/assets/svg/frequency/AudioPause";
import Meditation from "@/assets/svg/frequency/Meditation";
import Play from "@/assets/svg/frequency/Play";
import FrequencyStars from "@/assets/svg/purchase/FrequencyStars";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { useAudio } from "@/provider/AudioProvider";
import commonStyles from "@/styles/commonStyle";
import { scale } from "@/utils/helpers/sizeMatters";
import { router } from "expo-router";
import { FC } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InfoModalBtn from "../common/InfoModalBtn";
import { PointsContent } from "../common/PointsView";
import ErrorScreen from "../ErrorScreen";
import BackNavigation from "../form/BackNavigation";
import Button from "../form/Button";
import SubHeading from "../form/SubHeading";
import LoadingScreen from "../LoadingScreen";
import SpaceElement from "../SpaceElement";
import { FrequencyCardProps } from "./Types";

const FrequencyScreen = ({
  showNavigation = true,
}: {
  showNavigation: boolean;
}) => {
  const listFrequency = useFrequencyList();

  const frequencies =
    listFrequency.data?.pages?.flatMap((page) => page?.data || []) || [];

  if (listFrequency.isLoading) {
    return <LoadingScreen />;
  }

  if (listFrequency.isError) {
    return <ErrorScreen />;
  }

  return (
    <View className="flex-1 bg-brand-background">
      <SafeAreaView className="flex-1" edges={["top"]}>
        {showNavigation && (
          <View style={commonStyles.screenContainer}>
            <BackNavigation
              headerName="Frequencies"
              rightComponent={
                <InfoModalBtn title="Frequencies" infoColor="#883D85">
                  <PointsContent content="Our curated collection of healing sounds includes strengthening frequencies for weak/afflicted planets, customized remedial frequencies that are tailor-made for your individual chart and planetary afflictions, as well as everyday healing frequencies for a little boost of positivity in your daily life!" />
                </InfoModalBtn>
              }
            />
          </View>
        )}
        {frequencies.length > 0 ? (
          <FlatList
            data={frequencies}
            keyboardShouldPersistTaps="handled"
            renderItem={renderFrequencyItem}
            keyExtractor={(item, index) => item._id || `freq-${index}`}
            ListHeaderComponent={<FrequencyFeatureCard />}
            ListFooterComponent={
              <SpaceElement spacing={showNavigation ? 80 : 150} />
            }
            onEndReached={() => {
              if (
                listFrequency.hasNextPage &&
                !listFrequency.isFetchingNextPage
              ) {
                listFrequency.fetchNextPage();
              }
            }}
            onEndReachedThreshold={0.5}
            contentContainerStyle={[
              styles.frequencyContainer,
              commonStyles.screenContainer,
            ]}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <SubHeading subHeading="No Data Found" />
        )}
        <View
          className={`absolute self-center ${
            !showNavigation ? "bottom-14" : "bottom-10"
          }`}
        >
          <Button
            title="Custom Frequency"
            onPress={() => {
              router.push("/(app)/frequency/custom-form");
            }}
            isLoading={false}
            isDisabled={false}
            variant={"primary"}
          />
          <View className="absolute right-7 top-6">
            <FrequencyStars />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const renderFrequencyItem = ({ item }: { item: Frequency }) => {
  if (!item._id) return null; // Prevent navigation errors

  return (
    <TouchableOpacity
      key={item._id}
      style={styles.categoryContainer}
      activeOpacity={0.75}
      onPress={() => router.push(`/(app)/frequency/${item._id}`)}
    >
      <FrequencyCard name={item.name} freqId={item?._id} />
    </TouchableOpacity>
  );
};

export default FrequencyScreen;

const FrequencyFeatureCard: FC = () => (
  <View>
    <View className="flex-row items-center" style={styles.headingContainer}>
      <Text
        className="font-Skillet-regular text-purple-eminence"
        style={styles.frequencyHeading}
      >
        Harmonize Your Energy with Frequencies
      </Text>
      <Meditation width={scale(120)} height={scale(80)} />
    </View>
    <Text
      className="font-Avenir-regular text-purple-eminence"
      style={{ fontSize: scale(12), marginBottom: scale(10) }}
    >
      Pro Tip: Take a look at your birth chart then head to the 'Cosmic Crew' to
      understand the placement and strength of each planet in your chart. Once
      you know which of your planets needs a little love, head back here and
      create your custom playlist!
    </Text>
  </View>
);

const FrequencyCard: FC<FrequencyCardProps> = ({ name, freqId }) => {
  const { activeTrack, isPlaying } = useAudio();
  const isActive = activeTrack?.id === freqId;

  return (
    <View className="overflow-hidden bg-seashell" style={styles.frequencyBox}>
      <View className="flex-row justify-between items-center">
        <Text
          className="font-Avenir-regular text-purple-eminence"
          style={styles.frequencyText}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {name}
        </Text>
        {isActive && isPlaying ? <AudioPause /> : <Play />}
      </View>
      <View className="absolute">
        <Image
          source={require("@/assets/images/common/sound-wave.webp")}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frequencyContainer: {
    borderTopLeftRadius: scale(14),
    borderTopRightRadius: scale(14),
  },
  headingContainer: {
    marginBottom: scale(10),
    paddingTop: scale(20),
  },
  frequencyHeading: {
    fontSize: scale(30),
    lineHeight: scale(26),
    width: (SCREEN_WIDTH - scale(40)) / 1.8,
  },
  categoryContainer: {
    gap: scale(20),
    marginBottom: scale(20),
  },
  categoryText: {
    borderBottomWidth: scale(1),
    padding: scale(10),
    fontSize: scale(14),
  },
  frequencyBox: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(25),
    borderRadius: scale(20),
  },
  frequencyText: {
    fontSize: scale(15),
    flex: 0.95,
  },
});
