import BottomLuckyCard from "@/assets/svg/get-lucky/BottomLuckyCard";
import Gem from "@/assets/svg/get-lucky/Gem";
import Jar from "@/assets/svg/get-lucky/Jar";
import Button from "@/components/form/Button";
import Heading from "@/components/form/Heading";
import SubHeading from "@/components/form/SubHeading";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { useNotification } from "@/context/notificationContext";
import { requestLocationPermission } from "@/utils/helpers/requestLocationPermission";
import { scale } from "@/utils/helpers/sizeMatters";
import { router } from "expo-router";
import { View } from "react-native";

const GetLuckyCard = () => {
  const { showNotification } = useNotification();
  const handlePress = async () => {
    const isGranted = await requestLocationPermission();

    if (isGranted) {
      router.push("/get-lucky");
    } else {
      showNotification("Location not enabled", "error");
      return;
    }
  };
  return (
    <View
      style={{
        marginTop: scale(15),
        width: SCREEN_WIDTH - scale(40),
        borderRadius: scale(20),
        paddingHorizontal: scale(20),
        paddingTop: scale(30),
      }}
      className="bg-pink-pinkLace"
    >
      <Heading
        heading="Seize The Day"
        style={{
          fontSize: scale(34),
          lineHeight: scale(34),
        }}
      />
      <SubHeading
        subHeading="See what’s driving your day today"
        className="text-purple-deepPurple"
        style={{
          fontSize: scale(12),
          lineHeight: scale(18),
          marginTop: scale(10),
        }}
      />
      <View className="absolute top-36 left-0">
        <Jar height={scale(70)} width={scale(45)} />
      </View>
      <View>
        <Button
          title={"Dive Into Your Day →"}
          onPress={handlePress}
          parentClass="mx-10 my-10 px-2"
          textStyle={{ fontSize: scale(14) }}
          isLoading={false}
          isDisabled={false}
          variant={"primary"}
        />
      </View>
      <View className="absolute top-52 right-0">
        <Gem />
      </View>

      <View className="items-center justify-center">
        <BottomLuckyCard width={scale(251)} />
      </View>
    </View>
  );
};

export default GetLuckyCard;
