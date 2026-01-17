function formatDateWithLocalOffset(date: Date): string {
  const timezoneOffsetInMinutes = date.getTimezoneOffset();
  const absoluteOffset = Math.abs(timezoneOffsetInMinutes);

  const offsetHours = String(Math.floor(absoluteOffset / 60)).padStart(2, "0");
  const offsetMinutes = String(absoluteOffset % 60).padStart(2, "0");
  const offsetSign = timezoneOffsetInMinutes <= 0 ? "+" : "-";

  const localTimeMillis = date.getTime() - timezoneOffsetInMinutes * 60 * 1000;
  const localDate = new Date(localTimeMillis);
  const isoStringWithoutZ = localDate.toISOString().slice(0, -1); // Remove 'Z'

  return `${isoStringWithoutZ}${offsetSign}${offsetHours}:${offsetMinutes}`;
}

export default formatDateWithLocalOffset;
