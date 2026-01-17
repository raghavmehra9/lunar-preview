import { fetchAddress, updateLocation } from "@/api/user-profile";
import { useMutation } from "@tanstack/react-query";
import * as Location from "expo-location";

export function useSyncUserLocation() {
  return useMutation({
    mutationKey: ["sync-user-location"],
    mutationFn: async () => {
      const loc = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      // Alert.alert("Location fetched loc =>", JSON.stringify(loc));

      const coords = {
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      };

      // Alert.alert("Location fetched coords => ", JSON.stringify(coords));

      const addr = await fetchAddress(coords.latitude, coords.longitude);

      // Alert.alert("Location fetched addr =>", JSON.stringify(addr));

      await updateLocation({
        user_country: addr.country_name,
        user_location: addr.formatted_address,
        user_location_latitude: coords.latitude,
        user_location_longitude: coords.longitude,
      });

      return { coords, address: addr };
    },
  });
}
