import MenuIcon from "@/assets/svg/homescreen/MenuIcon";
import { useSession } from "@/context/ctx";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import NameHeading from "./NameHeading";
import { useUserDetails } from "@/_hooks/user/useUserDetails";

const TopBar = ({ menuPress = () => {} }) => {
  const userDetails = useUserDetails();
  return (
    <View
      className="flex-row items-center justify-between"
      style={styles.topBarStyle}
    >
      {userDetails && (
        <NameHeading
          name={userDetails?.data?.nick_name || userDetails?.data?.name || ""}
        />
      )}
      <TouchableOpacity
        className="bg-white"
        style={styles.menu}
        onPress={menuPress}
      >
        <MenuIcon />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  menu: {
    paddingHorizontal: scale(7),
    paddingVertical: scale(10),
    borderRadius: scale(6),
  },
  topBarStyle: {
    marginTop: scale(10),
  },
});
