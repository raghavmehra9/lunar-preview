import FormField from "@/components/common/FormField";
import DateTimeInput from "@/components/form/DateTimeInput";
import Input from "@/components/form/Input";
import InputIcon from "@/components/register/InputIcon";
import { FormData } from "@/context/editProfileCtx";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type EditFormFieldProps = {
  formData: FormData;
  handleInputChange: (value: string, name?: string) => void;
  error: any;
};

const EditFormField = ({
  formData,
  handleInputChange,
  error,
}: EditFormFieldProps) => {
  return (
    <View style={styles.formWrapper}>
      <FormField
        label="Full Name"
        name="name"
        error={error?.response?.data?.errors?.name?.message}
        value={formData.name}
        placeholder="Your Full Name"
        onChangeText={handleInputChange}
      />
      <FormField
        label="Nick Name"
        name="nick_name"
        value={formData.nick_name}
        error={error?.response?.data?.errors?.nick_name?.message}
        placeholder="Your Nick Name"
        onChangeText={handleInputChange}
      />
      <FormField
        label="Email Address"
        name="email"
        value={formData.email}
        placeholder="Your Email Address"
        disabled
        onChangeText={() => {}}
      />

      <FormField
        label="Birth Date"
        name="birth_date"
        disabled
        onChangeText={() => {}}
      >
        <View className="" style={{ paddingRight: scale(20) }}>
          <DateTimeInput
            name="birth_date"
            disabled
            placeholder="Birth Date"
            initialDate={formData?.birth_date}
            onConfirm={(date: string) => {}}
            rightIcon={<InputIcon type="date" state="disabled" />}
          />
        </View>
      </FormField>

      <FormField
        label="Birth Location"
        name="birth_location"
        onChangeText={() => {}}
      >
        <View className="flex-row gap-x-4">
          <View style={{ flex: 1 }}>
            <Input
              name="birth_location"
              disabled
              value={formData.birth_location}
              placeholder="Birth Place"
              onChangeText={(text) => console.log(text)}
            />
          </View>
          <TouchableOpacity disabled>
            <InputIcon type="earth" state="disabled" />
          </TouchableOpacity>
        </View>
      </FormField>

      <FormField label="Birth Time" name="birth_time" onChangeText={() => {}}>
        <View style={{ paddingRight: scale(20) }}>
          <DateTimeInput
            name="birth_time"
            mode="time"
            disabled
            initialTime={formData?.birth_time}
            placeholder="Birth Time"
            onConfirm={(date: string) => console.log(date)}
            rightIcon={<InputIcon type="clock" state="disabled" />}
          />
        </View>
      </FormField>
    </View>
  );
};

export default EditFormField;

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: scale(16),
  },
  field: {
    gap: scale(6),
  },
  formWrapper: {
    gap: scale(20),
    marginTop: scale(30),
    flexDirection: "column",
  },
});
