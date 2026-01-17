import Button from "@/components/form/Button";
import { SCREEN_HEIGHT } from "@/constants/Spacing";
import { View } from "react-native";

type ContinueButtonProps = {
  currentIndex: number;
  total: number;
  onPress: () => void;
};

export default function ContinueButton({
  currentIndex,
  total,
  onPress,
}: ContinueButtonProps) {
  return (
    <View
      style={{
        position: "absolute",
        bottom: SCREEN_HEIGHT * 0.24,
        alignSelf: "center",
        width: "50%",
      }}
    >
      <Button
        title={currentIndex === total - 1 ? "Get Started" : "Continue"}
        onPress={onPress}
      />
    </View>
  );
}
