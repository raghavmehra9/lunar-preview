import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import moment from "moment";
import React, { useState } from "react";
import { Platform, TouchableOpacity, View } from "react-native";
import Input from "./Input";

interface SimpleDateTimeInputProps {
  name: string;
  value: string;
  placeholder: string;
  mode?: "date" | "time";
  onConfirm: (value: string) => void;
  minimumDate?: Date;
  disabled?: boolean;
  rightIcon: React.ReactNode;
}

const SimpleDateTimeInput: React.FC<SimpleDateTimeInputProps> = ({
  name,
  value,
  placeholder,
  mode = "date",
  onConfirm,
  minimumDate,
  disabled = false,
  rightIcon,
}) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowPicker(false);
    if (event.type === "set" && selectedDate) {
      const formatted =
        mode === "date"
          ? moment(selectedDate).format("YYYY-MM-DD")
          : moment(selectedDate).format("HH:mm");
      onConfirm(formatted);
    }
  };

  const handleOpenPicker = () => {
    if (!disabled) setShowPicker(true);
  };

  const formattedDisplayValue = (() => {
    if (!value) return "";
    const parsed = moment(
      value,
      mode === "date" ? "YYYY-MM-DD" : "HH:mm",
      true
    );
    return parsed.isValid()
      ? mode === "date"
        ? parsed.format("MM/DD/YYYY")
        : parsed.format("hh:mm A")
      : "";
  })();

  return (
    <View>
      <View className="flex-row w-4/5 items-center gap-x-4">
        <View className="w-full relative">
          <Input
            name={name}
            value={formattedDisplayValue}
            disabled
            placeholder={placeholder}
            onChangeText={() => {}}
          />
          <TouchableOpacity
            className="absolute w-full h-full rounded-full"
            onPress={handleOpenPicker}
            disabled={disabled}
          />
        </View>
        <TouchableOpacity onPress={handleOpenPicker} disabled={disabled}>
          {rightIcon}
        </TouchableOpacity>
      </View>

      {showPicker && (
        <DateTimePicker
          value={
            value &&
            moment(
              value,
              mode === "date" ? "YYYY-MM-DD" : "HH:mm",
              true
            ).isValid()
              ? new Date(
                  mode === "date"
                    ? moment(value, "YYYY-MM-DD").toDate()
                    : moment(value, "HH:mm").toDate()
                )
              : new Date()
          }
          mode={mode}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          is24Hour={true}
          onChange={handleChange}
          minimumDate={minimumDate}
          maximumDate={mode === "date" ? new Date() : undefined}
        />
      )}
    </View>
  );
};

export default SimpleDateTimeInput;
