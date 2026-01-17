import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

import { scale } from "@/utils/helpers/sizeMatters";
import ProfileCard from "../../components/ProfileCard";
import { useUserDetails } from "@/_hooks/user/useUserDetails";

const ProfileSection = () => {
  const userDetails = useUserDetails();
  const handleEditProfile = () => {
    router.push("/(app)/user-profile/edit-profile");
  };

  return (
    <ProfileCard>
      <ProfileCard.Image
        source={
          userDetails?.data?.profile_image
            ? { uri: userDetails.data.profile_image }
            : undefined
        }
      />
      <View style={{ flex: 0.9 }}>
        <ProfileCard.Name userName={userDetails?.data?.name || ""} />
        <ProfileCard.Email userEmail={userDetails?.data?.email || ""} />
        <View style={styles?.buttonWrapper}>
          <ProfileCard.Button
            buttonText="Edit Profile"
            onPress={handleEditProfile}
          />
        </View>
      </View>
    </ProfileCard>
  );
};

export default ProfileSection;

const styles = StyleSheet.create({
  buttonWrapper: { marginTop: scale(14) },
});
