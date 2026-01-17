import { useSyncUserLocation } from "@/_hooks/useSyncUserLocation";
import { useNotification } from "@/context/notificationContext";
import { Feather } from "@expo/vector-icons";
import { useQueryClient } from "@tanstack/react-query";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  ActivityIndicator,
} from "react-native";

export default function FetchLocationScreen() {
  const params = useLocalSearchParams();
  const filteredParams = Array.isArray(params) ? params[0] : params;

  const { mutate } = useSyncUserLocation();
  const { showNotification } = useNotification();
  const queryClient = useQueryClient();

  const [dots, setDots] = useState("");
  const pulseAnim = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;

  // Animate dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Pulse effect
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1500,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [pulseAnim]);

  // Bounce effect
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -10,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [bounceAnim]);

  // Call location mutation
  useEffect(() => {
    mutate(undefined, {
      onSuccess: () => {
        showNotification("Location updated successfully");
        queryClient.invalidateQueries({ queryKey: ["service-moon-phase"] });
        router.replace(filteredParams.route);
      },
      onError: (_) => {
        showNotification(
          "Something went wrong while fetching location",
          "error"
        );
        router.replace(filteredParams.route);
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* Pulse + Icon */}
      <View style={styles.iconWrapper}>
        <Animated.View
          style={[
            styles.pulseCircle,
            {
              transform: [
                {
                  scale: pulseAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1.5],
                  }),
                },
              ],
              opacity: pulseAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.4, 0],
              }),
            },
          ]}
        />
        <Animated.View style={{ transform: [{ translateY: bounceAnim }] }}>
          <View style={styles.iconCircle}>
            <Feather name="map-pin" size={48} color="white" />
          </View>
        </Animated.View>
      </View>

      {/* Text */}
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Fetching Location{dots}</Text>
        <Text style={styles.subtitle}>
          Please wait while we determine your current position
        </Text>
      </View>

      {/* Spinner */}
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size="small" color="#2563eb" />
        <Text style={styles.processing}>Processing</Text>
      </View>

      {/* Progress Dots (static here, could animate too) */}
      <View style={styles.dotsWrapper}>
        <View style={styles.dot} />
        <View style={[styles.dot, { marginHorizontal: 6 }]} />
        <View style={styles.dot} />
      </View>

      {/* Bottom Info */}
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>
          Make sure location services are enabled
        </Text>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9ff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  iconWrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  pulseCircle: {
    position: "absolute",
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#3b82f6",
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#6366f1",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  textWrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1f2937",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
  },
  loadingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  processing: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#2563eb",
  },
  dotsWrapper: {
    flexDirection: "row",
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#2563eb",
  },
  bottom: {
    marginTop: 40,
    alignItems: "center",
  },
  bottomText: {
    fontSize: 12,
    color: "#9ca3af",
  },
});
