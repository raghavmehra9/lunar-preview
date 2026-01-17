import { scale } from "@/utils/helpers/sizeMatters";
import { View } from "react-native";

const SpaceElement = ({ spacing }: { spacing: number }) => {
  const spacingElement = {
    paddingBottom: scale(spacing),
  };
  return <View style={spacingElement} />;
};

export default SpaceElement;
