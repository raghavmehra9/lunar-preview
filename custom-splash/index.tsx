// import { scale } from "@/utils/helpers/sizeMatters";
// import { useNetInfo } from "@react-native-community/netinfo";
// import { LinearGradient } from "expo-linear-gradient";
// import { SplashScreen, usePathname, useRouter } from "expo-router";
// import { useEffect } from "react";
// import { Image, StyleSheet, Text } from "react-native";

// type Props = {
//   onFinish: () => void;
// };

// export default function CustomSplash({ onFinish }: Props) {
//   const router = useRouter();
//   const { isConnected } = useNetInfo();
//   const pathname = usePathname();

//   useEffect(() => {
//     (async () => {
//       try {
//         await SplashScreen.preventAutoHideAsync().catch(() => {});
//       } finally {
//         await SplashScreen.hideAsync().catch(() => {});
//         setTimeout(() => {
//           if (isConnected && router.canGoBack()) {
//             if (pathname === "/no-internet-screen") {
//               router.back();
//             }
//           } else if (!isConnected) {
//             if (pathname !== "/no-internet-screen") {
//               router.push("/no-internet-screen");
//             }
//           }
//         }, 2000);
//       }
//     })();
//   }, [router, isConnected]);

//   return (
//     <LinearGradient
//       colors={["#ffffff", "#f9f3fc", "#f1e3f9"]}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 0, y: 1 }}
//       style={styles.container}
//     >
//       <Image
//         source={require("@/assets/images/splash-icon.png")}
//         style={styles.logo}
//         resizeMode="contain"
//       />
//       <Text
//         style={styles.subtitle}
//         className="text-purple-frenchLilac font-Avenir-book"
//       >
//         Your Celestial Guide to Balance
//       </Text>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   logo: {
//     width: scale(220),
//     height: scale(120),
//   },
//   subtitle: {
//     fontSize: scale(16),
//   },
// });

import { scale } from "@/utils/helpers/sizeMatters";
import { LinearGradient } from "expo-linear-gradient";
import { SplashScreen } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, ActivityIndicator } from "react-native";

type Props = {
  fontsLoaded: boolean;
  onFinish: () => void;
};

export default function CustomSplash({ fontsLoaded, onFinish }: Props) {
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    const hideSplash = async () => {
      try {
        // Hide native splash immediately
        await SplashScreen.hideAsync().catch(() => {});
      } catch (error) {
        console.error("Splash screen error:", error);
      }
    };

    hideSplash();

    // Set minimum display time (2 seconds)
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Only finish when BOTH conditions are met:
    // 1. Fonts are loaded
    // 2. Minimum time has elapsed
    if (fontsLoaded && minTimeElapsed) {
      onFinish();
    }
  }, [fontsLoaded, minTimeElapsed, onFinish]);

  return (
    <LinearGradient
      colors={["#ffffff", "#f9f3fc", "#f1e3f9"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Image
        source={require("@/assets/images/splash-icon.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Optional: Show loading indicator while fonts are loading */}
      {!fontsLoaded && (
        <ActivityIndicator size="small" color="#9333ea" style={styles.loader} />
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: scale(220),
    height: scale(120),
  },
  subtitle: {
    fontSize: scale(16),
    marginTop: scale(16),
  },
  loader: {
    marginTop: scale(24),
  },
});
