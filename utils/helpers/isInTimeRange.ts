const convertTo24HourFormat = (
  time: string,
  ampm: string
): { hour: number; minute: number } => {
  let [hour, minute] = time.split(":").map(Number);

  if (ampm.toLowerCase() === "pm" && hour !== 12) {
    hour += 12; // Convert PM hours to 24-hour format (except 12 PM)
  } else if (ampm.toLowerCase() === "am" && hour === 12) {
    hour = 0; // Convert 12 AM to 00:00
  }

  return { hour, minute };
};

const isTimeInRange = (
  currentTime: string,
  startTime: string,
  endTime: string
): boolean => {
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);

  const [time12, ampm] = currentTime.split(" ");
  const { hour: currentHour, minute: currentMinute } = convertTo24HourFormat(
    time12,
    ampm
  );

  const now = new Date();

  const start = new Date(now);
  start.setHours(startHour, startMinute, 0, 0);

  const end = new Date(now);
  end.setHours(endHour, endMinute, 0, 0);

  const current = new Date(now);
  current.setHours(currentHour, currentMinute, 0, 0);

  if (end < start) {
    return current >= start || current <= end;
  }

  return current >= start && current <= end;
};

export { isTimeInRange };
