import AppBackground from "@/components/common/AppBackground";
import Button from "@/components/form/Button";
import Heading from "@/components/form/Heading";
import SubHeading from "@/components/form/SubHeading";
import { scale } from "@/utils/helpers/sizeMatters";
import { router } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Success = () => {
  return (
    <SafeAreaView className="flex-1">
      <AppBackground>
        <View className="flex-1 justify-center items-center">
          <View style={{ gap: scale(0) }}>
            <Heading
              heading="Awesome !"
              style={{ fontSize: scale(46), lineHeight: scale(40) }}
            />
            <SubHeading
              style={{ paddingHorizontal: scale(43) }}
              subHeading={`Your frequency is being set up. Hang tight—it's on its way and will reach you shortly!`}
            />
          </View>
          <View className="absolute bottom-10">
            <Button
              title="Listen to other frequencies"
              onPress={() => router.replace("/(app)/frequency")}
              isLoading={false}
              isDisabled={false}
              variant="primary"
            />
          </View>
        </View>
      </AppBackground>
    </SafeAreaView>
  );
};

export default Success;
