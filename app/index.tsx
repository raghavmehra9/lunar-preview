import LoadingScreen from "@/components/LoadingScreen";
import { useSession } from "@/context/ctx";
import { Redirect } from "expo-router";

export enum Routes {
  ONBOARDING = "/(auth)/onboarding/welcome",
  REGISTER = "/(auth)/registration",
  SIGN_UP = "/(auth)/signup",
  TABS = "/(app)/(tabs)",
}

export default function AppLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (session && !session.token) {
    return <Redirect href={Routes.SIGN_UP} />;
  }

  if (session && !session.isPreferenceEnabled) {
    return <Redirect href={Routes.ONBOARDING} />;
  }

  if (session && !session.isUserOnboarded) {
    return <Redirect href={Routes.REGISTER} />;
  }

  return <Redirect href={Routes.TABS} />;
}
