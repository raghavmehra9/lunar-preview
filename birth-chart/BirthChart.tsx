import { ScrollView, StyleSheet, Text, View } from "react-native";
import BackNavigation from "../form/BackNavigation";
import { scale } from "@/utils/helpers/sizeMatters";
import { PLANETS } from "@/constants/LuckyUnLucky";
import EmptyFragment from "../EmptyFragment";
import { useLocalSearchParams } from "expo-router";
import { Placement, Sign } from "./Types";
import { Planets } from "../get_lucky/Types";
import { SafeAreaView } from "react-native-safe-area-context";
import SpaceElement from "../SpaceElement";
import InfoModalBtn from "../common/InfoModalBtn";
import { BIRTH_CHART_INFO } from "@/constants/Informations";
import { PointsContent } from "../common/PointsView";
import { PLANETS_CONFIG } from "./BirthCharts";
import { ORDINALS } from "@/constants/ordinals";

type XYZ = {
  name: keyof typeof PLANETS;
  description: string;
  signs: { name: string; description: string }[];
  placements: {
    house: number;
    description: string;
    effects: Record<string, string>;
  }[];
};

const XYZ: XYZ = {
  name: "Sun",
  description:
    "In Vedic astrology, the Sun is one of the most vital celestial bodies in your birth chart. It symbolizes your inner essence, soul, your core identity, willpower, career and public image. The Sun is central to understanding your inner drive and the way you project your personality into the world. Its strength and placement can reveal both your potential for leadership and the challenges you might face in asserting your true self.\n",
  signs: [
    {
      name: "Taurus",
      description:
        "Picture a serene meadow bathed in golden sunlight—that’s the Sun in Taurus. Ruled by Venus, you exude calm, sensuality, and a love for life’s pleasures. Your strength lies in your perseverance and reliability. Once you set your mind to something, you see it through, no matter how long it takes. You value stability and are drawn to beauty, whether it’s art, nature, or relationships. In love, you are steadfast and nurturing, offering your partner a safe haven. However, your resistance to change can sometimes make you stubborn. Your life lesson is to embrace growth while maintaining your cherished stability.\n",
    },
  ],
  placements: [
    {
      house: 7,
      description:
        "The 7th house governs marriage, business partnerships, and public interactions. With the Sun here, you attract strong, ambitious, and influential partners—either in marriage or business. You may seek a powerful spouse or prefer to take the dominant role in relationships.\nSince this house rules public dealings, you may also be drawn to careers in law, diplomacy, or business negotiations. You are naturally confident in one-on-one interactions, but if the Sun is weak, you may face ego clashes in relationships.\n\n",
      effects: {
        Relationships:
          "Strong, passionate partnerships, but be mindful of power struggles.",
        Career: "Success in law, business, consulting, or public relations.",
        Wealth: "Gains through business partnerships or marriage.",
        Spiritual_Growth:
          "Learning to compromise and share the spotlight will bring long-term happiness.",
      },
    },
  ],
};

const COLORS_MAP = ["#FFF2E9", "#F1ECFF", "#FFF1F1"];

const getFormattedEffects = (
  effects: Record<string, string>
): React.ReactNode => {
  return Object.entries(effects).map(([key, value], index) => {
    return (
      <View key={index} style={{ marginBottom: scale(10) }}>
        <Text className="font-Avenir-heavy bg-white" style={styles.content}>
          {key?.split("_").join(" ")}:{" "}
          <Text className="font-Avenir-regular bg-white" style={styles.content}>
            {value}
          </Text>
        </Text>
      </View>
    );
  });
};

const BirthChart = () => {
  const params = useLocalSearchParams();
  const planetData = params.planetDetails
    ? JSON.parse(params.planetDetails as string)
    : null;
  const PlanetIcon = PLANETS[planetData.name as Planets] || EmptyFragment;

  const planetName =
    planetData.name.toLowerCase() === "sun" ||
    planetData.name.toLowerCase() === "moon"
      ? `The ${planetData.name}`
      : `${planetData.name}`;

  return (
    <SafeAreaView className="flex-1 bg-purple-plum" edges={["top"]}>
      <View style={styles.header}>
        <BackNavigation
          headerName="Birth Chart"
          type="white"
          rightComponent={
            <InfoModalBtn title="Birth Chart">
              <PointsContent
                content={BIRTH_CHART_INFO[planetData.name as Planets]}
              />
            </InfoModalBtn>
          }
        />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View
          className="bg-purple-maximumPurple items-center"
          style={styles.personalityPlanet}
        >
          <Text className="font-Avenir-regular text-white text-center">
            {PLANETS_CONFIG[planetData.name].label} Planet is
          </Text>
          <Text
            className="font-Skillet-regular text-center text-white"
            style={styles.planetText}
          >
            {planetData.name}
          </Text>
          <PlanetIcon />
        </View>
        <PlanetContentCard
          index={0}
          content={planetData.description}
          heading={planetName}
        />
        {planetData.signs.map((sign: Sign, index: number) => {
          return (
            <PlanetContentCard
              key={index}
              index={1}
              content={sign.description}
              heading={`${planetData.name} in ${sign.name}`}
            />
          );
        })}
        {planetData.placements.map((placement: Placement, index: number) => {
          return (
            <PlanetContentCard
              key={index}
              index={2}
              content={placement.description}
              heading={`${planetData.name} in ${
                ORDINALS[placement.house]
              } house`}
            >
              {/* <Text
                className="font-Avenir-heavy bg-white "
                style={[styles.content, { marginTop: scale(10) }]}
              >
                How This Placement Affects Different Areas of Life: {"\n"}
              </Text>
              {getFormattedEffects(placement.effects)} */}
            </PlanetContentCard>
          );
        })}
        <SpaceElement spacing={20} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BirthChart;

type PlanetContentProps = {
  heading: string;
  content: string;
  index: number;
  children?: React.ReactNode;
};

const PlanetContentCard = ({
  heading = "",
  content = "",
  index,
  children,
}: PlanetContentProps) => {
  return (
    <View
      style={[
        styles.contentCardWrapper,
        { backgroundColor: COLORS_MAP[index] || "#FFF2E9" },
      ]}
    >
      <Text
        className="font-Skillet-regular text-center color-purple-darkPurple"
        style={styles.contentHeading}
      >
        {heading}
      </Text>
      <View className="bg-white" style={styles.textWrapper}>
        <Text
          className="font-Avenir-regular bg-white text-darkLiver"
          style={styles.content}
        >
          {content?.trimEnd()}
        </Text>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(18),
    paddingVertical: scale(20),
  },
  header: {
    paddingHorizontal: scale(18),
  },
  personalityPlanet: {
    padding: scale(10),
    borderRadius: scale(10),
  },
  planetText: {
    fontSize: scale(47),
    marginBottom: scale(10),
  },
  contentCardWrapper: {
    marginTop: scale(20),
    padding: scale(20),
    borderRadius: scale(10),
  },
  contentHeading: {
    fontSize: scale(28),
  },
  content: {
    fontSize: scale(14),
  },
  textWrapper: {
    paddingHorizontal: scale(14),
    paddingVertical: scale(18),
    marginTop: scale(10),
  },
});
