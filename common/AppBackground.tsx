import { ScrollView, StyleSheet, View } from "react-native";

import GradientWave from "@/assets/svg/onboarding/GradientWave";
import CloudIcon from "@/assets/svg/onboarding/Cloud";
import { scale } from "@/utils/helpers/sizeMatters";

interface AppBackgroundProps {
  scrollable?: boolean;
  children: React.ReactNode;
}

const AppBackground = (props: AppBackgroundProps) => {
  const { children, scrollable = true } = props;
  const Container = scrollable ? ScrollView : View;
  return (
    <Container
      className="bg-brand-background"
      contentContainerStyle={
        scrollable ? styles.contentContainerStyle : undefined
      }
      style={scrollable ? undefined : styles.contentContainerStyle}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.cloudWrapper}>
        <CloudIcon />
      </View>

      <View style={styles.gradientWaveWrapper}>
        <GradientWave width={scale(400)} height={scale(289)} />
      </View>

      {children}
    </Container>
  );
};

export default AppBackground;

const styles = StyleSheet.create({
  cloudWrapper: {
    position: "absolute",
    top: scale(50),
  },
  gradientWaveWrapper: {
    position: "absolute",
    bottom: scale(44),
  },
  contentContainerStyle: { flexGrow: 1, paddingHorizontal: scale(20) },
});
