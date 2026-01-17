import { SCREEN_WIDTH } from "@/constants/Spacing";
import { useEditProfile } from "@/context/editProfileCtx";
import { scale } from "@/utils/helpers/sizeMatters";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import * as FileSystem from "expo-file-system";
import * as ImageManipulator from "expo-image-manipulator";

const ProfilePhotoActions = () => {
  const { isPhotoActionsVisible, closePhotoActions, handleInputChange } =
    useEditProfile();
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  async function captureImage() {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Camera permission is required to take a photo");
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 0.8,
        aspect: [1, 1],
        cameraType: ImagePicker.CameraType.front,
      });

      if (result.canceled || !result.assets || result.assets.length === 0) {
        return;
      }

      let imageUri = result.assets[0].uri;

      // ✅ Flip image horizontally if using front camera
      const manipulated = await ImageManipulator.manipulateAsync(
        imageUri,
        [{ flip: ImageManipulator.FlipType.Horizontal }],
        { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
      );

      const uri = {
        uri: manipulated.uri,
        type: result.assets[0].mimeType || "image/jpeg",
        name: "ProfileImage.jpg",
      };

      const fileInfo = await FileSystem.getInfoAsync(uri.uri);
      const fileSizeInKB = fileInfo?.size / 1024;

      if (fileSizeInKB > 10240) {
        alert(
          "Selected image is larger than 10MB. Please choose a smaller image."
        );
        return;
      }

      handleInputChange(uri, "profile_image");
    } catch (error) {
      alert("Failed to capture image");
    } finally {
      closePhotoActions();
    }
  }

  async function pickImage() {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Gallery permission is required to select a photo");
        return;
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 0.8,
        aspect: [1, 1],
      });

      if (result.canceled || !result.assets || result.assets.length === 0) {
        return;
      }

      const uri = {
        uri: result.assets[0].uri,
        type: result.assets[0].mimeType,
        name: "ProfileImage.jpg",
      };
      const fileInfo = await FileSystem.getInfoAsync(uri.uri);
      const fileSizeInKB = fileInfo?.size / 1024;

      if (fileSizeInKB > 10240) {
        alert(
          "Selected image is larger than 10MB. Please choose a smaller image."
        );
        return;
      }
      handleInputChange(uri, "profile_image");
    } catch (error) {
      alert("Failed to select image");
    } finally {
      closePhotoActions();
    }
  }

  function handleDelete() {
    handleInputChange("", "profile_image");
    setDeleteModalVisible(false);
    closePhotoActions();
  }

  return (
    <>
      {isDeleteModalVisible ? (
        <Modal
          transparent={true}
          animationType="slide"
          visible={isDeleteModalVisible}
          onRequestClose={() => setDeleteModalVisible(false)}
        >
          <View style={styles.deleteContainer}>
            <View style={styles.deleteModal}>
              <Text style={styles.deleteText}>
                Are you sure you want to delete your profile photo?
              </Text>
              <View style={styles.deleteActions}>
                <Pressable onPress={() => setDeleteModalVisible(false)}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </Pressable>
                <Pressable onPress={handleDelete}>
                  <Text style={styles.deleteButton}>Delete</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      ) : (
        <Modal
          transparent={true}
          animationType="slide"
          visible={isPhotoActionsVisible}
          onRequestClose={closePhotoActions}
        >
          <Pressable style={styles.container} onPress={closePhotoActions}>
            <View style={styles.modal}>
              <Pressable style={styles.actionItem} onPress={captureImage}>
                <Text
                  className="font-Avenir-regular text-purple-jacarta"
                  style={styles.actionText}
                >
                  Take Photo
                </Text>
              </Pressable>
              <View style={styles.divider} />
              <Pressable style={styles.actionItem} onPress={pickImage}>
                <Text
                  className="font-Avenir-regular text-purple-jacarta"
                  style={styles.actionText}
                >
                  Upload Profile Photo
                </Text>
              </Pressable>
              <View style={styles.divider} />
              <Pressable
                style={styles.actionItem}
                onPress={() => {
                  setDeleteModalVisible(true);
                }}
              >
                <Text
                  className="font-Avenir-regular text-purple-jacarta"
                  style={styles.actionText}
                >
                  Delete Profile Photo
                </Text>
              </Pressable>
            </View>
          </Pressable>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(73, 39, 71, 0.40)",
    justifyContent: "flex-end",
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
  actionItem: {
    paddingVertical: scale(20),
    paddingHorizontal: scale(20),
  },
  actionText: {
    fontSize: scale(16),
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 20,
  },

  deleteContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  deleteModal: {
    width: SCREEN_WIDTH * 0.8,
    padding: scale(20),
    backgroundColor: "white",
    borderRadius: scale(10),
    alignItems: "center",
  },
  deleteText: {
    fontSize: scale(16),
    marginBottom: scale(20),
    textAlign: "center",
  },
  deleteActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelText: {
    fontSize: scale(16),
    color: "gray",
  },
  deleteButton: {
    fontSize: scale(16),
    color: "red",
  },
});

export default ProfilePhotoActions;
