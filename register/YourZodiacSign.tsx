import useAscendantSign from "@/_hooks/auth/useAscendantSign";
import useMoonSign from "@/_hooks/auth/useMoonSign";
import SignRevealCloud from "@/assets/svg/cloud/SignRevealCloud";
import SignRevealCloud2 from "@/assets/svg/cloud/SignRevealCloud2";
import { useSession } from "@/context/ctx";
import { scale } from "@/utils/helpers/sizeMatters";
import { router, useGlobalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyFragment from "../EmptyFragment";
import ErrorScreen from "../ErrorScreen";
import Button from "../form/Button";
import LoadingScreen from "../LoadingScreen";
import SpaceElement from "../SpaceElement";
import AstrologySign from "./components/AstrologySign";

const YourZodiacSign = () => {
  const moonSign = useMoonSign();
  const userAscendantSign = useAscendantSign();

  const { userOnboard } = useGlobalSearchParams();
  const { signIn, session } = useSession();

  const moonSignReport = moonSign?.data;
  const ascendantSignReport = userAscendantSign?.data;
  useEffect(() => {
    signIn({
      ...session,
      isUserOnboarded: userOnboard?.isUserOnboarded || true,
    });
  }, []);

  if (moonSign?.isLoading && userAscendantSign?.isLoading) {
    return <LoadingScreen />;
  }

  if (moonSign?.isError && userAscendantSign?.isError) {
    return <ErrorScreen />;
  }

  return (
    <View
      className="flex-1"
      style={{ backgroundColor: "rgba(136, 61, 133, 1)" }}
    >
      <SafeAreaView className="flex-1">
        <ScrollView
          contentContainerClassName="items-center"
          showsVerticalScrollIndicator={false}
        >
          <View className="absolute top-36 gap-10 ps-6">
            <SignRevealCloud />
            <SignRevealCloud2 />
          </View>

          <View style={styles?.safeAreaStyle}>
            {moonSignReport?.moon_sign ? (
              <AstrologySign type="Moon" heading={moonSignReport?.moon_sign} />
            ) : (
              <EmptyFragment />
            )}

            {ascendantSignReport?.ascendent_sign ? (
              <AstrologySign
                type="Ascendant"
                heading={ascendantSignReport?.ascendent_sign}
              />
            ) : (
              <EmptyFragment />
            )}
          </View>

          <Button
            title={"Next"}
            onPress={() => {
              router.push("/(app)/sign-confirmation");
            }}
            isLoading={moonSign?.isLoading && userAscendantSign?.isLoading}
            parentClass="w-2/5"
            isDisabled={moonSign?.isLoading && userAscendantSign?.isLoading}
            variant={"white"}
          />
          <SpaceElement spacing={20} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaStyle: {
    gap: scale(40),
    marginTop: scale(28),
    marginBottom: scale(30),
  },
});

export default YourZodiacSign;
