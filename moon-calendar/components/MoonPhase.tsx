import EmptyFragment from "@/components/EmptyFragment";
import { MOON_PHASE } from "@/constants/Moon";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, Text, View } from "react-native";
import { MoonCalendarDetails } from "../Types";

const MoonPhase = (props: Pick<MoonCalendarDetails, "name">) => {
  const { name } = props;
  const MoonPhaseIcon = MOON_PHASE[name] ?? EmptyFragment;
  return (
    <View className="items-center" style={styles.container}>
      <MoonPhaseIcon />
      <Text
        className="text-white font-Skillet-regular text-center"
        style={styles?.fontStyle}
      >
        {name}
      </Text>
    </View>
  );
};

export default MoonPhase;

const styles = StyleSheet.create({
  container: { marginVertical: scale(30) },
  fontStyle: {
    marginTop: scale(10),
    fontSize: scale(36),
  },
});
