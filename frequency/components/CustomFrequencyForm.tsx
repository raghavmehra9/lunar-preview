import useMutateCustomFrequency from "@/_hooks/frequency/useMutateCustomFrequency";
import { useUserDetails } from "@/_hooks/user/useUserDetails";
import DateTimeInput from "@/components/form/DateTimeInput";
import Input from "@/components/form/Input";
import InputIcon from "@/components/register/InputIcon";
import { useFrequencyFormData } from "@/context/frequencyFormCtx";
import commonStyles from "@/styles/commonStyle";
import { isFormIncomplete } from "@/utils/helpers/isFormIncomplete";
import { scale } from "@/utils/helpers/sizeMatters";
import { router } from "expo-router";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../../form/Button";
import { FrequencyFormData } from "../Types";

const REQUIRED_FIELDS: (keyof FrequencyFormData)[] = [
  "name",
  "mobile_number",
  "email",
  "birth_date",
  "birth_time",
  "birth_location",
  "birth_location_latitude",
  "birth_location_longitude",
  "street_1",
  "state",
  "city",
  "zip_code",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validateEmail = (email: string) =>
  email.trim().length > 0 && EMAIL_PATTERN.test(email);

const CustomFrequencyForm = () => {
  const { formData, handleChange, setFormData } = useFrequencyFormData();
  const createCustomFrequency = useMutateCustomFrequency();
  const userDetails = useUserDetails();

  const isFieldEmpty = isFormIncomplete(formData, REQUIRED_FIELDS);
  const isEmailValid = validateEmail(formData.email);

  const isFormValid = isFieldEmpty && isEmailValid;

  const handleSubmit = async () => {
    createCustomFrequency.mutate(formData);
  };

  const handleSearchLocation = () => {
    router.push({ pathname: "/(app)/frequency/location-search" });
  };

  useEffect(() => {
    if (userDetails?.isFetched && userDetails?.data) {
      const userData = userDetails.data;
      setFormData((prev) => ({
        ...prev,
        name: userData.name || prev.name,
        email: userData.email || prev.email,
        birth_date: userData?.birth_date || prev.birth_date,
        birth_time: userData?.birth_time || prev.birth_time,
        birth_location: userData?.birth_location || prev.birth_location,
      }));
    }
  }, [userDetails?.isFetched, userDetails?.data]);

  const errorResponse = createCustomFrequency?.error as any;

  return (
    <View style={commonStyles.container}>
      <View className="w-screen px-5 gap-y-4">
        <Input
          name="name"
          error={errorResponse?.response?.data?.errors?.name?.message}
          value={formData.name}
          placeholder="Your Name"
          onChangeText={(value) => handleChange("name", value)}
        />
        <Input
          name="mobile_number"
          error={errorResponse?.response?.data?.errors?.mobile_number?.message}
          value={formData.mobile_number}
          keyboardType="number-pad"
          placeholder="Your Contact Number"
          onChangeText={(value) => handleChange("mobile_number", value)}
        />
        <Input
          name="email"
          error={
            !isEmailValid
              ? "Invalid email address"
              : errorResponse?.response?.data?.errors?.email?.message
          }
          value={formData.email}
          keyboardType="email-address"
          placeholder="Your Email Address"
          onChangeText={(value) => handleChange("email", value)}
        />
        <DividerWithName dividerName="Your Birth Details" />
        <DateTimeInput
          name="birth_date"
          placeholder="Birth Date"
          onConfirm={(date) => handleChange("birth_date", date)}
          rightIcon={<InputIcon type="date" />}
        />
        <DateTimeInput
          name="birth_time"
          mode="time"
          placeholder="Birth Time"
          onConfirm={(time) => handleChange("birth_time", time)}
          rightIcon={<InputIcon type="clock" />}
        />
        <View className="flex-row w-4/5 gap-x-4">
          <View className="w-full">
            <Input
              name="birth_location"
              disabled
              onChangeText={() => {}}
              error={errorResponse?.errors?.birth_location?.message}
              value={formData.birth_location}
              placeholder="Birth Place"
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
        <DividerWithName dividerName="Your Address" />
        <Input
          value={formData.street_1}
          error={errorResponse?.response?.data?.errors?.street_1?.message}
          name="street_1"
          placeholder="Street 1"
          onChangeText={(value) => handleChange("street_1", value)}
        />
        <Input
          error={errorResponse?.response?.data?.errors?.street_2?.message}
          value={formData.street_2}
          name="street_2"
          placeholder="Street 2 (Optional)"
          onChangeText={(value) => handleChange("street_2", value)}
        />

        <Input
          value={formData.state}
          error={errorResponse?.response?.data?.errors?.state?.message}
          name="state"
          placeholder="State"
          onChangeText={(value) => handleChange("state", value)}
        />
        <Input
          value={formData.city}
          error={errorResponse?.response?.data?.errors?.city?.message}
          name="city"
          placeholder="City"
          onChangeText={(value) => handleChange("city", value)}
        />
        <Input
          value={formData.country}
          name="country"
          error={errorResponse?.response?.data?.errors?.country?.message}
          placeholder="Country"
          onChangeText={(value) => handleChange("country", value)}
        />
        <Input
          value={formData.zip_code}
          name="zip_code"
          keyboardType="number-pad"
          error={errorResponse?.response?.data?.errors?.zip_code?.message}
          placeholder="Zipcode"
          onChangeText={(value) => handleChange("zip_code", value)}
        />
      </View>

      <View className="flex-row justify-center mt-8 px-5 mb-5">
        <Button
          title="Submit"
          onPress={handleSubmit}
          isLoading={createCustomFrequency.isPending}
          isDisabled={createCustomFrequency.isPending || isFormValid}
          variant="primary"
        />
      </View>
    </View>
  );
};

const DividerWithName = ({ dividerName }: { dividerName: string }) => {
  return (
    <View
      style={{
        marginTop: scale(10),
        borderTopWidth: scale(0.3),
        borderColor: "#D9D2DC",
      }}
    >
      <Text
        className="font-Avenir-regular text-purple-deepPurple"
        style={{ marginTop: scale(10), marginLeft: scale(10) }}
      >
        {dividerName}
      </Text>
    </View>
  );
};

export default CustomFrequencyForm;
