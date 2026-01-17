type AddressComponentType =
  | "plus_code"
  | "political"
  | "sublocality"
  | "sublocality_level_1"
  | "sublocality_level_2"
  | "locality"
  | "administrative_area_level_3"
  | "administrative_area_level_2"
  | "administrative_area_level_1"
  | "country"
  | "postal_code";

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: AddressComponentType[];
}

export interface LocationData {
  formatted_address: string;
  country_name: string;
  country_code: string;
  state_name: string;
  city_name: string;
  pin_code: string;
}

export const extractLocationData = (
  addressComponents: AddressComponent[],
  formatted_address: string
): LocationData => {
  const locationData: LocationData = {
    formatted_address: formatted_address,
    country_name: "",
    country_code: "",
    state_name: "",
    city_name: "",
    pin_code: "",
  };

  addressComponents.forEach((component) => {
    if (component.types.includes("country")) {
      locationData.country_name = component.long_name;
      locationData.country_code = component.short_name;
    }
    if (component.types.includes("administrative_area_level_1")) {
      locationData.state_name = component.long_name;
    }
    if (component.types.includes("locality")) {
      locationData.city_name = component.long_name;
    }
    if (component.types.includes("postal_code")) {
      locationData.pin_code = component.long_name;
    }
  });

  return locationData;
};
