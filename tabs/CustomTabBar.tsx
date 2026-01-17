import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useRouter } from "expo-router";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Home from "./Home";
import Premium from "./Premium";
import Reader from "./Reader";
import User from "./User";
import { scale } from "@/utils/helpers/sizeMatters";
import Center from "./Center";
import fonts from "@/constants/fonts";
import { Ionicons } from "@expo/vector-icons";
import Settings from "./Settings";

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const router = useRouter();

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;

        const isFocused = state.index === index;
        const color = isFocused ? "#883D85" : "#C0A9C2";
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!event.defaultPrevented) {
            router.replace(route.name === "index" ? "/" : `/${route.name}`);
          }
        };

        const Icon = (() => {
          switch (route.name) {
            case "index":
              return (
                <Home color={color} height={scale(20)} width={scale(20)} />
              );
            case "Premium":
              return (
                <User color={color} height={scale(20)} width={scale(20)} />
              );
            case "center":
              return (
                <View
                  style={{
                    padding: scale(5),
                    backgroundColor: "white",
                    borderRadius: scale(50),
                  }}
                >
                  <Center height={scale(55)} width={scale(55)} />
                </View>
              );
            case "Reader":
              return (
                <Reader color={color} height={scale(20)} width={scale(20)} />
              );
            case "Profile":
              return (
                <Settings color={color} height={scale(20)} width={scale(20)} />
              );
            default:
              return null;
          }
        })();

        const isCenter = route.name === "center";

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tab, isCenter && styles.centerTab]}
            activeOpacity={0.8}
          >
            {Icon}
            {!isCenter && (
              <Text
                style={{
                  width: "100%",
                  color,
                  textAlign: "center",
                  fontSize: scale(9),
                  marginTop: scale(4),
                  fontFamily: fonts["AvenirRegular"],
                }}
              >
                {label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    alignItems: "center",
    flexDirection: "row",
    paddingTop: scale(10),
    backgroundColor: "white",
    paddingHorizontal: scale(5),
    justifyContent: "space-between",
    paddingBottom: Platform.OS === "ios" ? scale(20) : scale(10),
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centerTab: {
    width: scale(60),
    borderRadius: scale(30),
    alignItems: "center",
    justifyContent: "center",
    marginTop: scale(-40),
  },
});
