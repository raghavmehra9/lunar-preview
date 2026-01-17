// hooks/useTimezoneTime.ts
import moment from "moment-timezone";
import { useCallback, useState } from "react";

const useTimezoneTime = () => {
  const [timezone, _] = useState(moment.tz.guess());

  const formatDate = (date: Date | string) => moment(date).format("MM/DD/YYYY");

  const formatTime = (date: Date | string) => moment(date).format("hh:mm A");

  const formatDateTime = (date: Date | string) =>
    moment(date).format("YYYY-MM-DD hh:mm A");

  const toUtc = (date: Date | string) =>
    moment.tz(date, timezone).utc().format();

  const convertTo12HourFormat = (time24: string): string => {
    return moment(time24, "HH:mm").format("hh:mm A");
  };

  const convertTimeToISODate = useCallback(
    (timeString: string): Date => {
      const now = moment().tz(timezone);
      const [hours, minutes] = timeString.split(":").map(Number);
      const timeMoment = moment.tz(
        {
          year: now.year(),
          month: now.month(),
          day: now.date(),
          hour: hours,
          minute: minutes,
        },
        timezone
      );
      return timeMoment.toDate();
    },
    [timezone]
  );

  const userReadableDate = useCallback(
    (isoDate: string): string => {
      return moment(isoDate).tz(timezone).format("DD MMMM YYYY"); // e.g. "10 April 2025"
    },
    [timezone]
  );

  function toCustomISOString(date) {
    const offset = date.getTimezoneOffset();
    const absOffset = Math.abs(offset);

    const offsetHours = String(Math.floor(absOffset / 60)).padStart(2, "0");
    const offsetMinutes = String(absOffset % 60).padStart(2, "0");
    const offsetSign = offset <= 0 ? "+" : "-";

    const adjustedDate = new Date(date.getTime() - offset * 60 * 1000);
    const isoString = adjustedDate.toISOString().slice(0, -1); // Remove 'Z'

    return `${isoString}${offsetSign}${offsetHours}:${offsetMinutes}`;
  }

  return {
    timezone,
    formatDate,
    formatTime,
    formatDateTime,
    toUtc,
    userReadableDate,
    convertTo12HourFormat,
    convertTimeToISODate,
    toCustomISOString,
  };
};

export default useTimezoneTime;
