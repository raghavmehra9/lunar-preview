import { AxiosResponse } from "axios";

import { FrequencyResponse, PaymentData } from "@/components/purchase/Types";
import {
  ReasonListResponse,
  UserDetailResponse,
  UserProfileResponse,
} from "@/components/user_profile/Types";
import {
  extractLocationData,
  LocationData,
} from "@/utils/helpers/extractLocationData";
import { axiosInstance } from "..";
import {
  DeleteUserBody,
  PreferenceResponse,
  UserPreferencesBody,
} from "./types";
import { Alert } from "react-native";

const fetchUserDetails = async (): Promise<UserProfileResponse> => {
  try {
    const response: AxiosResponse<UserProfileResponse> =
      await axiosInstance.get("/user/profile");
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const fetchUserPurchaseList = async (page: number): Promise<PaymentData> => {
  const response: AxiosResponse<PaymentData> = await axiosInstance.get(
    `/plans/purchase?page=${page}`
  );
  return response?.data;
};

const fetchFrequencyPurchased = async (
  page: number
): Promise<FrequencyResponse> => {
  try {
    const response: AxiosResponse<FrequencyResponse> = await axiosInstance.get(
      `/frequency/purchase?page=${page}`
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const updateUserDetails = async (
  data: Pick<UserDetailResponse, "name" | "nick_name" | "profile_image">
) => {
  try {
    const response: AxiosResponse<UserProfileResponse> =
      await axiosInstance.put("/user/profile", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      });
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const updateLocation = async (data: {
  user_location: string;
  user_location_longitude: number;
  user_location_latitude: number;
  user_country: string;
}) => {
  try {
    const response = await axiosInstance.put("/user/location", data);
    // Alert.alert("Location updated", JSON.stringify(response?.data));
    return response?.data;
  } catch (error) {
    // Alert.alert("Error updating location", JSON.stringify(error));
    // Alert.alert(
    //   "Error updating location error response",
    //   JSON.stringify(error?.response)
    // );
    throw error;
  }
};

const fetchAddress = async (
  latitude: number,
  longitude: number
): Promise<LocationData> => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.EXPO_PUBLIC_GOOGLE_PLACES_API}&latlng=${latitude},${longitude}`
    );
    const data = await response.json();
    // Alert.alert("Geocoding API response", JSON.stringify(data.results[0]));
    if (data.status === "OK") {
      return extractLocationData(
        data.results[0].address_components,
        data.results[0].formatted_address
      );
    } else {
      Alert.alert("Geocoding API Error", data.status);
      throw new Error(`Geocoding API Error: ${data.status}`);
    }
  } catch (error: any) {
    // Alert.alert("Error fetching address error", error.message);
    // Alert.alert(
    //   "Error fetching address error stringify",
    //   JSON.stringify(error)
    // );
    // Alert.alert(
    //   "Error fetching address error.response",
    //   JSON.stringify(error?.response)
    // );
    throw new Error(`Error fetching address: ${error.message}`);
  }
};

const fetchDeleteReason = async (): Promise<ReasonListResponse> => {
  try {
    const response: AxiosResponse<ReasonListResponse> = await axiosInstance.get(
      "/user/delete-reasons"
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (data: DeleteUserBody) => {
  const response = await axiosInstance.delete("/user/delete", { data });
  return response?.data;
};

const userPreferences = async (): Promise<PreferenceResponse> => {
  const response = await axiosInstance.get("/user/preferences");
  return response?.data;
};

const submitUserPreferences = async (data: UserPreferencesBody) => {
  const response = await axiosInstance.post("/user/preferences", data);
  return response?.data;
};

export {
  deleteUser,
  fetchAddress,
  fetchDeleteReason,
  fetchFrequencyPurchased,
  fetchUserDetails,
  fetchUserPurchaseList,
  submitUserPreferences,
  updateLocation,
  updateUserDetails,
  userPreferences,
};
