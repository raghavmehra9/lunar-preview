import BulletsLight from "@/assets/svg/cards/BulletsLight";
import { StyleSheet, Text, View } from "react-native";
import { DetailsTheme } from "../Types";
import { scale } from "@/utils/helpers/sizeMatters";
import BulletPoints from "../components/BulletPoints";

const DetailsSection = ({ data }: { data: DetailsTheme }) => {
  return (
    <View className="bg-white" style={styles?.card}>
      <View className="flex-col items-center" style={styles?.header}>
        <BulletsLight />
        <Text
          className="font-Skillet-regular text-purple-plum text-center"
          style={styles?.themeText}
        >
          {data?.theme}
        </Text>
      </View>
      <View>
        <Text
          className="font-Avenir-light text-purple-frenchLilac"
          style={styles?.messageText}
        >
          {data?.message}
        </Text>
      </View>
      <View>
        <SubHeading title="What to do" />
        {data?.whatToDo?.map((points, index) => (
          <BulletPoints index={index} points={points} />
        ))}
      </View>
      <View>
        <SubHeading title="Affirmation" />
        <Text
          className="font-Avenir-light text-purple-frenchLilac"
          style={styles?.points}
        >
          {data?.affirmation}
        </Text>
      </View>
    </View>
  );
};

const SubHeading = ({ title }: { title: string }) => {
  return (
    <Text
      className="text-center text-purple-africanVoilet font-Skillet-regular"
      style={styles?.titleStyle}
    >
      {title}:
    </Text>
  );
};

const styles = StyleSheet.create({
  card: {
    gap: scale(10),
    padding: scale(20),
    borderRadius: scale(10),
  },
  header: {
    gap: scale(10),
  },
  themeText: {
    fontSize: scale(23),
  },
  messageText: {
    fontSize: scale(14),
    lineHeight: scale(20),
  },
  points: {
    fontSize: scale(14),
  },
  titleStyle: {
    fontSize: scale(18),
  },
});

export default DetailsSection;
