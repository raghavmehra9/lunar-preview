import { PLANETS } from "@/constants/LuckyUnLucky";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";
import {
  PlanetStrengthSectionProps,
  StrongestPlanet,
  WeakestPlanet,
} from "../Types";
import BulletPoints from "./BulletPoints";
import EmptyFragment from "@/components/EmptyFragment";
import Saturn from "@/assets/svg/planets/Saturn";

const PlanetStrengthSection = (props: PlanetStrengthSectionProps) => {
  const { data, index, count, type } = props;

  const PlanetIcon = PLANETS[data?.planet] ?? Saturn;
  const title =
    type === "strong" ? "Your Cosmic Ally Today" : "Your Cosmic Lesson Today";
  const description =
    type === "strong"
      ? (data as StrongestPlanet)?.cosmicAlly
      : (data as WeakestPlanet)?.cosmicLesson;

  return (
    <View style={styles?.strengthSectionContent} key={index}>
      <View
        className="flex-row items-center justify-center"
        style={styles?.planetContainer}
      >
        <PlanetIcon />
        <Text
          className="font-Skillet-regular text-white"
          style={styles?.planetText}
        >
          {data?.planet}
        </Text>
      </View>
      <View>
        <SectionTitle title={title} />
        <SectionDescription description={description} />
      </View>
      <View>
        <SectionTitle title="What It Means:" />
        <SectionDescription description={data?.meaning} />
      </View>
      <View>
        <SectionTitle title="What To Do:" />
        <SectionListActions actions={data?.action} />
      </View>
      {index !== count ? (
        <View className="bg-white self-center" style={styles?.separator} />
      ) : (
        <EmptyFragment />
      )}
    </View>
  );
};

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <Text
      style={styles?.sectionTitleText}
      className="text-white font-Avenir-heavy"
    >
      {title}
    </Text>
  );
};
const SectionDescription = ({ description }: { description: string }) => {
  return (
    <Text
      style={styles?.sectionTitleText}
      className="text-white font-Avenir-regular"
    >
      {description}
    </Text>
  );
};
const SectionListActions = ({ actions }: { actions: string[] }) => {
  return actions?.map((points, index) => (
    <BulletPoints type="white" index={index} points={points} />
  ));
};

export default PlanetStrengthSection;

const styles = StyleSheet.create({
  sectionTitleText: {
    fontSize: scale(14),
    lineHeight: scale(22),
  },
  sectionDescriptionText: {
    fontSize: scale(14),
    lineHeight: scale(22),
  },
  strengthSectionContent: {
    gap: scale(20),
  },

  planetText: {
    fontSize: scale(24),
  },
  planetContainer: {
    marginTop: scale(10),
    gap: scale(10),
  },

  separator: {
    width: scale(SCREEN_WIDTH / 2),
    height: scale(1),
  },
});
