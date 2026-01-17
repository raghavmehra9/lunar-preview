import Cross from "@/assets/svg/common/Cross";
import Tick from "@/assets/svg/common/Tick";
import Button from "@/components/form/Button";
import useTimezoneTime from "@/hooks/useTimezoneTime";
import { scale } from "@/utils/helpers/sizeMatters";
import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import { ConsultationProps } from "../../Types";

const ConsultationCard: React.FC<ConsultationProps> = ({ data }) => {
  const { convertTo12HourFormat } = useTimezoneTime();
  return (
    <View style={styles.cardContainerParent} className="bg-white">
      <View
        style={styles.cardContainer}
        className="bg-purple-lightPastelPurple"
      >
        <View>
          <Text
            className="font-Avenir-light text-white"
            style={styles.labelText}
          >
            Astrologer
          </Text>
          <Text
            className="font-Avenir-heavy text-white"
            style={styles.consultantName}
          >
            {data.name}
          </Text>
          <View
            className="bg-purple-bluebell rounded-full self-start"
            style={styles.experienceBadge}
          >
            <Text
              className="font-Avenir-light text-white"
              style={styles.experienceText}
            >
              {data.experience} yrs of Experience
            </Text>
          </View>
        </View>
        <View style={styles.dateContainer}>
          <Text
            className="font-Avenir-regular text-center"
            style={styles.monthYear}
          >
            {data.date.month} 2025
          </Text>
          <Text
            className="font-Avenir-heavy text-brand-primary"
            style={styles.date}
          >
            {data.date.day}
          </Text>
          <View style={styles.timeContainer}>
            <Text className="font-Avenir-regular" style={styles.time}>
              {convertTo12HourFormat(data.start_time)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {data.active === "scheduledBookings" && data.status === "scheduled" && (
          <Button
            title="Join"
            onPress={() => {
              Linking.openURL(data.google_meet_link);
            }}
            isLoading={false}
            isDisabled={data.button_disabled}
            variant="warning"
          />
        )}
        {data.active === "scheduledBookings" && data.status === "canceled" && (
          <Button
            title="Join"
            onPress={() => {}}
            isLoading={false}
            isDisabled={true}
            variant="warning"
          />
        )}
        {data.active === "pastBookings" && data.pastStatus === "completed" && (
          <View
            className="flex-row items-center justify-center"
            style={{ gap: scale(5) }}
          >
            <Tick height={scale(12)} width={scale(15)} />
            <Text className="font-Avenir-regular">Completed</Text>
          </View>
        )}
        {data.active === "pastBookings" && data.pastStatus === "cancelled" && (
          <View
            className="flex-row items-center justify-center"
            style={{ gap: scale(5) }}
          >
            <Cross />
            <Text className="font-Avenir-regular text-red-600">Cancelled</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainerParent: {
    borderRadius: scale(10),
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: scale(18),
    paddingHorizontal: scale(20),
    borderRadius: scale(10),
  },
  labelText: {
    fontSize: scale(12),
  },
  consultantName: {
    fontSize: scale(20),
  },
  experienceBadge: {
    marginTop: scale(10),
    paddingHorizontal: scale(16),
    paddingVertical: scale(6),
  },
  experienceText: {
    fontSize: scale(12),
  },
  dateContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: scale(10),
    width: scale(70),
    alignItems: "center",
    justifyContent: "space-between",
  },
  monthYear: {
    fontSize: scale(10),
    color: "#86539D",
  },
  date: {
    fontSize: scale(26),
  },
  timeContainer: {
    backgroundColor: "#F7E4EC",
    width: "100%",
    alignItems: "center",
    paddingVertical: scale(8),
    borderBottomLeftRadius: scale(10),
    borderBottomRightRadius: scale(10),
  },
  time: {
    fontSize: scale(12),
    color: "#6E367A",
  },
  buttonContainer: { padding: scale(10) },
});

export default ConsultationCard;
