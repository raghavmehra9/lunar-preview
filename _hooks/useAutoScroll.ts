import { useEffect, useRef } from "react";
import { FlatList } from "react-native";

export const useAutoScroll = (
  flatListRef: React.RefObject<FlatList>,
  dataLength: number,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
  interval: number = 4500
) => {
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    stop();
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < dataLength - 1) {
          const nextIndex = prevIndex + 1;
          flatListRef.current?.scrollToIndex({
            index: nextIndex,
            animated: true,
          });
          return nextIndex;
        }
        stop();
        return prevIndex;
      });
    }, interval);
  };

  const stop = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  useEffect(() => {
    start();
    return stop;
  }, []);
};
