import { useUserDetails } from "@/_hooks/user/useUserDetails";
import EmptyFragment from "@/components/EmptyFragment";
import { IndividualPlans } from "@/components/purchase/Types";
import { ZodiacSignTypes } from "@/components/register/Types";
import { PROFILE_ZODIAC_SIGNS } from "@/constants/ProfileZodiacSign";
import { useNotification } from "@/context/notificationContext";
import { requestLocationPermission } from "@/utils/helpers/requestLocationPermission";
import { scale } from "@/utils/helpers/sizeMatters";
import { router } from "expo-router";
import React, { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface SignCardProps {
  children: ReactNode;
  route?: IndividualPlans;
}

interface SignNameProps {
  signName: ZodiacSignTypes;
}

interface SignTypeProps {
  type: "Moon" | "Ascendant";
}

interface SignIconProps {
  icon: ZodiacSignTypes;
}

const SignCard: React.FC<SignCardProps> & {
  Name: React.FC<SignNameProps>;
  Type: React.FC<SignTypeProps>;
  Icon: React.FC<SignIconProps>;
} = ({ children, route }) => {
  const userDetails = useUserDetails();
  const { showNotification } = useNotification();

  const handleIndividualPlans = async (individualService: IndividualPlans) => {
    const isGranted = await requestLocationPermission();

    if (isGranted) {
      if (
        individualService === "moon-sign" &&
        userDetails?.data?.plans?.moon_sign_enabled
      ) {
        router.push("/(app)/reports/moon");
      } else if (
        individualService === "ascendent-report" &&
        userDetails?.data?.plans?.ascendent_report_enabled
      ) {
        router.push("/(app)/reports/ascendant");
      } else {
        router.push({
          pathname: "/(app)/purchase/plans",
          params: {
            service: individualService,
          },
        });
      }
    } else {
      showNotification("Location not enabled", "error");
      return;
    }
  };

  return (
    <TouchableOpacity
      onPress={() => route && handleIndividualPlans(route)}
      activeOpacity={route ? 0.9 : 1}
      style={styles.card}
    >
      {children}
    </TouchableOpacity>
  );
};

SignCard.Name = ({ signName }: SignNameProps) => (
  <Text
    className="font-Skillet-regular text-brand-primary"
    style={styles.signName}
  >
    {signName}
  </Text>
);

SignCard.Type = ({ type }: SignTypeProps) => (
  <Text className="font-Avenir-book" style={styles.signType}>
    Your {type} Sign
  </Text>
);

SignCard.Icon = ({ icon }: SignIconProps) => {
  const ZodiacSign = PROFILE_ZODIAC_SIGNS[icon] ?? EmptyFragment;
  return <ZodiacSign height={scale(36)} width={scale(36)} />;
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    paddingVertical: scale(12),
    paddingHorizontal: scale(10),
    borderRadius: scale(6),
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  signName: {
    fontSize: scale(22),
  },
  signType: {
    fontSize: scale(10),
  },
});

export default SignCard;
