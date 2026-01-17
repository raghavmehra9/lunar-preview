import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { scale } from "@/utils/helpers/sizeMatters";
import { useAudio } from "@/provider/AudioProvider";
import AudioPlay from "@/assets/svg/frequency/AudioPlay";
import Pause from "@/assets/svg/frequency/Pause";

interface AudioProgressBarProps {
  audioUri: string;
  audioId: string;
}

const AudioProgressBar: React.FC<AudioProgressBarProps> = ({
  audioUri,
  audioId,
}) => {
  const {
    activeTrack,
    isPlaying,
    isBuffering,
    position,
    duration,
    playTrack,
    pause,
    resume,
  } = useAudio();

  const isVisible = activeTrack?.id === audioId;
  const progressRatio = isVisible && duration > 0 ? position / duration : 0;

  const handlePlayPause = () => {
    if (isBuffering) return;

    if (!isVisible) {
      playTrack({ id: audioId, title: audioId, uri: audioUri });
    } else if (isPlaying) {
      pause();
    } else {
      resume();
    }
  };

  const formatTime = (millis: number): string => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.timeLabel}>
          {formatTime(isVisible ? position : 0)}
        </Text>
        <View style={styles.progressBarContainer}>
          <View style={styles.backgroundBar} />
          {isVisible && (
            <View
              style={[styles.filledBar, { width: `${progressRatio * 100}%` }]}
            />
          )}
        </View>
        <Text style={styles.timeLabel}>{formatTime(duration)}</Text>
      </View>

      <View style={styles.controls}>
        {isBuffering ? (
          <View style={{ padding: scale(12) }}>
            <ActivityIndicator size="large" color="#e57373" />
          </View>
        ) : (
          <TouchableOpacity onPress={handlePlayPause}>
            {isPlaying && isVisible ? (
              <Pause height={scale(56)} />
            ) : (
              <AudioPlay height={scale(56)} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: scale(20),
    marginVertical: scale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timeLabel: {
    fontSize: scale(12),
    color: "#888",
    width: scale(40),
  },
  controls: {
    marginTop: scale(10),
    marginBottom: scale(24),
    alignItems: "center",
  },
  progressBarContainer: {
    flex: 1,
    position: "relative",
    height: scale(5),
    marginHorizontal: scale(10),
  },
  backgroundBar: {
    position: "absolute",
    width: "100%",
    height: scale(5),
    backgroundColor: "#ddd",
    borderRadius: scale(5),
  },
  filledBar: {
    position: "absolute",
    height: scale(5),
    backgroundColor: "#e57373",
    borderRadius: scale(5),
  },
});

export default AudioProgressBar;
