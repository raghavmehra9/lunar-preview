import BrokenComputer from "@/assets/svg/BrokenComputer";
import AppBackground from "@/components/common/AppBackground";
import Button from "@/components/form/Button";
import Heading from "@/components/form/Heading";
import SubHeading from "@/components/form/SubHeading";
import { useSession } from "@/context/ctx";
import { scale } from "@/utils/helpers/sizeMatters";
import { router } from "expo-router";
import { View } from "react-native";

const ServerError = () => {
  const { session } = useSession();
  return (
    <AppBackground>
      <View
        className="flex-1 justify-center items-center"
        style={{ gap: scale(10) }}
      >
        <BrokenComputer />
        <View>
          <Heading heading="500" style={{ fontSize: scale(42) }} />
          <SubHeading
            subHeading="Internal server error"
            style={{ fontSize: scale(20) }}
          />
          <SubHeading
            subHeading="We're preparing to serve you better"
            style={{ fontSize: scale(16) }}
          />
          <Button
            title={"Retry"}
            onPress={() => {
              if (session && session.token) {
                router.replace("/(app)");
              } else {
                router.replace("/(auth)/signup");
              }
            }}
          />
        </View>
      </View>
    </AppBackground>
  );
};

export default ServerError;
