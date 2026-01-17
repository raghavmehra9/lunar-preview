import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";
import { useAudioPlayer, AudioSource } from "expo-audio";

type Track = {
  id: string;
  title: string;
  uri: string;
};

type AudioContextType = {
  activeTrack: Track | null;
  isPlaying: boolean;
  isBuffering: boolean;
  position: number;
  duration: number;
  playTrack: (track: Track) => void;
  pause: () => void;
  resume: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio must be used within AudioProvider");
  return context;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeTrack, setActiveTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(1);
  const player = useAudioPlayer();
  const previousTrackIdRef = useRef<string | null>(null);

  const playTrack = async (track: Track) => {
    try {
      setIsBuffering(true);

      // Unload previous track if exists
      if (previousTrackIdRef.current) {
        player.pause();
        previousTrackIdRef.current = null;
      }

      const source: AudioSource = { uri: track.uri };
      player.replace(source);

      setActiveTrack(track);
      setIsPlaying(true);
      previousTrackIdRef.current = track.id;

      player.play();
      setIsBuffering(false);
    } catch (e) {
      console.error("Error playing track:", e);
      setIsBuffering(false);
    }
  };

  const pause = async () => {
    if (player.playing && isPlaying) {
      player.pause();
      setIsPlaying(false);
    }
  };

  const resume = async () => {
    if (!player.playing && !isPlaying) {
      player.play();
      setIsPlaying(true);
    }
  };

  // Monitor playback status updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeTrack) {
        // Update buffering state during loading
        const isBufferingNow = player.isLoaded === false;
        setIsBuffering(isBufferingNow);

        // Update position and duration
        const currentPos = player.currentTime * 1000; // Convert to milliseconds
        const currentDur = (player.duration || 1) * 1000; // Convert to milliseconds

        setPosition(currentPos);
        setDuration(currentDur);

        // Sync playing state
        setIsPlaying(player.playing);

        // Check if track finished
        if (
          player.duration &&
          player.currentTime >= player.duration &&
          player.currentTime > 0
        ) {
          setIsPlaying(false);
          setActiveTrack(null);
          setPosition(0);
          setDuration(1);
          previousTrackIdRef.current = null;
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [
    activeTrack,
    player.playing,
    player.currentTime,
    player.duration,
    player.isLoaded,
  ]);

  useEffect(() => {
    return () => {
      previousTrackIdRef.current = null;
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        activeTrack,
        isPlaying,
        isBuffering,
        position,
        duration,
        playTrack,
        pause,
        resume,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
