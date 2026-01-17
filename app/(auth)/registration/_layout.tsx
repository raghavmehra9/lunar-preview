import { OnBoardProvider } from "@/context/onBoardCtx";
import { Stack } from "expo-router";

const RegistrationLayout = () => {
  return (
    <OnBoardProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </OnBoardProvider>
  );
};

export default RegistrationLayout;
