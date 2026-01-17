import { onboardingPayload } from "@/api/auth/authTypes";
import useTimezoneTime from "@/hooks/useTimezoneTime";
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useState,
} from "react";

const FORM_DATA = {
  name: "",
  birth_time: "",
  birth_date: "",
  birth_location: "",
  birth_location_latitude: 0,
  birth_location_longitude: 0,
};

const RegisterContext = createContext<{
  handleChange: (name: string, value: string | number) => void;
  formData: onboardingPayload;
  clearFormData: () => void;
}>({
  handleChange: (name: string, value: string | number) => undefined,
  formData: FORM_DATA,
  clearFormData: () => {},
});

export function useOnBoardData() {
  const value = useContext(RegisterContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error(
        "useOnBoardData must be wrapped in a <OnBoardProvider />"
      );
    }
  }

  return value;
}

export function OnBoardProvider({ children }: PropsWithChildren) {
  const { formatDate, formatTime } = useTimezoneTime();
  const [formData, setFormData] = useState<onboardingPayload>(() => ({
    ...FORM_DATA,
    birth_date: formatDate(new Date()),
    birth_time: formatTime(new Date()),
  }));

  const handleChange = (name: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearFormData = () => {
    setFormData(FORM_DATA);
  };

  return (
    <RegisterContext.Provider
      value={{
        formData,
        handleChange,
        clearFormData,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}
