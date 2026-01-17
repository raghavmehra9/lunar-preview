import Abhijeet from "@/assets/svg/Abhijeet";
import Rahu from "@/assets/svg/cosmic_crew/planets/Rahu";
import RadioCircle from "@/assets/svg/RadioCircle";
import EmptyFragment from "@/components/EmptyFragment";
import SubHeading from "@/components/form/SubHeading";
import { CATEGORYCOLOR } from "@/constants/CelestialClock";
import { PLANETS } from "@/constants/LuckyUnLucky";
import useTimezoneTime from "@/hooks/useTimezoneTime";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";
import { CategoryHeaderProps } from "../Types";

const TimeRow = ({ time }: { time: string }) => {
  const { convertTo12HourFormat } = useTimezoneTime();
  return (
    <View style={styles.timeRow}>
      <Text className=" text-white font-Avenir-heavy" style={styles.timeText}>
        {convertTo12HourFormat(time)}
      </Text>
      <RadioCircle width={scale(15)} height={scale(15)} />
    </View>
  );
};

const CategoryHeader = ({
  planetName = "Saturn",
  type = "current_hora",
  activeTabTime = { startTime: "00:01 AM", endTime: "00:02 PM" },
}: CategoryHeaderProps) => {
  const PlanetIcon = PLANETS[planetName] ?? EmptyFragment;
  const dynamicBackgroundColor = {
    backgroundColor: CATEGORYCOLOR[type].backgroundColor,
  };
  const dynamicPlanetBackgroundColor = {
    backgroundColor: CATEGORYCOLOR[type].planetBackgroundColor,
  };
  return (
    <View
      style={[styles.headerContainer, dynamicBackgroundColor]}
      className="flex-row"
    >
      <View
        style={[styles.planetContainer, dynamicPlanetBackgroundColor]}
        className="items-center justify-center flex-col"
      >
        {type === "current_hora" ? (
          <>
            <PlanetIcon width={scale(40)} height={scale(40)} />
            <SubHeading
              subHeading={planetName}
              className="text-white font-Skillet-regular"
            />
          </>
        ) : type === "rahukaal" ? (
          <Rahu width={scale(40)} height={scale(40)} />
        ) : (
          <Abhijeet />
        )}
      </View>

      <View style={styles.timeContainer} className="flex-row justify-end">
        <View style={styles.timeColumn}>
          <TimeRow time={activeTabTime?.startTime} />
          <View
            className="bg-white rounded-full self-end"
            style={styles.verticalLine}
          />
          <TimeRow time={activeTabTime?.endTime} />
        </View>
      </View>
    </View>
  );
};

export default CategoryHeader;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    paddingVertical: scale(7),
    paddingHorizontal: scale(10),
    borderRadius: scale(6),
  },
  planetContainer: {
    padding: scale(4),
    flex: 0.35,
    borderRadius: scale(6),
  },
  timeContainer: {
    flex: 0.65,
  },
  timeColumn: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  timeText: {
    fontSize: scale(14),
    marginRight: scale(10),
  },
  verticalLine: {
    width: scale(2),
    height: scale(26),
    marginVertical: scale(4),
    marginHorizontal: scale(6.5),
  },
});
