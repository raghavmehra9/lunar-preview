import RegisterCloud from "@/assets/svg/cloud/RegisterCloud";
import { ScrollView, View } from "react-native";
import SubHeading from "../form/SubHeading";
import HorizontalZodiacAnimate from "../register/HorizontalZodiaAnimate";
import RegisterForm from "./components/RegisterForm";

const OnboardingScreen = () => {
  return (
    <View className="pb-6">
      <View className="absolute top-16">
        <RegisterCloud />
      </View>

      <ScrollView
        contentContainerClassName="justify-center gap-16 "
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className="mt-16">
          <SubHeading subHeading="Now that you know about Lunar" />
          <SubHeading subHeading="Let's find out what Lunar holds for you" />
        </View>

        <HorizontalZodiacAnimate />
        <RegisterForm />
      </ScrollView>
    </View>
  );
};

export default OnboardingScreen;
