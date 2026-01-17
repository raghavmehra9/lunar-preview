import { scale } from "@/utils/helpers/sizeMatters";
import { StyleSheet, View } from "react-native";
import SignCard from "../../components/SignCard";
import { SignSectionProps } from "../../Types";

const SignSection = (props: SignSectionProps) => {
  const { data, moonRoute, ascendantRoute } = props;
  return (
    <View className="flex-row" style={styles.signWrapper}>
      <SignCard route={moonRoute}>
        <View style={styles.leftSection}>
          <SignCard.Type type="Moon" />
          <SignCard.Name signName={data.moonSign} />
        </View>
        <SignCard.Icon icon={data?.moonSign} />
      </SignCard>
      <SignCard route={ascendantRoute}>
        <View style={styles.leftSection}>
          <SignCard.Type type="Ascendant" />
          <SignCard.Name signName={data.ascendantSign} />
        </View>
        <SignCard.Icon icon={data?.ascendantSign} />
      </SignCard>
    </View>
  );
};

export default SignSection;

const styles = StyleSheet.create({
  signWrapper: {
    gap: scale(10),
    marginTop: scale(15),
    justifyContent: "space-between",
  },
  leftSection: { gap: scale(5) },
});
