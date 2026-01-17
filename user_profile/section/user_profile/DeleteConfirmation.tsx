import LogoutIcon from "@/assets/svg/illustration/LogoutIcon";
import Button from "@/components/form/Button";
import SubHeading from "@/components/form/SubHeading";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { Modal, Pressable, StyleSheet, View } from "react-native";

type DeleteConfirmationProps = {
  isVisible: boolean;
  onClose: () => void;
  isLoading: boolean;
  confirmation: () => void;
};

const DeleteConfirmationModal = ({
  isVisible,
  onClose,
  isLoading,
  confirmation,
}: DeleteConfirmationProps) => {
  return (
    <Modal transparent={true} animationType="fade" visible={isVisible}>
      <Pressable style={styles.container} onPress={onClose}>
        <View className="bg-white" style={styles.logoutContainer}>
          <LogoutIcon />
          <SubHeading subHeading="Are you sure you want to delete the account?" />
          <View className="flex-row justify-between">
            <Button
              title={"No"}
              onPress={onClose}
              isLoading={false}
              isDisabled={false}
              variant={"inline"}
            />
            <Button
              title={"Yes"}
              onPress={confirmation}
              isLoading={isLoading}
              isDisabled={isLoading}
              variant={"primary"}
            />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(73, 39, 71, 0.40)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: SCREEN_WIDTH,
    paddingVertical: scale(20),
    backgroundColor: "white",
    borderRadius: scale(20),
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  logoutContainer: {
    gap: scale(30),
    padding: scale(20),
    borderRadius: scale(20),
  },
});

export default DeleteConfirmationModal;
