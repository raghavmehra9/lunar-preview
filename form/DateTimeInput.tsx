import useTimezoneTime from "@/hooks/useTimezoneTime";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import moment from "moment-timezone";
import React, { useState } from "react";
import {
  Button,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Input from "./Input";

interface DateTimeInputProps {
  name: string;
  placeholder: string;
  mode?: "date" | "time" | "datetime";
  initialDate?: string;
  initialTime?: string;
  onConfirm: (date: string) => void;
  minimumDate?: Date;
  disabled?: boolean;
  rightIcon: React.ReactNode;
  androidDisplayMode?: "default" | "spinner";
  is24Hour?: boolean;
}

const DateTimeInput: React.FC<DateTimeInputProps> = ({
  name,
  placeholder,
  mode = "date",
  initialDate = "",
  initialTime = "",
  onConfirm,
  minimumDate,
  disabled = false,
  rightIcon,
  androidDisplayMode = "default",
  is24Hour = true,
}) => {
  const { formatDate, formatTime } = useTimezoneTime();

  const [date, setDate] = useState<Date | null>(
    initialDate ? new Date(initialDate) : null
  );
  const [time, setTime] = useState<Date | null>(
    initialTime ? new Date(initialTime) : null
  );
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [tempSelectedDate, setTempSelectedDate] = useState<Date | null>(
    new Date()
  );

  const handleChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === "set" && selectedDate) {
      if (Platform.OS === "android") {
        setShowPicker(false);
        if (mode === "date") {
          setDate(selectedDate);
          onConfirm(formatDate(selectedDate));
        } else {
          setTime(selectedDate);
          onConfirm(moment(selectedDate).format("HH:mm"));
        }
      } else {
        setTempSelectedDate(selectedDate);
      }
    } else if (event.type === "dismissed") {
      setShowPicker(false);
    }
  };

  const handleConfirm = () => {
    setShowPicker(false);
    const finalDate =
      tempSelectedDate || (mode === "date" ? date : time) || new Date();
    if (mode === "date") {
      setDate(finalDate);
      onConfirm(formatDate(finalDate));
    } else {
      setTime(finalDate);
      onConfirm(moment(finalDate).format("HH:mm"));
    }
  };

  const handleOpenPicker = () => {
    setShowPicker(true);
  };

  const getFutureDate = (years: number): Date => {
    const futureDate = new Date();
    futureDate.setFullYear(futureDate.getFullYear() + years);
    return futureDate;
  };

  const formattedDate = moment.utc(initialDate).format("MM/DD/YYYY");
  const formattedTime = moment(initialTime, "HH:mm").format("hh:mm A");

  return (
    <View>
      <View className="flex-row w-4/5 items-center gap-x-4">
        <View className="w-full">
          <View>
            <Input
              onChangeText={() => {}}
              name={name}
              value={
                disabled && formattedDate && mode === "date"
                  ? formattedDate
                  : disabled && formattedTime && mode === "time"
                  ? formattedTime
                  : date
                  ? formatDate(date)
                  : time
                  ? formatTime(time)
                  : ""
              }
              disabled
              placeholder={placeholder}
            />
            <TouchableOpacity
              className="absolute w-full h-full bg-transparent rounded-full"
              onPress={disabled ? undefined : handleOpenPicker}
            />
          </View>
        </View>
        <TouchableOpacity onPress={handleOpenPicker} disabled={disabled}>
          {rightIcon}
        </TouchableOpacity>
      </View>

      {showPicker && Platform.OS === "ios" && (
        <Modal
          transparent={true}
          animationType="slide"
          visible={showPicker}
          onRequestClose={() => setShowPicker(false)}
        >
          <Pressable
            style={styles.container}
            onPress={() => setShowPicker(false)}
          >
            <View className="flex-1 bg-opacity-50 relative">
              <View className="absolute bg-white rounded-lg p-4 w-full items-center bottom-0">
                <DateTimePicker
                  value={
                    tempSelectedDate ??
                    (mode === "date" ? date ?? new Date() : time ?? new Date())
                  }
                  mode={mode}
                  display="spinner"
                  textColor="#000"
                  onChange={handleChange}
                  minimumDate={minimumDate}
                  maximumDate={
                    mode === "date" ? new Date() : getFutureDate(100)
                  }
                  is24Hour={is24Hour}
                />
                <Button title="Confirm" onPress={handleConfirm} />
              </View>
            </View>
          </Pressable>
        </Modal>
      )}

      {showPicker && Platform.OS === "android" && (
        <DateTimePicker
          value={date ?? time ?? new Date()}
          mode={mode}
          display={androidDisplayMode || "default"}
          onChange={handleChange}
          minimumDate={minimumDate || new Date(1900, 0, 1)}
          maximumDate={mode === "date" ? new Date() : getFutureDate(100)}
          is24Hour={true}
        />
      )}
    </View>
  );
};

export default DateTimeInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(73, 39, 71, 0.40)",
  },
});
