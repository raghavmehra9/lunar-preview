import * as Location from "expo-location";
import { useCallback, useEffect, useRef, useState } from "react";
import { AppState, AppStateStatus } from "react-native";

export const useLocationCheck = () => {
  const [locationEnabled, setLocationEnabled] = useState(false);
  const appState = useRef(AppState.currentState);

  const checkLocation = useCallback(async () => {
    try {
      const { status } = await Location.getForegroundPermissionsAsync();

      if (status !== "granted") {
        setLocationEnabled(false);
        return false;
      }

      const servicesEnabled = await Location.hasServicesEnabledAsync();
      setLocationEnabled(servicesEnabled);
      return servicesEnabled;
    } catch (error) {
      console.error(" Error checking location:", error);
      setLocationEnabled(false);
      return false;
    }
  }, []);

  useEffect(() => {
    checkLocation();

    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        checkLocation();
      }
      appState.current = nextAppState;
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      subscription.remove();
    };
  }, [checkLocation]);

  return { locationEnabled, checkLocation };
};
