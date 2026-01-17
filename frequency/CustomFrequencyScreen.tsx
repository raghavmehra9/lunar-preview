import RegisterCloud from "@/assets/svg/cloud/RegisterCloud";
import commonStyles from "@/styles/commonStyle";
import { scale } from "@/utils/helpers/sizeMatters";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import Heading from "../form/Heading";
import SubHeading from "../form/SubHeading";
import CustomFrequencyForm from "./components/CustomFrequencyForm";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../form/Button";
import { router } from "expo-router";
import BackNavigation from "../form/BackNavigation";

const CustomFrequencyScreen = () => {
  return (
    <View className="flex-1 bg-brand-background">
      <SafeAreaView className="flex-1 items-center">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={commonStyles.container}
        >
          <View>
            <View className="absolute top-16">
              <RegisterCloud />
            </View>

            <View style={commonStyles.screenContainer}>
              <BackNavigation headerName="Back" />
            </View>

            <ScrollView
              contentContainerClassName="gap-16 "
              keyboardShouldPersistTaps="handled"
            >
              <View
                style={{ paddingHorizontal: scale(20), marginTop: scale(20) }}
              >
                <Heading
                  heading="Create Your Own Custom Frequency"
                  className="text-purple-deepPurple"
                  style={{
                    fontSize: scale(36),
                    lineHeight: scale(28),
                    marginBottom: scale(10),
                  }}
                />
                <SubHeading
                  subHeading="Want a personalized frequency based on Vedic astrology? Fill in the details below, and we’ll craft it just for you! 🔮"
                  style={{ fontSize: scale(14) }}
                />
              </View>

              <CustomFrequencyForm />
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default CustomFrequencyScreen;
