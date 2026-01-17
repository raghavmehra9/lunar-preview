import { CATEGORYCOLOR } from "@/constants/CelestialClock";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { isTimeInRange } from "@/utils/helpers/isInTimeRange";
import { scale } from "@/utils/helpers/sizeMatters";
import { useEffect, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, G, Line, Path } from "react-native-svg";
import { CelestialClockProps } from "../Types";
import { getCurrentTimeString } from "@/utils/helpers/getCurrentTimeString";
import CelestialClockFrame from "@/assets/svg/celestial_clock/CelestialClockFrame";
import CelestialClockIcon from "@/assets/svg/celestial_clock/CelestialClockIcon";

const CelestialClock = ({ data }: { data: CelestialClockProps }) => {
  const {
    startTime = "04:30",
    endTime = "05:50",
    activeTab,
    celestialData: { abhijit_muhurta, rahukaal, current_hora },
  } = data;
  const [currentTime, setCurrentTime] = useState(getCurrentTimeString());
  const [currentMuhurat, setCurrentMuhurat] = useState("-");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTimeString());
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timeRanges = [
      {
        name: "Abhijeet",
        start: abhijit_muhurta.start,
        end: abhijit_muhurta.end,
      },
      {
        name: "Rahukaal",
        start: rahukaal.start.slice(0, 5),
        end: rahukaal.end.slice(0, 5),
      },
      {
        name: `Hora`,
        start: current_hora?.time?.split(" : ")[0] || "00:00",
        end: current_hora?.time?.split(" : ")[1] || "00:00",
      },
    ];

    const muhurat =
      timeRanges.find(({ start, end }) => {
        return isTimeInRange(currentTime, start, end);
      })?.name || "-";
    setCurrentMuhurat(muhurat);
  }, [currentTime, abhijit_muhurta, rahukaal, current_hora]);

  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describePerfectSector = (
    x: number,
    y: number,
    outerRadius: number,
    startAngle: number,
    endAngle: number
  ) => {
    const start = polarToCartesian(x, y, outerRadius, startAngle);
    const end = polarToCartesian(x, y, outerRadius, endAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M",
      x,
      y,
      "L",
      start.x,
      start.y,
      "A",
      outerRadius,
      outerRadius,
      0,
      largeArcFlag,
      1,
      end.x,
      end.y,
      "Z",
    ].join(" ");
  };

  const getAngle = (time: string): number => {
    const [time12, ampm] = time.split(" ");
    const [hours, minutes] = time12.split(":").map(Number);
    return ((hours % 12) + minutes / 60) * 30;
  };

  const startAngle = getAngle(startTime);
  const endAngle = getAngle(endTime);
  const currentAngle = getAngle(currentTime);

  const centerX = (SCREEN_WIDTH - scale(80)) / 2;
  const centerY = centerX;
  const outerRadius = (SCREEN_WIDTH - scale(80)) / 2 - scale(10);

  const currentLineEnd = polarToCartesian(
    centerX,
    centerY,
    outerRadius,
    currentAngle
  );

  return (
    <View className="items-center" style={styles.celestialClockContainer}>
      <View style={styles.celestialClock} className="bg-pink-pinkSherbet">
        <Svg
          width={SCREEN_WIDTH - scale(80)}
          height={SCREEN_WIDTH - scale(80)}
          viewBox={`0 0 ${SCREEN_WIDTH - scale(80)} ${
            SCREEN_WIDTH - scale(80)
          }`}
        >
          <G>
            <Path
              d={describePerfectSector(
                centerX,
                centerY,
                outerRadius + scale(10),
                startAngle,
                endAngle
              )}
              fill={CATEGORYCOLOR[activeTab]?.highlightColor}
            />
            <Line
              x1={centerX}
              y1={centerY}
              x2={currentLineEnd.x}
              y2={currentLineEnd.y}
              stroke="#4e2a48"
              strokeWidth={scale(2)}
              strokeLinecap="round"
            />
            <Circle
              cx={currentLineEnd.x}
              cy={currentLineEnd.y}
              r={scale(4)}
              fill="#4e2a48"
            />
          </G>
        </Svg>
        <View style={styles.innerCelestialClock}>
          <CelestialClockIcon />
          <View
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: [
                { translateX: scale(-40) },
                { translateY: scale(-10) },
              ],
            }}
          >
            <Time currentTime={currentTime} />
          </View>
        </View>
      </View>
      <Text
        className="font-Avenir-heavy text-brand-primary"
        style={styles.liveMuhurat}
      >
        Live Muhurat: {currentMuhurat}
      </Text>
    </View>
  );
};

const Time = ({ currentTime }: { currentTime: string }) => (
  <View className="items-center justify-center flex-1">
    <Text
      className="text-brown-chocolate font-Avenir-heavy"
      style={{ fontSize: scale(18) }}
    >
      {currentTime}
    </Text>
  </View>
);

export default CelestialClock;

const styles = StyleSheet.create({
  celestialClockContainer: {
    backgroundColor: "white",
    paddingHorizontal: scale(20),
    paddingVertical: scale(14),
    gap: scale(20),
    borderRadius: scale(10),
  },
  celestialClock: {
    position: "relative",
    width: SCREEN_WIDTH - scale(40 * 2),
    height: SCREEN_WIDTH - scale(40 * 2),
    borderRadius: SCREEN_WIDTH,
  },
  innerCelestialClock: {
    position: "absolute",
    top: "50%",
    right: "50%",
    transform: [
      { translateY: Platform.OS === "ios" ? "-49%" : "-50%" },
      { translateX: Platform.OS === "ios" ? "51%" : "50%" },
    ],
    borderRadius: SCREEN_WIDTH,
  },
  liveMuhurat: {
    fontSize: scale(14),
  },
});
