import DefaultProfile from "@/assets/svg/profile/DefaultProfile";
import EditIcon from "@/assets/svg/profile/EditIcon";
import { scale } from "@/utils/helpers/sizeMatters";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

type EditProfileSectionProps = {
  source?: string;
  onEdit: () => void;
};

const EditProfileSection = ({ source, onEdit }: EditProfileSectionProps) => {
  const [loading, setLoading] = useState(false);
  return (
    <View className="items-center ">
      <View className="bg-brand-primary" style={styles.imageContainer}>
        {source ? (
          <>
            {loading && (
              <ActivityIndicator
                size="small"
                color="#fff"
                style={StyleSheet.absoluteFill}
              />
            )}
            <Image
              source={source}
              style={styles.imageContainer}
              onLoadStart={() => setLoading(true)}
              onLoadEnd={() => setLoading(false)}
            />
          </>
        ) : (
          <DefaultProfile />
        )}

        <TouchableOpacity
          className="bg-brand-primary"
          style={styles.editIcon}
          onPress={onEdit}
        >
          <EditIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfileSection;

const styles = StyleSheet.create({
  imageContainer: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(100),
  },
  editIcon: {
    position: "absolute",
    padding: scale(8),
    borderRadius: scale(50),
    bottom: scale(-8),
    right: scale(10),
  },
});
