import LeftArrow from "@/assets/svg/arrow/LeftArrow";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import React from "react";
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from "react-native";

interface InfoPopupProps {
  visible: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const InfoPopup: React.FC<InfoPopupProps> = ({
  visible,
  onClose,
  children,
  title = "Information",
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.popupContainer}>
          <View style={styles.contentWrapper}>
            <Image
              style={styles.illustrator}
              source={require("@/assets/images/common/info-illustrator.png")}
            />
            <TouchableOpacity
              className="flex-row items-center gap-6 self-start py-4"
              onPress={onClose}
            >
              <LeftArrow color="white" />
              <Text
                className="font-Avenir-regular text-white"
                style={styles.modalTitle}
              >
                {title}
              </Text>
            </TouchableOpacity>
            <ScrollView
              style={styles.scrollView}
              contentContainerClassName="pb-10"
            >
              {children}
            </ScrollView>
          </View>
          <TouchableOpacity
            onPress={onClose}
            className="bg-orange-topaz p-4 self-center rounded-lg mt-2.5"
          >
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  popupContainer: {
    width: "200%",
    height: "85%",
    backgroundColor: "#884770",
    padding: 20,
    borderRadius: 10,
    borderTopStartRadius: "50%",
    borderTopEndRadius: "50%",
    alignItems: "center",
  },
  contentWrapper: {
    width: SCREEN_WIDTH,
    paddingHorizontal: scale(20),
  },
  closeText: {
    color: "white",
    fontWeight: "bold",
  },
  modalTitle: {
    fontSize: scale(20),
    lineHeight: scale(30),
  },
  scrollView: {
    backgroundColor: "white",
    padding: scale(30),
    borderRadius: scale(15),
    height: scale(SCREEN_HEIGHT / 2.6),
  },
  illustrator: {
    alignSelf: "center",
    marginTop: scale(-75),
    width: scale(200),
    height: scale(200),
  },
});

export default React.memo(InfoPopup);
