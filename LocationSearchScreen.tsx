import { router } from "expo-router";
import { Pressable } from "react-native";

import AppBackground from "@/components/common/AppBackground";
import BackNavigation from "@/components/form/BackNavigation";
import { Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PlacesAutocomplete from "./user_profile/CustomAutoComplete";

const LocationSearchScreen = ({
  handleChange,
}: {
  handleChange: (name: string, value: string | number) => void;
}) => {
  return (
    <AppBackground scrollable={false}>
      <SafeAreaView style={{ flex: 1 }}>
        <BackNavigation headerName="Back" />
        <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
          <PlacesAutocomplete
            apiKey={process.env.EXPO_PUBLIC_GOOGLE_PLACES_API || ""}
            onPlaceSelected={(address, _, details) => {
              handleChange("birth_location", address);
              handleChange(
                "birth_location_latitude",
                details?.geometry?.location?.lat ?? 0
              );
              handleChange(
                "birth_location_longitude",
                details?.geometry?.location?.lng ?? 0
              );

              if (router.canGoBack()) {
                router.back();
              }
            }}
          />
          {/* <GooglePlacesAutocomplete
            fetchDetails={true}
            placeholder="Search Location"
            listViewDisplayed="auto"
            numberOfLines={2}
            enablePoweredByContainer={false}
            textInputProps={{
              placeholderTextColor: "#7B707B",
            }}
            predefinedPlaces={[]}
            nearbyPlacesAPI="GooglePlacesSearch"
            filterReverseGeocodingByTypes={[
              "locality",
              "administrative_area_level_3",
            ]}
            styles={{
              container: {
                height: SCREEN_HEIGHT,
              },
              textInput: {
                paddingHorizontal: scale(25),
                height: scale(54),
                wordWrap: "wrap",
                fontSize: scale(16),
                color: "#28241C",
                borderRadius: scale(50),
              },
              listView: {
                borderRadius: scale(30),
              },
              predefinedPlacesDescription: {
                color: "#1faadb",
              },
              description: {
                fontSize: scale(14),
                paddingVertical: scale(10),
                width: SCREEN_WIDTH,
                color: "#883D85",
                paddingLeft: scale(15),
                includeFontPadding: false,
              },
            }}
            onPress={(data, details = null) => {
              handleChange(
                "birth_location_latitude",
                details?.geometry?.location?.lat ?? 0
              );
              handleChange(
                "birth_location_longitude",
                details?.geometry?.location?.lng ?? 0
              );
              handleChange("birth_location", data?.description);
              if (router.canGoBack()) {
                router.back();
              }
            }}
            query={{
              key: process.env.EXPO_PUBLIC_GOOGLE_PLACES_API,
              language: "en",
            }}
          /> */}
        </Pressable>
      </SafeAreaView>
    </AppBackground>
  );
};

export default LocationSearchScreen;
