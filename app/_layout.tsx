import NetInfo from "@react-native-community/netinfo";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

import StatusBarHandler from "@/components/common/StatusBarHandler";
import { SessionProvider } from "@/context/ctx";
import { NotificationProvider } from "@/context/notificationContext";
import { ThemeProvider } from "@/context/themeCtx";
import QueryProvider from "@/provider/QueryProvider";
import { FONTS } from "@/utils/constants";
import { useFonts } from "expo-font";
import { router, Stack, usePathname } from "expo-router";
import { useEffect } from "react";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FONTS.Avenir,
    ...FONTS.Poppins,
    ...FONTS.Skillet,
  });

  useEffect(() => {
    if (error) throw error;
    if (loaded) SplashScreen.hideAsync();
  }, [loaded, error]);
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected && router.canGoBack()) {
        if (pathname === "/no-internet-screen") {
          router.back();
        }
      } else if (!state.isConnected) {
        if (pathname !== "/no-internet-screen") {
          router.push("/no-internet-screen");
        }
      }
    });

    return () => unsubscribe();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <QueryProvider>
        <SessionProvider>
          <NotificationProvider>
            <StatusBarHandler />
            <Stack
              screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
                gestureEnabled: true,
              }}
            />
          </NotificationProvider>
        </SessionProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
