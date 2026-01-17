import useCreateManifestation from "@/_hooks/astro-service/useCreateManifestation";
import useUpdateContentManifestation from "@/_hooks/astro-service/useUpdateContentManifestation";
import useUpdateReleaseManifestation from "@/_hooks/astro-service/useUpdateReleaseManifestation";
import PencilIcon from "@/assets/svg/common/PencilIcon";
import ServiceStars from "@/assets/svg/purchase/ServiceStars";
import Button from "@/components/form/Button";
import commonStyles from "@/styles/commonStyle";
import { scale } from "@/utils/helpers/sizeMatters";
import { useEffect, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const ManifestationBox = ({ id = "", content = "" }) => {
  const [manifestationId, setManifestationId] = useState(id || null);
  const [isEditing, setIsEditing] = useState(content === "");
  const [manifestation, setManifestation] = useState(content);
  const maxChars = 140;

  const manifestationProps = {
    onSetManifestationId: setManifestationId,
    onToggleEditMode: setIsEditing,
  };

  const createManifestation = useCreateManifestation(manifestationProps);
  const updateContentManifestation =
    useUpdateContentManifestation(manifestationProps);
  const updateReleaseManifestation =
    useUpdateReleaseManifestation(manifestationProps);

  useEffect(() => {
    setManifestationId(id || null);
  }, [id]);

  const handleSave = () => {
    if (manifestation.trim() === "") return;
    Keyboard.dismiss();
    setIsEditing(false);

    if (manifestationId) {
      updateContentManifestation.mutate({
        id: manifestationId,
        content: manifestation,
      });
    } else {
      createManifestation.mutate(manifestation);
    }
  };

  const handleRelease = () => {
    if (manifestation.trim() === "") return;
    Keyboard.dismiss();
    setIsEditing(false);

    if (manifestationId) {
      updateReleaseManifestation.mutate(manifestationId);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={commonStyles.container}>
        <View className="bg-pink-pinkSherbet" style={styles.container}>
          {isEditing ? (
            <>
              <Text
                className="font-Skillet-regular text-white"
                style={styles.heading}
              >
                It’s almost new moon!{"\n"}Save your manifestation below
              </Text>
              <TextInput
                multiline
                numberOfLines={3}
                style={styles.inputStyle}
                placeholder="Type your manifestation here"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                className="w-full bg-white font-Avenir-light"
                value={manifestation}
                onChangeText={setManifestation}
                maxLength={maxChars}
              />
              <Text style={styles.charCount}>
                {manifestation.length}/{maxChars}
              </Text>
              <ManifestationButton
                onPress={handleSave}
                title="Save"
                isLoading={
                  createManifestation.isPending ||
                  updateContentManifestation.isPending
                }
                disabled={
                  createManifestation.isPending ||
                  updateContentManifestation.isPending ||
                  !manifestation.trim()
                }
              />
            </>
          ) : manifestation ? (
            <>
              <View className="flex-row items-center justify-between">
                <Text
                  className="font-Skillet-regular text-white"
                  style={styles.heading}
                >
                  Release & Reflect
                </Text>
                <TouchableOpacity onPress={() => setIsEditing(true)}>
                  <PencilIcon width={15} height={15} />
                </TouchableOpacity>
              </View>
              <View style={styles.manifestationBox}>
                <Text
                  className="font-Avenir-heavy text-white text-center"
                  style={styles.manifestationText}
                >
                  {manifestation}
                </Text>
              </View>
              <ManifestationButton
                onPress={handleRelease}
                title="Release"
                isLoading={updateReleaseManifestation.isPending}
                disabled={updateReleaseManifestation.isPending}
              />
            </>
          ) : (
            <>
              <Text
                className="font-Skillet-regular text-white text-center"
                style={styles.heading}
              >
                No manifestation added. Tap the ✏️ to add one!
              </Text>
              <TouchableOpacity
                onPress={() => setIsEditing(true)}
                style={styles.emptyStateBox}
              >
                <Text className="text-white text-center font-Avenir-light">
                  Tap here to add your manifestation
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const ManifestationButton = ({
  title,
  isLoading,
  disabled,
  onPress,
}: {
  title: string;
  isLoading: boolean;
  disabled: boolean;
  onPress: () => void;
}) => (
  <View style={styles.buttonContainer}>
    <Button
      title={title}
      onPress={onPress}
      isLoading={isLoading}
      isDisabled={disabled}
      variant="primary"
    />
    <View className="absolute" style={styles.serviceStars}>
      <ServiceStars />
    </View>
  </View>
);

export default ManifestationBox;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: scale(10),
    marginTop: scale(20),
    borderRadius: scale(10),
  },
  heading: {
    fontSize: scale(20),
    lineHeight: scale(20),
  },
  inputStyle: {
    marginTop: scale(10),
    padding: scale(10),
    height: scale(80),
    fontSize: scale(12),
    borderRadius: scale(10),
    backgroundColor: "white",
    textAlignVertical: "top",
  },
  charCount: {
    textAlign: "right",
    color: "white",
    fontSize: scale(10),
    marginTop: scale(5),
  },
  manifestationBox: {
    marginTop: scale(10),
    padding: scale(20),
    borderRadius: scale(10),
    backgroundColor: "rgba(255, 255, 255, 0.10)",
  },
  manifestationText: {
    fontSize: scale(14),
  },
  buttonContainer: {
    marginTop: scale(10),
    position: "relative",
    alignSelf: "center",
  },
  serviceStars: {
    top: "30%",
    right: "5%",
  },
  emptyStateBox: {
    marginTop: scale(10),
    padding: scale(20),
    borderRadius: scale(10),
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
  },
});
