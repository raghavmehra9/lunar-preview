import { StyleSheet, View } from "react-native";
import LinkButton from "../form/LinkButton";
import Button from "../form/Button";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";

interface StickyButtonProps {
  handleSkip: () => void;
  handleNext: () => void;
  linkTitle?: string;
  buttonTitle?: string;
  buttonLoading?: boolean;
}

const StickyButton = (props: StickyButtonProps) => {
  const {
    handleSkip,
    handleNext,
    linkTitle = "Skip",
    buttonTitle = "Next",
    buttonLoading = false,
  } = props;
  return (
    <View
      className="flex-row items-center justify-between"
      style={styles.buttonContainer}
    >
      <LinkButton title={linkTitle} onPress={handleSkip} variant={"primary"} />
      <Button
        title={buttonTitle}
        onPress={handleNext}
        isLoading={buttonLoading}
        isDisabled={buttonLoading}
        variant={"primary"}
      />
    </View>
  );
};

export default StickyButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: SCREEN_WIDTH - scale(40),
    marginBottom: scale(10),
  },
});
