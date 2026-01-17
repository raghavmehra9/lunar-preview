import EditProfileScreen from "@/components/user_profile/EditProfileScreen";
import { EditProfileProvider } from "@/context/editProfileCtx";

const EditProfile = () => {
  return (
    <EditProfileProvider>
      <EditProfileScreen />
    </EditProfileProvider>
  );
};

export default EditProfile;
