import Heading from "@/components/form/Heading";
import SubHeading from "@/components/form/SubHeading";
import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, View } from "react-native";

const HeadingFeature = () => {
  return (
    <View>
      <Heading
        heading="It’s All Written In The Stars!"
        style={styles.headingStyle}
      />
      <SubHeading
        subHeading="Choose a plan to see what's in store for you"
        style={styles.subheadingStyle}
      />
    </View>
  );
};

export default HeadingFeature;

const styles = StyleSheet.create({
  headingStyle: { fontSize: scale(44), lineHeight: scale(34) },
  subheadingStyle: { fontSize: scale(14) },
});
