import DefaultProfile from "@/assets/svg/profile/DefaultProfile";
import Button from "@/components/form/Button";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import React, { ReactNode, useState } from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
interface ProfileCardProps {
  children: ReactNode;
}

interface ProfileImageProps {
  source?: ImageSourcePropType;
}

interface ProfileNameProps {
  userName: string;
}

interface ProfileEmailProps {
  userEmail: string;
}

interface ProfileButtonProps {
  buttonText: string;
  onPress: (event: GestureResponderEvent) => void;
}

const ProfileCard: React.FC<ProfileCardProps> & {
  Image: React.FC<ProfileImageProps>;
  Name: React.FC<ProfileNameProps>;
  Email: React.FC<ProfileEmailProps>;
  Button: React.FC<ProfileButtonProps>;
} = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

ProfileCard.Image = ({ source }: ProfileImageProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.imageContainer}>
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
            style={styles.image}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
          />
        </>
      ) : (
        <DefaultProfile />
      )}
    </View>
  );
};

ProfileCard.Name = ({ userName }: ProfileNameProps) => (
  <Text
    ellipsizeMode="tail"
    numberOfLines={2}
    className="font-Skillet-regular text-purple-jacarta"
    style={styles.name}
  >
    {userName}
  </Text>
);

ProfileCard.Email = ({ userEmail }: ProfileEmailProps) => (
  <Text
    style={styles.email}
    numberOfLines={2}
    ellipsizeMode="tail"
    className="font-Avenir-book text-purple-frenchLilac"
  >
    {userEmail}
  </Text>
);

ProfileCard.Button = ({ buttonText, onPress }: ProfileButtonProps) => (
  <Button
    title={buttonText}
    parentClass="px-3 py-[.5rem] w-4/6"
    onPress={onPress}
    isLoading={false}
    isDisabled={false}
    textStyle={styles?.buttonText}
    variant="inline"
  />
);

{
  /* ; */
}
const styles = StyleSheet.create({
  card: {
    width: SCREEN_WIDTH - scale(20 * 2),
    margin: scale(10),
    alignItems: "center",
    flexDirection: "row",
  },
  imageContainer: {
    width: scale(90),
    height: scale(90),
    borderRadius: scale(50),
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginRight: scale(15),
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: scale(50),
  },
  name: {
    fontSize: scale(26),
  },
  email: {
    fontSize: scale(14),
  },
  buttonText: { fontSize: scale(13) },
});

export default ProfileCard;
