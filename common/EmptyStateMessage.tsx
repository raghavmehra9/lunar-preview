import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, View } from "react-native";
import Button from "../form/Button";
import Heading from "../form/Heading";
import SubHeading from "../form/SubHeading";

interface EmptyStateProps {
  title: string;
  description: string;
  buttonText?: string;
  onButtonPress?: () => void;
}

const EmptyStateMessage = ({
  title,
  description,
  buttonText,
  onButtonPress,
}: EmptyStateProps) => {
  return (
    <View style={styles.emptyContainer}>
      <View style={styles.content}>
        <Heading
          heading={title}
          className="font-Skillet-regular"
          style={styles.heading}
        />
        <SubHeading subHeading={description} style={styles.subheading} />
      </View>
      {buttonText && onButtonPress && (
        <Button
          title={buttonText}
          onPress={onButtonPress}
          isLoading={false}
          isDisabled={false}
          variant="primary"
          parentClass="self-center"
        />
      )}
    </View>
  );
};

export default EmptyStateMessage;

const styles = StyleSheet.create({
  emptyContainer: { gap: scale(20) },
  content: { gap: scale(10) },
  heading: { fontSize: scale(32), lineHeight: scale(28) },
  subheading: { fontSize: scale(12) },
});
