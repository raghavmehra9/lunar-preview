import { AudioProvider } from "@/provider/AudioProvider";
import { StripeProvider } from "@stripe/stripe-react-native";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <StripeProvider
      publishableKey={process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""}
    >
      <AudioProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </AudioProvider>
    </StripeProvider>
  );
};

export default _layout;
