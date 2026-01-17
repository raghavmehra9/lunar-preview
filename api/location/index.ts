import * as Location from "expo-location";
import { fetchAddress, updateLocation } from "@/api/user-profile";

export type Coords = { latitude: number; longitude: number };

export async function getIPAddress(): Promise<string | null> {
  try {
    const res = await fetch("https://api64.ipify.org?format=json");
    const data = await res.json();
    return data?.ip ?? null;
  } catch {
    return null;
  }
}

export async function ensureForegroundPermission(): Promise<boolean> {
  const perm = await Location.getForegroundPermissionsAsync();
  if (perm.status === "granted") return true;
  const req = await Location.requestForegroundPermissionsAsync();
  return req.status === "granted";
}

export async function getCurrentCoords(): Promise<Coords | null> {
  try {
    const granted = await ensureForegroundPermission();
    if (!granted) return null;
    const loc = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });
    return { latitude: loc.coords.latitude, longitude: loc.coords.longitude };
  } catch {
    return null;
  }
}

export async function resolveTimeZone(
  lat: number,
  lng: number
): Promise<string | null> {
  try {
    const key = process.env.EXPO_PUBLIC_GOOGLE_PLACES_API;
    if (!key) return null;
    const ts = Math.floor(Date.now() / 1000);
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${ts}&key=${key}`
    );
    const data = await res.json();
    return data?.timeZoneId ?? null;
  } catch {
    return null;
  }
}

export async function syncUserLocation(coords: Coords) {
  const addr = await fetchAddress(coords.latitude, coords.longitude);
  await updateLocation({
    user_country: addr.country_name,
    user_location: addr.formatted_address,
    user_location_latitude: coords.latitude,
    user_location_longitude: coords.longitude,
  });
  return addr;
}
