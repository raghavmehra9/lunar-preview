import Cross from "@/assets/svg/common/Cross";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/Spacing";
import commonStyles from "@/styles/commonStyle";
import encryptObjectId from "@/utils/helpers/encrypt";
import { scale } from "@/utils/helpers/sizeMatters";
import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { WebView } from "react-native-webview";

const WebViewModal = ({
  closeModal,
  link,
}: {
  closeModal: () => void;
  link: string;
}) => {
  return (
    <Modal transparent={true} animationType="slide" visible={true}>
      <Pressable style={styles.container} onPress={closeModal} />
      <View style={styles.modal}>
        <TouchableOpacity
          onPress={closeModal}
          className="absolute bg-white rounded-full"
          style={styles.closeStyle}
        >
          <Cross width={scale(18)} height={scale(18)} />
        </TouchableOpacity>
        <WebView
          source={{
            uri: link,
          }}
          showsVerticalScrollIndicator={false}
          style={commonStyles.container}
        />
      </View>
    </Modal>
  );
};

export default WebViewModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(73, 39, 71, 0.40)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modal: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 1.2,
    paddingVertical: scale(20),
    backgroundColor: "white",
    borderRadius: scale(20),
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  closeStyle: {
    padding: scale(15),
    top: scale(-20),
    left: "50%",
    transform: [{ translateX: -25 }],
  },
});
