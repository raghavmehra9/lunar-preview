import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useOnBoardData } from "@/context/onBoardCtx";

import useMutateOnBoard from "@/_hooks/auth/useMutateOnBoard";
import { useSyncUserLocation } from "@/_hooks/useSyncUserLocation";
import Error from "@/components/form/Error";
import SpaceElement from "@/components/SpaceElement";
import { useNotification } from "@/context/notificationContext";
import commonStyles from "@/styles/commonStyle";
import { isFormIncomplete } from "@/utils/helpers/isFormIncomplete";
import { requestLocationPermission } from "@/utils/helpers/requestLocationPermission";
import { scale } from "@/utils/helpers/sizeMatters";
import { useQueryClient } from "@tanstack/react-query";
import Button from "../../form/Button";
import DateTimeInput from "../../form/DateTimeInput";
import Input from "../../form/Input";
import InputIcon from "../../register/InputIcon";
import { FormData } from "../Types";

const REQUIRED_FIELDS: (keyof FormData)[] = [
  "name",
  "birth_date",
  "birth_location",
  "birth_time",
  "birth_location_latitude",
  "birth_location_longitude",
];

const RegisterForm = () => {
  const { formData, handleChange } = useOnBoardData();
  const mutateOnBoard = useMutateOnBoard();
  const { showNotification } = useNotification();
  const { mutate, isPending } = useSyncUserLocation();
  const queryClient = useQueryClient();

  const isFieldEmpty = isFormIncomplete(formData, REQUIRED_FIELDS);

  const handleSearchLocation = () => {
    router.push({
      pathname: "/(auth)/registration/location-search",
    });
  };

  const handleSubmit = async () => {
    const isGranted = await requestLocationPermission();
    if (isGranted) {
      showNotification("Location access granted");
      mutate(undefined, {
        onSuccess: () => {
          mutateOnBoard.mutate(formData, {
            onSuccess: () => {
              queryClient.invalidateQueries({
                queryKey: ["service-moon-phase"],
              });
            },
          });
        },
        onError: (err) => {
          // Alert.alert(
          //   "err?.response?.data",
          //   JSON.stringify(err?.response?.data)
          // );
          // Alert.alert(
          //   "err?.response?.data?.error",
          //   JSON.stringify(err?.response?.data?.error)
          // );
          // Alert.alert("err.response", JSON.stringify(err));
          showNotification(
            "Something went wrong while fetching location",
            "error"
          );
        },
      });
    } else {
      showNotification(
        "Please enable location permission to continue",
        "error"
      );
    }
  };

  const buttonState = mutateOnBoard.isPending || isPending;

  return (
    <View style={commonStyles.container}>
      <View className="w-screen px-5 gap-y-4">
        {(mutateOnBoard?.error as any)?.response?.data?.error ? (
          <Text className="text-center text-red-600">
            {(mutateOnBoard?.error as any)?.response?.data?.error}
          </Text>
        ) : (
          <></>
        )}
        <Input
          name="name"
          error={(mutateOnBoard?.error as any)?.errors?.name?.message}
          value={formData.name}
          placeholder="Your Name"
          onChangeText={(value) => handleChange("name", value)}
        />
        <View className="flex-col items-center gap-x-4 ">
          <DateTimeInput
            name={"birth_date"}
            placeholder={"Birth Date"}
            onConfirm={(date: string) => handleChange("birth_date", date)}
            rightIcon={<InputIcon type="date" />}
          />
          {(mutateOnBoard?.error as any)?.errors?.birth_date?.message ? (
            <Error
              error={(mutateOnBoard?.error as any)?.errors?.birth_date?.message}
            />
          ) : (
            <></>
          )}
        </View>
        <View className="flex-col items-center gap-x-4 ">
          <DateTimeInput
            androidDisplayMode="spinner"
            name="birth_time"
            mode="time"
            placeholder={"Birth Time"}
            is24Hour={false}
            onConfirm={(date) => handleChange("birth_time", date)}
            rightIcon={<InputIcon type="clock" />}
          />
          {(mutateOnBoard?.error as any)?.errors?.birth_time?.message ? (
            <Error
              error={(mutateOnBoard?.error as any)?.errors?.birth_time?.message}
            />
          ) : (
            <></>
          )}
        </View>
        <View className="flex-row w-4/5 gap-x-4 ">
          <View className="w-full">
            <Input
              name="birth_location"
              disabled
              error={
                (mutateOnBoard?.error as any)?.errors?.birth_location?.message
              }
              value={formData.birth_location}
              placeholder="Birth Place"
              onChangeText={(value) => handleChange("birth_location", value)}
            />
            <TouchableOpacity
              className="absolute w-full h-full bg-transparent rounded-full"
              onPress={handleSearchLocation}
            />
          </View>
          <TouchableOpacity onPress={handleSearchLocation}>
            <InputIcon type="earth" />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text
            style={styles.textStyle}
            className="font-Avenir-light text-heading-secondary mb-4 mt-4"
          >
            *Take a moment to review your details – once you submit, they’re
            locked in and can’t be changed!
          </Text>
          <Text
            style={styles.textStyle}
            className="font-Avenir-light text-heading-secondary"
          >
            *We will store your data with your profile to enhance your
            experience.
          </Text>
        </View>
      </View>

      <SpaceElement spacing={30} />

      <View
        className="flex-row justify-center mt-auto"
        style={{ marginVertical: scale(24) }}
      >
        <Button
          title="Submit"
          parentClass="w-1/2"
          onPress={handleSubmit}
          isLoading={buttonState}
          isDisabled={buttonState || isFieldEmpty}
          variant="primary"
        />
      </View>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  textStyle: { fontSize: scale(12) },
  textContainer: { paddingHorizontal: scale(10) },
});
