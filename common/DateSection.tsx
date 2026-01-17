import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";
import { DateProps } from "../Types";

const COLORS = {
  white: {
    background: "#fff",
    text: "#883D85",
    pillBackground: "#F5ECFF",
  },
  jacarta: {
    background: "#471457",
    text: "#fff",
    pillBackground: "#471457",
  },
};

const TodaysDate = ({ data, type = "white" }: DateProps) => {
  if (!data) {
    return <Text>Loading...</Text>;
  }

  const dynamicColor = {
    backgroundColor: COLORS[type]?.background,
  };
  const dynamicPillColor = {
    backgroundColor: COLORS[type]?.pillBackground,
  };
  const dynamicTextColor = {
    color: COLORS[type]?.text,
  };

  return (
    <View
      className={`w-full flex-col ${COLORS[type]?.background}`}
      style={[styles?.todayDateWrapper, dynamicColor]}
    >
      <Text
        className={`font-Skillet-regular ${COLORS[type]?.text}`}
        style={[styles?.date, dynamicTextColor]}
      >
        {data?.day}
      </Text>
      <View
        className={`flex-row ${COLORS[type]?.pillBackground} justify-between`}
        style={[styles?.dateBody, dynamicPillColor]}
      >
        <Text
          style={[styles?.dateFontStyle, dynamicTextColor]}
          className={`font-Avenir-regular ${COLORS[type]?.text}`}
        >
          {data?.weekday}
        </Text>
        <Text
          style={[styles?.dateFontStyle, dynamicTextColor]}
          className={`font-Avenir-regular ${COLORS[type]?.text}`}
        >
          {data?.month}
        </Text>
        <Text
          style={[styles?.dateFontStyle, dynamicTextColor]}
          className={`font-Avenir-regular ${COLORS[type]?.text}`}
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
    padding: scale(10),
    borderRadius: scale(16),
    alignItems: "center",
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
