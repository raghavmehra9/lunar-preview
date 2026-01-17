import { SCREEN_WIDTH } from "@/constants/Spacing";
import { StyleSheet, Text, View } from "react-native";
import { DateProps } from "../Type";
import { scale } from "@/utils/helpers/sizeMatters";

const TodaysDate = ({ data }: DateProps) => {
  if (!data) {
    return <Text>Loading...</Text>;
  }
  return (
    <View className="w-full flex-col bg-white" style={styles?.todayDateWrapper}>
      <Text
        className="font-Skillet-regular text-brand-primary"
        style={styles?.date}
      >
        {data?.day}
      </Text>
      <View
        className="flex-row bg-purple-magnolia justify-between"
        style={styles?.dateBody}
      >
        <Text
          style={styles?.dateFontStyle}
          className="font-Avenir-light text-brand-primary"
        >
          {data?.weekday}
        </Text>
        <Text
          style={styles?.dateFontStyle}
          className="font-Avenir-light text-brand-primary"
        >
          {data?.month}
        </Text>
        <Text
          style={styles?.dateFontStyle}
          className="font-Avenir-light text-brand-primary"
        >
          {data?.year}
        </Text>
      </View>
    </View>
  );
};

export default TodaysDate;

const styles = StyleSheet.create({
  wrapper: { paddingHorizontal: scale(20) },
  body: { gap: scale(20) },
  councilHeading: { fontSize: scale(14), marginBottom: scale(20) },
  todayDateWrapper: {
    gap: scale(10),
    padding: scale(20),
    borderRadius: scale(16),
    alignItems: "center",
    marginBottom: scale(20),
  },
  date: { fontSize: scale(66) },
  dateFontStyle: {
    fontSize: scale(14),
  },
  dateBody: {
    paddingVertical: scale(4),
    paddingHorizontal: scale(15),
    borderRadius: scale(40),
    width: SCREEN_WIDTH / scale(1.5),
  },
});
