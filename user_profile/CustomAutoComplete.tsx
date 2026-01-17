import { scale } from "@/utils/helpers/sizeMatters";
import { useState, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

function useDebounce<T>(value: T, delay: number) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

type Prediction = { description: string; place_id: string };

interface Props {
  apiKey: string;
  onPlaceSelected: (
    address: string,
    placeId: string,
    details: any | null
  ) => void;
  placeholder?: string;
}

async function fetchPlaceDetails(apiKey: string, placeId: string) {
  const qs = new URLSearchParams({
    place_id: placeId,
    key: apiKey,
    fields: "geometry,name,formatted_address",
  }).toString();

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?${qs}`
    );
    const json = await res.json();
    console.log("json", json);
    if (json.status === "OK") {
      return json.result;
    } else {
      console.warn("Place details error", json.status, json.error_message);
      return null;
    }
  } catch (err) {
    console.error("Network error fetching place details", err);
    return null;
  }
}

export default function PlacesAutocomplete({
  apiKey,
  onPlaceSelected,
  placeholder = "Search address…",
}: Props) {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 300);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const sessionToken = useRef(Math.random().toString(36).substr(2, 10));

  useEffect(() => {
    async function fetchPredictions() {
      if (!debouncedInput.trim()) {
        setPredictions([]);
        return;
      }
      const qs = new URLSearchParams({
        input: debouncedInput,
        key: apiKey,
        sessiontoken: sessionToken.current,
        types: "(cities)",
        language: "en",
      }).toString();

      try {
        const res = await fetch(
          `https://maps.googleapis.com/maps/api/place/autocomplete/json?${qs}`
        );
        const json = await res.json();

        if (json.status === "OK") {
          setPredictions(json.predictions);
        } else {
          console.warn(
            "Places Autocomplete error",
            json.status,
            json.error_message
          );
          setPredictions([]);
        }
      } catch (err) {
        console.error("Network error fetching predictions", err);
      }
    }
    fetchPredictions();
  }, [debouncedInput, apiKey]);

  const handleSelect = async (pred: Prediction) => {
    setInput(pred.description);
    setPredictions([]);

    const details = await fetchPlaceDetails(apiKey, pred.place_id);
    onPlaceSelected(pred.description, pred.place_id, details);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={input}
        onChangeText={setInput}
        placeholderTextColor={"#D9D2DC"}
      />
      {predictions.length > 0 && (
        <ScrollView style={styles.dropdown}>
          {predictions.map((p) => (
            <TouchableOpacity
              key={p.place_id}
              style={styles.item}
              onPress={() => handleSelect(p)}
            >
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Text
                  className="font-Avenir-regular"
                  style={{ fontSize: scale(15) }}
                >
                  {p.description}
                </Text>
              </ScrollView>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", zIndex: 10, marginBottom: 16, marginTop: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#fff",
    paddingHorizontal: scale(25),
    height: scale(54),
    wordWrap: "wrap",
    fontSize: scale(16),
    color: "#28241C",
    borderRadius: scale(50),
  },
  dropdown: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  item: {
    padding: scale(18),
    flexWrap: "wrap",
    borderBottomWidth: 1,
    borderRadius: scale(50),
    backgroundColor: "#fff",
    borderBottomColor: "#eee",
  },
});
