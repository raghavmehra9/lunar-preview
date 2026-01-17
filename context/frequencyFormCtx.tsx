import { FrequencyFormData } from "@/components/frequency/Types";
import useTimezoneTime from "@/hooks/useTimezoneTime";
import {
  createContext,
  Dispatch,
  type PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

export const FORM_DATA: FrequencyFormData = {
  name: "",
  mobile_number: "",
  email: "",
  birth_time: "",
  birth_date: "",
  birth_location: "",
  birth_location_latitude: 0,
  birth_location_longitude: 0,
  street_1: "",
  street_2: "",
  state: "",
  city: "",
  zip_code: "",
  country: "",
};

const FrequencyFormContext = createContext<{
  handleChange: (name: string, value: string | number) => void;
  formData: FrequencyFormData;
  setFormData: Dispatch<SetStateAction<FrequencyFormData>>;
}>({
  handleChange: (name: string, value: string | number) => undefined,
  setFormData: () => {},
  formData: FORM_DATA,
});

export function useFrequencyFormData() {
  const value = useContext(FrequencyFormContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error(
        "useFrequencyFormData must be wrapped in a <FrequencyFormProvider />"
      );
    }
  }

  return value;
}

export function FrequencyFormProvider({ children }: PropsWithChildren) {
  const { formatDate, formatTime } = useTimezoneTime();
  const [formData, setFormData] = useState<FrequencyFormData>({
    ...FORM_DATA,
    birth_date: formatDate(new Date()),
    birth_time: formatTime(new Date()),
  });

  const handleChange = (name: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <FrequencyFormContext.Provider
      value={{
        formData,
        setFormData,
        handleChange,
      }}
    >
      {children}
    </FrequencyFormContext.Provider>
  );
}
