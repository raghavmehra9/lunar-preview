import ServiceStars from "@/assets/svg/purchase/ServiceStars";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { Image, StyleSheet, Text, View } from "react-native";
import { AstrologerData } from "../Types";

const AstrologerImageWithStars = ({ image }: { image: string }) => {
  return (
    <View className="justify-center">
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
        <View style={styles.starsContainer}>
          <ServiceStars />
        </View>
      </View>
    </View>
  );
};

const AstrologerInfo = (props: {
  data: Pick<AstrologerData, "name" | "experience">;
}) => {
  const { data } = props;
  return (
    <View>
      <View style={styles.nameContainer}>
        <Text
          style={[styles.roleText]}
          className="text-white font-Avenir-regular"
        >
          Talk to our expert
        </Text>
        <Text
          style={[styles.nameText]}
          className="text-white font-Avenir-heavy"
        >
          {data.name}
        </Text>
      </View>
      <View style={styles.experienceContainer} className="bg-pink-vanillaIce">
        <Text
          style={[styles.experienceText]}
          className="text-white font-Avenir-regular"
        >
          {data.experience} yrs of Experience
        </Text>
      </View>
    </View>
  );
};

const AstrologerPrice = (props: Pick<AstrologerData, "fees">) => {
  const data = props;
  return (
    <View
      style={styles.priceContainer}
      className="bg-white justify-center items-center"
    >
      <Text
        style={styles.priceText}
        className="text-purple-plum font-Avenir-heavy"
      >
        ${data.fees || "0"}
      </Text>
      <Text
        className="text-purple-plum font-Avenir-heavy"
        style={styles.hourText}
      >
        / hour
      </Text>
    </View>
  );
};

const AstrologerCard = (props: { data: AstrologerData }) => {
  const { data } = props;
  return (
    <View style={styles.container} className="bg-pink-pinkSherbet">
      <View style={styles.row}>
        <AstrologerImageWithStars image={data?.profile_image} />
        <AstrologerInfo
          data={{ name: data.name, experience: data.experience }}
        />
        <AstrologerPrice fees={data.fees} />
      </View>
    </View>
  );
};

export default AstrologerCard;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH - scale(80),
    borderRadius: scale(10),
    paddingVertical: scale(16),
    paddingHorizontal: scale(10),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: scale(65),
    height: scale(65),
    borderWidth: 1,
    resizeMode: "contain",
    borderRadius: scale(160),
  },
  starsContainer: {
    position: "absolute",
    right: 0,
  },
  nameContainer: {
    marginBottom: scale(5),
  },
  roleText: {
    fontSize: scale(10),
  },
  nameText: {
    fontSize: scale(17),
  },
  experienceContainer: {
    paddingHorizontal: scale(14),
    paddingVertical: scale(6),
    borderRadius: scale(40),
  },
  experienceText: {
    fontSize: scale(10),
  },
  priceContainer: {
    padding: scale(8),
    borderRadius: scale(10),
  },
  priceText: {
    fontSize: scale(20),
  },
  hourText: {
    fontSize: scale(11),
  },
});
