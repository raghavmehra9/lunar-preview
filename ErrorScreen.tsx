import ErrorGalaxy from "@/assets/svg/ErrorGalaxy";
import { scale } from "@/utils/helpers/sizeMatters";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import AppBackground from "./common/AppBackground";
import Button from "./form/Button";
import Heading from "./form/Heading";
import SubHeading from "./form/SubHeading";
import { SafeAreaView } from "react-native-safe-area-context";

const ErrorScreen = () => {
  return (
    <AppBackground scrollable={true}>
      <View className="flex-1">
        <SafeAreaView className="flex-1 items-center justify-center">
          <ErrorGalaxy />
          <Heading heading="Lost in the Cosmic Void!" />
          <SubHeading
            subHeading="Even the universe has glitches sometimes. Let’s find our way back!"
            style={styles.subheading}
          />
          <View style={{ marginTop: scale(20) }}>
            <Button
              title="Back to home"
              onPress={() => {
                router.replace("/(app)/(tabs)");
              }}
              isLoading={false}
              isDisabled={false}
              variant="primary"
            />
          </View>
        </SafeAreaView>
      </View>
    </AppBackground>
  );
};

export default ErrorScreen;

const styles = StyleSheet.create({
  subheading: {
    marginTop: scale(10),
  },
});
