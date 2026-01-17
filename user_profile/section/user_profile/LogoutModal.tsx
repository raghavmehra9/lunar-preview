import LogoutIcon from "@/assets/svg/illustration/LogoutIcon";
import Button from "@/components/form/Button";
import SubHeading from "@/components/form/SubHeading";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { useSession } from "@/context/ctx";
import { scale } from "@/utils/helpers/sizeMatters";
import { Modal, Pressable, StyleSheet, View } from "react-native";

type LogoutModalProps = { isVisible: boolean; onClose: () => void };

const LogoutModal = ({ isVisible, onClose }: LogoutModalProps) => {
  const { signOut } = useSession();
  const handleLogout = () => {
    signOut();
    onClose();
  };
  return (
    <Modal transparent={true} animationType="fade" visible={isVisible}>
      <Pressable style={styles.container} onPress={onClose}>
        <View className="bg-white" style={styles.logoutContainer}>
          <LogoutIcon />
          <SubHeading subHeading="Are you sure you want to logout?" />
          <View className="flex-row justify-between">
            <Button
              title={"Cancel"}
              onPress={onClose}
              isLoading={false}
              isDisabled={false}
              variant={"inline"}
            />
            <Button
              title={"Logout"}
              onPress={handleLogout}
              isLoading={false}
              isDisabled={false}
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

export default LogoutModal;
