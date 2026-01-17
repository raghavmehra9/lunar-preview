import * as Location from "expo-location";

export async function requestLocationPermission(): Promise<boolean> {
  try {
    const { status: existingStatus } =
      await Location.getForegroundPermissionsAsync();

    if (existingStatus === "granted") {
      return true;
    }

    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status === "granted") {
      return true;
    }

    return false;
  } catch (error) {
    return false;
  }
}
