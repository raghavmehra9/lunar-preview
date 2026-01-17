import useFrequencyDetail from "@/_hooks/frequency/useFrequencyDetail";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import commonStyles from "@/styles/commonStyle";
import decodeAudioUrl from "@/utils/helpers/decodeAudioUrl";
import { scale } from "@/utils/helpers/sizeMatters";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ErrorScreen from "../ErrorScreen";
import BackNavigation from "../form/BackNavigation";
import LoadingScreen from "../LoadingScreen";
import AudioProgressBar from "./components/AudioProgressBar";
import Card from "./components/Card";
import SubscriptionBox from "./components/SubscriptionBox";
import { FrequencyDetail } from "./Types";

const FrequencyDetailScreen = ({ freqId }: { freqId: string }) => {
  const [decodeAudio, setDecodeAudio] = useState("");
  const detailFrequency = useFrequencyDetail(freqId);

  const detailFrequencyData = detailFrequency?.data?.frequency;

  useEffect(() => {
    const tryDecode = async () => {
      if (
        detailFrequencyData?.frequency_audio_url &&
        process.env.EXPO_PUBLIC_AUDIO_SECRET_KEY
      ) {
        const url = await decodeAudioUrl(
          detailFrequencyData.frequency_audio_url,
          process.env.EXPO_PUBLIC_AUDIO_SECRET_KEY
        );

        setDecodeAudio(url);
      }
    };

    tryDecode();
  }, [detailFrequencyData?.frequency_audio_url]);

  if (detailFrequency?.isLoading) {
    return <LoadingScreen />;
  }

  if (detailFrequency?.isError) {
    return <ErrorScreen />;
  }

  return (
    <View className="flex-1 bg-brand-background">
      <SafeAreaView className="flex-1" edges={["top"]}>
        <View style={commonStyles.screenContainer}>
          <BackNavigation headerName="Frequencies" />
        </View>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View style={commonStyles.screenContainer}>
            {detailFrequencyData?.thumbnail_url && (
              <ImageSection imageUrl={detailFrequencyData.thumbnail_url} />
            )}
            {detailFrequencyData?.category && detailFrequencyData?.name && (
              <TitleSection
                categoryName={detailFrequencyData.category?.name}
                title={detailFrequencyData.name}
              />
            )}
            {detailFrequency.isLoading ? (
              <View style={{ padding: scale(12) }}>
                <ActivityIndicator size="large" color="#e57373" />
              </View>
            ) : detailFrequencyData?.frequency_audio_url &&
              decodeAudio &&
              detailFrequencyData?._id === freqId ? (
              <AudioProgressBar
                audioId={detailFrequencyData?._id}
                audioUri={decodeAudio}
              />
            ) : detailFrequencyData?._id ? (
              <SubscriptionBox
                freqId={detailFrequencyData?._id}
                price={{ price: detailFrequencyData?.price }}
              />
            ) : (
              <></>
            )}
          </View>
          {detailFrequencyData && <DetailsSection data={detailFrequencyData} />}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const ImageSection = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <View className="items-center">
      <Image
        source={{ uri: imageUrl }} // Fixed: Use dynamic image URL
        style={styles.image}
      />
    </View>
  );
};

const TitleSection = ({
  title,
  categoryName,
}: {
  title: string;
  categoryName: string;
}) => {
  return (
    <View style={styles.titleContainer}>
      {title && (
        <Text
          className="text-purple-deepPurple font-Skillet-regular"
          style={styles.title}
        >
          {title}
        </Text>
      )}

      <View
        className="flex-row justify-between"
        style={styles.categoryContainer}
      >
        {categoryName && (
          <Text
            className="text-purple-frenchLilac font-Avenir-heavy"
            style={styles.category}
          >
            {categoryName}
          </Text>
        )}
      </View>
    </View>
  );
};

const DetailsSection = ({ data }: { data: FrequencyDetail }) => {
  return (
    <View className="flex-1 bg-white" style={styles.detailsSection}>
      {data.description ? (
        <Card cardTitle="Description" data={data.description} />
      ) : null}
      {/* {data.benefits?.length ? (
        <Card cardTitle="Benefits" bullet data={data.benefits} />
      ) : null}
      {data.use_cases?.length ? (
        <Card cardTitle="Use Cases" bullet data={data.use_cases} />
      ) : null} */}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    width: "100%",
    height: SCREEN_WIDTH - scale(40),
    borderRadius: scale(20),
    borderWidth: scale(4),
    borderColor: "white",
  },
  titleContainer: {
    marginTop: scale(16),
  },
  title: {
    fontSize: scale(30),
  },
  categoryContainer: {
    marginTop: scale(8),
  },
  category: {
    fontSize: scale(14),
  },
  detailsSection: {
    gap: scale(20),
    paddingVertical: scale(30),
    paddingHorizontal: scale(20),
    borderTopLeftRadius: scale(14),
    borderTopRightRadius: scale(14),
  },
});

export default FrequencyDetailScreen;
