import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ConsultationType } from "../../Types";

type TabSwitcherProps = {
  active: ConsultationType;
  setActive: (value: ConsultationType) => void;
};

const TabSwitcher = ({ active, setActive }: TabSwitcherProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        className="rounded-full"
        style={[
          styles.button,
          active === "scheduledBookings" && styles.activeButton,
        ]}
        onPress={() => setActive("scheduledBookings")}
      >
        <Text
          className="font-Avenir-regular"
          style={[
            styles.text,
            active === "scheduledBookings" && styles.activeText,
          ]}
        >
          Scheduled
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="rounded-full"
        style={[
          styles.button,
          active === "pastBookings" && styles.activeButton,
        ]}
        onPress={() => setActive("pastBookings")}
      >
        <Text
          className="font-Avenir-regular"
          style={[styles.text, active === "pastBookings" && styles.activeText]}
        >
          Past
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: scale(10),
    padding: scale(20),
    alignSelf: "center",
    gap: scale(10),
  },
  button: {
    flex: 1,
    paddingVertical: scale(14),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#883D85",
  },
  activeButton: {
    backgroundColor: "#883D85",
    borderColor: "#883D85",
  },
  text: {
    fontSize: scale(14),
    color: "#883D85",
  },
  activeText: {
    color: "#ffffff",
  },
});

export default TabSwitcher;
