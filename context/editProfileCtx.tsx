import { useUserDetails } from "@/_hooks/user/useUserDetails";
import React, { createContext, useContext, useState } from "react";

export interface FormData {
  _id?: string;
  name: string;
  nick_name: string;
  email: string;
  birth_date: string;
  birth_location: string;
  birth_time: string;
  profile_image?:
    | {
        uri: string;
        type: string;
        name: string;
      }
    | string;
  is_user_onboarded: boolean;
}

interface EditProfileContextType {
  formData: FormData;
  handleInputChange: (
    value: string | { uri: string; type: string | undefined; name: string },
    name?: string
  ) => void;
  openPhotoActions: () => void;
  closePhotoActions: () => void;
  isPhotoActionsVisible: boolean;
}

const FORM_DATA = {
  name: "",
  nick_name: "",
  email: "",
  birth_date: "",
  birth_location: "",
  birth_time: "",
  profile_image: undefined,
  is_user_onboarded: false,
};

const EditProfileContext = createContext<EditProfileContextType>({
  formData: FORM_DATA,
  handleInputChange: () => {},
  openPhotoActions: () => {},
  closePhotoActions: () => {},
  isPhotoActionsVisible: false,
});

export const EditProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const userDetails = useUserDetails();
  console.log("first userDetails?.data?.profile_image");
  const userData = userDetails?.data;
  const [formData, setFormData] = useState<FormData>({
    name: userData?.name || "",
    nick_name: userData?.nick_name || "",
    email: userData?.email || "",
    birth_date: userData?.birth_date || "",
    birth_location: userData?.birth_location || "",
    birth_time: userData?.birth_time || "",
    profile_image: userData?.profile_image
      ? {
          uri: userData?.profile_image,
          name: "Profile.jpg",
          type: "image/jpeg",
        }
      : undefined,
    is_user_onboarded: userData?.is_user_onboarded || false,
    _id: userData?._id,
  });

  const handleInputChange = (
    value: string | { uri: string; type: string | undefined; name: string },
    name?: string
  ) => {
    if (name) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const [isPhotoActionsVisible, setPhotoActionsVisible] = useState(false);
  const openPhotoActions = () => setPhotoActionsVisible(true);
  const closePhotoActions = () => setPhotoActionsVisible(false);

  return (
    <EditProfileContext.Provider
      value={{
        formData,
        handleInputChange,
        openPhotoActions,
        closePhotoActions,
        isPhotoActionsVisible,
      }}
    >
      {children}
    </EditProfileContext.Provider>
  );
};

export const useEditProfile = () => {
  const context = useContext(EditProfileContext);
  if (!context) {
    throw new Error(
      "useEditProfile must be used within an EditProfileProvider"
    );
  }
  return context;
};
