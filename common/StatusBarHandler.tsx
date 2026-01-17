// src/components/StatusBarHandler.tsx
import { useTheme } from "@/context/themeCtx";
import { StatusBar } from "expo-status-bar";

const StatusBarHandler = () => {
  const { theme } = useTheme();
  const statusBarStyle = theme === "dark" ? "dark" : "dark";
  return <StatusBar style={statusBarStyle} />;
};

export default StatusBarHandler;
