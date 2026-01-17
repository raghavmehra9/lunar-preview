import CustomTabBar from "@/components/tabs/CustomTabBar";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="Reader" options={{ title: "Healing" }} />
      <Tabs.Screen name="center" options={{ title: "" }} />
      <Tabs.Screen name="Premium" options={{ title: "Profile" }} />
      <Tabs.Screen name="Profile" options={{ title: "Settings" }} />
    </Tabs>
  );
}
