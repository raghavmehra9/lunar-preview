import useMoonCalendar from "@/_hooks/astro-service/useMoonCalendar";
import RightLineArrow from "@/assets/svg/arrow/RightLineArrow";
import YogaIcon from "@/assets/svg/homescreen/YogaIcon";
import EmptyFragment from "@/components/EmptyFragment";
import Heading from "@/components/form/Heading";
import { MOON_PHASE } from "@/constants/Moon";
import { useNotification } from "@/context/notificationContext";
import { isLocationError } from "@/utils/helpers/isLocationError";
import { requestLocationPermission } from "@/utils/helpers/requestLocationPermission";
import { scale } from "@/utils/helpers/sizeMatters";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import moment from "moment-timezone";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ReleaseAndReflect = () => {
  const moonCalendar = useMoonCalendar();
  const { showNotification } = useNotification();

  const moonCalendarData = moonCalendar?.data?.data;

  const MoonPhaseIcon = moonCalendarData?.name
    ? MOON_PHASE[moonCalendarData?.name]
    : EmptyFragment;

  return (
    <View className="bg-pink-mediumPastelPink" style={styles.wrapper}>
      <Heading
        heading="Manifestation Journal"
        className="text-pink-darkPink"
        style={{
          fontSize: scale(34),
          lineHeight: scale(34),
        }}
      />
      {isLocationError(moonCalendar?.error) && (
        <View
          className="border p-2 flex-row gap-2 items-center border-yellow-warning"
          style={{ borderRadius: scale(5), marginBottom: scale(10) }}
        >
          <MaterialIcons name="warning" size={scale(18)} color={"#E9D502"} />
          <Text
            className="text-brand-primary font-Skillet-regular flex-1"
            style={{ fontSize: scale(18) }}
          >
            {`This service requires your location for accurate results.`}
          </Text>
        </View>
      )}
      <View
        className="flex-row mt-5 items-center bg-pink-deepPastelPink justify-around"
        style={styles.dateWrapper}
      >
        {moonCalendarData && (
          <Text className="text-white font-Skillet-regular" style={styles.date}>
            {moonCalendarData?.date?.day || moment().date() || "-"}
          </Text>
        )}
        <View>
          <Text className="text-white font-Skillet-regular" style={styles.day}>
            {moonCalendarData?.date?.weekday || moment().format("dddd") || "-"}
          </Text>
          <Text
            className="text-white font-Skillet-regular"
            style={styles.month}
          >
            {`${
              moonCalendarData?.date?.month || moment().format("MMMM") || "-"
            } ${
              moonCalendarData?.date?.year || moment().format("YYYY") || "-"
            }`}
          </Text>
        </View>
        {moonCalendar?.isLoading ? (
          <></>
        ) : (
          <MoonPhaseIcon width={scale(60)} height={scale(60)} />
        )}
      </View>
      <View style={styles.yogaIconWrapper}>
        <YogaIcon />
      </View>
      {moonCalendarData?.manifestationData && (
        <View className="bg-pink-pastelPink " style={styles.textWrapper}>
          <Text
            className="text-white font-Skillet-regular color-pink-darkPink text-center"
            style={styles.mainText}
          >
            Release & Reflect
          </Text>
          <Text
            className="text-white  color-pink-lightPastelPink font-Poppins-italic text-center"
            style={styles.subText}
          >
            “{moonCalendarData?.manifestationData?.content}”
          </Text>
        </View>
      )}
      <TouchableOpacity
        onPress={async () => {
          const isGranted = await requestLocationPermission();
          if (isGranted) {
            router.push("/(app)/moon-calendar");
          } else {
            showNotification("Location not enabled", "error");
            return;
          }
        }}
        className="flex-row bg-pink-deepPastelPink items-center justify-center"
        style={styles.indication}
      >
        <Text
          className="text-white font-Avenir-regular"
          style={{ fontSize: scale(16) }}
        >
          Tap Here
        </Text>
        <RightLineArrow />
      </TouchableOpacity>
    </View>
  );
};

export default ReleaseAndReflect;

const styles = StyleSheet.create({
  indication: {
    marginTop: scale(10),
    gap: scale(6),
    paddingVertical: scale(12),
    paddingHorizontal: scale(10),
    borderRadius: scale(8),
  },
  wrapper: {
    paddingVertical: scale(20),
    paddingHorizontal: scale(15),
    borderRadius: scale(20),
    marginTop: scale(15),
  },
  dateWrapper: {
    borderRadius: scale(10),
    paddingVertical: scale(10),
    paddingHorizontal: scale(20),
  },
  date: {
    fontSize: scale(56),
    marginRight: scale(5),
  },
  day: {
    fontSize: scale(22),
  },
  month: {
    fontSize: scale(22),
  },
  mainText: {
    fontSize: scale(30),
  },
  subText: {
    fontSize: scale(13),
    lineHeight: scale(20),
  },
  textWrapper: {
    marginTop: scale(25),
    paddingVertical: scale(12),
    paddingHorizontal: scale(10),
    borderRadius: scale(8),
  },
  yogaIconWrapper: {
    paddingTop: scale(30),
  },
});
