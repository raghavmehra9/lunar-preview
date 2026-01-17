import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";
import EmptyFragment from "../EmptyFragment";
import { ReportSectionProps } from "../report/Types";
import Stars from "@/assets/svg/astrologer/Stars";

const ReportSection = ({ title, data, bullet = false }: ReportSectionProps) => {
  if (!data.length) return null;

  return (
    <View style={styles.sectionContainer}>
      <View className="flex-row items-center gap-2">
        <Stars />
        <Text
          style={styles.sectionTitle}
          className="font-Avenir-heavy text-purple-jacarta"
        >
          {title}
        </Text>
      </View>
      {Array.isArray(data) ? (
        data.map((item, index) => (
          <View className="flex-row items-center" key={index}>
            {bullet ? <View style={styles.bullet} /> : <EmptyFragment />}
            <Text
              style={styles.sectionText}
              className="font-Avenir-regular text-darkLiver"
            >
              {item}
            </Text>
          </View>
        ))
      ) : (
        <Text
          style={styles.sectionText}
          className="font-Avenir-regular text-darkLiver"
        >
          {data}
        </Text>
      )}
    </View>
  );
};

export default ReportSection;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: scale(15),
  },
  sectionTitle: {
    fontSize: scale(15),
    lineHeight: scale(25),
  },
  sectionText: {
    fontSize: scale(13),
    lineHeight: scale(20),
  },
  bullet: {
    width: scale(5),
    height: scale(5),
    borderRadius: scale(10),
    backgroundColor: "black",
    marginRight: scale(10),
  },
});
