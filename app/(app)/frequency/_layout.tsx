import { FrequencyFormProvider } from "@/context/frequencyFormCtx";
import { Stack } from "expo-router";

const Form = () => {
  return (
    <FrequencyFormProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </FrequencyFormProvider>
  );
};

export default Form;
