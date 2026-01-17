import { Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InfoPopup from "./InfoPopup";
import Info from "@/assets/svg/Info";

interface PropsTypes {
  title?: string;
  children?: React.ReactNode;
  infoColor?: "#883D85" | "white";
}

const InfoModalBtn = ({
  children,
  title = "Information",
  infoColor = "white",
}: PropsTypes) => {
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);
  return (
    <>
      <TouchableOpacity onPress={() => setPopupVisible(true)}>
        <Info color={infoColor} />
      </TouchableOpacity>
      <InfoPopup
        visible={isPopupVisible}
        title={title}
        onClose={() => setPopupVisible(false)}
      >
        {children}
      </InfoPopup>
    </>
  );
};

export default InfoModalBtn;
