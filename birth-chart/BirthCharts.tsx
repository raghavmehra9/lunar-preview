import useBirthCharts from "@/_hooks/astro-service/useBirthCharts";
import { PLANETS } from "@/constants/LuckyUnLucky";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ErrorScreen from "../ErrorScreen";
import BackNavigation from "../form/BackNavigation";
import LoadingScreen from "../LoadingScreen";

type plantedDetails = {
  name: string;
  description: string;
  signs: { name: string; description: string }[];
  placements: {
    house: number;
    description: string;
    effects: Record<string, string>;
  }[];
};

interface PlanetConfig {
  cardColors: readonly [string, string];
  icon: any;
  label: string;
}

export const PLANETS_CONFIG: {
  [key: string]: PlanetConfig;
} = {
  Sun: {
    cardColors: ["#996397", "#B57FB3"],
    icon: PLANETS.Sun,
    label: "Your Core Identity",
  },
  Moon: {
    cardColors: ["#DE728D", "#F58EA8"],
    icon: PLANETS.Moon,
    label: "Your Emotions",
  },
  Mars: {
    cardColors: ["#F67B6A", "#F8A296"],
    icon: PLANETS.Mars,
    label: "Your Drive and Ambition",
  },
  Mercury: {
    cardColors: ["#FFA15A", "#FFBD8B"],
    icon: PLANETS.Mercury,
    label: "Your\nCommunication Style",
  },
  Jupiter: {
    cardColors: ["#996397", "#B57FB3"],
    icon: PLANETS.Jupiter,
    label: "Wisdom and Beliefs",
  },
  Venus: {
    cardColors: ["#DE728D", "#F58EA8"],
    icon: PLANETS.Venus,
    label: "How You Love & What Draws You",
  },
  Saturn: {
    cardColors: ["#F67B6A", "#F8A296"],
    icon: PLANETS.Saturn,
    label: "Discipline and Life Lessons",
  },
  Rahu: {
    cardColors: ["#FFA15A", "#FFBD8B"],
    icon: PLANETS.Rahu,
    label: "Ambition and Karmic Desires",
  },
  Ketu: {
    cardColors: ["#996397", "#B57FB3"],
    icon: PLANETS.Ketu,
    label: "Detachment and Karmic Release",
  },
};

const numColumns = 2;
const itemSize = SCREEN_WIDTH / numColumns - scale(30);

export default function BirthCharts({
  showNavigation = true,
}: {
  showNavigation: boolean;
}) {
  const handleBirthChartClick = (planetDetails: plantedDetails) => {
    router.push({
      pathname: "/birth-chart/detail",
      params: { planetDetails: JSON.stringify(planetDetails) },
    });
  };

  const fetchBirthCharts = useBirthCharts();
  const birthChartsData = fetchBirthCharts?.data?.data;

  if (fetchBirthCharts?.isLoading || !fetchBirthCharts) {
    return <LoadingScreen />;
  }

  if (fetchBirthCharts?.isError) {
    return <ErrorScreen />;
  }

  return (
    <SafeAreaView
      style={styles.container}
      className="bg-brand-background"
      edges={["top"]}
    >
      <View
        className="flex-row justify-between items-center"
        style={styles.header}
      >
        <BackNavigation headerName="Who You Are" />
        {/* <Info /> */}
      </View>
      <FlatList
        data={birthChartsData}
        keyExtractor={(item) => item.name}
        numColumns={numColumns}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => {
          const PlanetIcon = PLANETS_CONFIG[item.name].icon;
          return (
            <View style={styles.itemContainer}>
              <Pressable
                onPress={() => handleBirthChartClick(item)}
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
              >
                <View style={styles.iconWrapper}>
                  <View
                    style={[
                      styles.roundedIconWrapper,
                      item.name === "Saturn" && styles.saturnWrapper,
                    ]}
                  >
                    <PlanetIcon
                      width={scale(
                        item.name === "Rahu"
                          ? 60
                          : item.name === "Saturn"
                          ? 90
                          : 70
                      )}
                      height={scale(80)}
                    />
                  </View>
                </View>
                <LinearGradient
                  colors={PLANETS_CONFIG[item.name].cardColors}
                  className="items-center"
                  style={[
                    styles.gradientCard,
                    { width: itemSize, height: itemSize + itemSize * 0.05 },
                  ]}
                >
                  <View style={styles.textContainer}>
                    <Text
                      style={styles.title}
                      className="color-white font-Skillet-regular"
                    >
                      {PLANETS_CONFIG[item.name].label}
                    </Text>
                  </View>
                </LinearGradient>
              </Pressable>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: scale(18),
  },
  contentContainer: {
    paddingVertical: scale(30),
    paddingBottom: scale(50),
    backgroundColor: "white",
    borderRadius: scale(15),
  },
  itemContainer: {
    marginBottom: scale(45),
    marginLeft: scale(20),
  },

  iconWrapper: {
    position: "absolute",
    top: scale(-30),
    zIndex: 10,
    width: "100%",
    alignItems: "center",
  },
  roundedIconWrapper: {
    width: scale(74),
    height: scale(74),
    borderRadius: scale(40),
    backgroundColor: "white",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  saturnWrapper: {
    width: scale(100),
    height: scale(80),
    backgroundColor: "#FFD7AD",
    borderWidth: scale(4),
    borderColor: "white",
  },
  gradientCard: {
    borderRadius: scale(16),
  },
  textContainer: {
    paddingBottom: scale(15),
    paddingHorizontal: scale(15),
    width: "100%",
    marginTop: "auto",
  },
  title: {
    fontSize: scale(24),
    lineHeight: scale(22),
  },
});
