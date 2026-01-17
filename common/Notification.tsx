import { scale } from "@/utils/helpers/sizeMatters";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text } from "react-native";

interface NotificationProps {
  message: string;
  type: "success" | "error";
}

const Notification: React.FC<NotificationProps> = ({ message, type }) => {
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: "white",
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <Ionicons
        name={type === "success" ? "checkmark-circle" : "close-circle"}
        size={scale(25)}
        color={type === "success" ? "green" : "red"}
      />
      <Text className="font-Avenir-regular text-black" style={[styles.text]}>
        {message}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Notification;
