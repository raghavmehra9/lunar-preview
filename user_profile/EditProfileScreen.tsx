import useUpdateUserDetails from "@/_hooks/user/useUpdateUserDetails";
import type { FormData as ProfileFormData } from "@/context/editProfileCtx";
import { useEditProfile } from "@/context/editProfileCtx";
import { scale } from "@/utils/helpers/sizeMatters";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackNavigation from "../form/BackNavigation";
import Button from "../form/Button";
import SpaceElement from "../SpaceElement";
import EditFormField from "./section/edit_profile/EditFormField";
import EditProfileSection from "./section/edit_profile/EditProfileSection";
import ProfilePhotoActions from "./section/edit_profile/ProfilePhotoActions";

const EditProfileScreen = () => {
  const {
    formData,
    handleInputChange,
    isPhotoActionsVisible,
    openPhotoActions,
  } = useEditProfile();
  const modifyUserDetails = useUpdateUserDetails();

  const handleSaveChanges = (data: ProfileFormData) => {
    const formDetails = new FormData();
    formDetails.append("name", data?.name);
    if (data?.nick_name) formDetails.append("nick_name", data?.nick_name);
    if (data?.profile_image?.uri) {
      const file = {
        uri: data.profile_image.uri,
        name: "profile_image.jpg",
        type: data.profile_image.type || "image/jpeg",
      };
      formDetails.append("profile_picture", file as any);
    }
    if (data?.profile_image === "") {
      formDetails.append("profile_image", "");
    }
    modifyUserDetails.mutate(formDetails);
  };

  return (
    <View className="flex-1 bg-brand-background">
      <SafeAreaView className="flex-1">
        <View style={{ paddingHorizontal: scale(20) }}>
          <BackNavigation headerName="Edit Profile" />
        </View>
        <ScrollView className="flex-1" style={{ paddingHorizontal: scale(20) }}>
          <EditProfileSection
            onEdit={openPhotoActions}
            source={
              formData?.profile_image
                ? { uri: formData?.profile_image?.uri }
                : undefined
            }
          />
          <EditFormField
            formData={formData}
            handleInputChange={handleInputChange}
            error={modifyUserDetails?.error}
          />
          <SpaceElement spacing={100} />
        </ScrollView>
        <View className="absolute" style={styles.buttonWrapper}>
          <Button
            title="Save Changes"
            onPress={() => handleSaveChanges(formData)}
            isLoading={modifyUserDetails?.isPending}
            isDisabled={modifyUserDetails?.isPending}
            variant="primary"
          />
        </View>
      </SafeAreaView>
      {isPhotoActionsVisible ? <ProfilePhotoActions /> : <></>}
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  buttonWrapper: { bottom: scale(50), alignSelf: "center" },
});
