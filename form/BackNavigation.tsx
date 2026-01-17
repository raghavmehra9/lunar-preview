import { router, Href } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import HeaderLeftArrow from "@/assets/svg/arrow/HeaderLeftArrow";
import { scale } from "@/utils/helpers/sizeMatters";
import { NavigationTheme } from "../Types";

interface HeaderNavigationProps {
  headerName: string;
  rightComponent?: React.ReactNode;
  type?: NavigationTheme;
  backRoute?: Href;
}

const COLORS = {
  purple: "#883D85",
  white: "#fff",
};

const BackNavigation = ({
  headerName,
  rightComponent,
  type = "purple",
  backRoute,
}: HeaderNavigationProps) => {
  const handleBack = () => {
    if (backRoute) {
      router.push(backRoute);
    } else if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/(app)/(tabs)");
    }
  };

  const dynamicColor = { color: COLORS[type] };

  return (
    <View
      style={styles.navigationStyle}
      className="flex-row items-center justify-between bg-transparent"
    >
      <TouchableOpacity
        onPress={handleBack}
        style={{ paddingVertical: scale(10) }}
        className="flex-row gap-5 items-center "
      >
        <HeaderLeftArrow type={type} />
        <Text
          style={[{ fontSize: scale(18) }, dynamicColor]}
          className={`font-Avenir-regular`}
        >
          {headerName}
        </Text>
      </TouchableOpacity>
      {rightComponent}
    </View>
  );
};

export default BackNavigation;

const styles = StyleSheet.create({
  navigationStyle: {
    paddingVertical: scale(10),
  },
});
