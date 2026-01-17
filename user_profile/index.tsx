import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import StoneGroup from "@/assets/svg/common/StoneGroup";
import { useUserDetails } from "@/_hooks/user/useUserDetails";
import { scale } from "@/utils/helpers/sizeMatters";
import { ZodiacSignTypes } from "../register/Types";
import AccordionSection from "./section/user_profile/AccordionSection";
import ProfileSection from "./section/user_profile/ProfileSection";
import SignSection from "./section/user_profile/SignSection";

const UserProfileScreen = () => {
  const userDetails = useUserDetails();
  const signData: Record<"moonSign" | "ascendantSign", ZodiacSignTypes> = {
    moonSign: userDetails?.data?.moon_sign || "Aries",
    ascendantSign: userDetails?.data?.ascendent_sign || "Aries",
  };

  return (
    <View className="flex-1">
      <SafeAreaView className="flex-1 bg-brand-background" edges={["top"]}>
        <ScrollView
          style={styles?.safeAreaWrapper}
          contentContainerStyle={{ paddingBottom: scale(35) }}
          showsVerticalScrollIndicator={false}
        >
          <ProfileSection />
          <SignSection
            data={signData}
            moonRoute="moon-sign"
            ascendantRoute="ascendent-report"
          />
          <AccordionSection />
          <StoneGroup width={scale(320)} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  safeAreaWrapper: {
    paddingHorizontal: scale(20),
  },
});
