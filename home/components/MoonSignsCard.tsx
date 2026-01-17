import { Text, View } from "react-native";
import React from "react";

interface MoonSignProps {
  children: React.ReactNode;
}

const MoonSignsCard: React.FC<MoonSignProps> = ({ children }) => {
  return (
    <View>
      <Text>MoonSignsCard</Text>
      {children}
    </View>
  );
};

export default MoonSignsCard;
