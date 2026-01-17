import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

import { FONTS } from "@/utils/constants";

export const useFontLoader = () => {
  const [loaded, error] = useFonts({
    ...FONTS.Avenir,
    ...FONTS.Poppins,
    ...FONTS.Skillet,
  });

  useEffect(() => {
    if (error) throw error;
    if (loaded) SplashScreen.hideAsync();
  }, [loaded, error]);

  return { loaded, error };
};
