import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import commonStyles from "@/styles/commonStyle";
import { scale } from "@/utils/helpers/sizeMatters";
import BackNavigation from "../form/BackNavigation";
import BackgroundStars from "@/assets/svg/purchase/BackgroundStars";
import Heading from "../form/Heading";
import SubHeading from "../form/SubHeading";
import SpaceElement from "../SpaceElement";
import { SafeAreaView } from "react-native-safe-area-context";

type GradientScreenProps = {
  heading: string;
  subHeading: string;
  children: React.ReactNode;
};

const GradientScreen = (props: GradientScreenProps) => {
  const { heading, subHeading, children } = props;
  return (
    <LinearGradient
      colors={["#713385", "#3E1F48"]}
      style={commonStyles.container}
    >
      <SafeAreaView className="flex-1">
        <View style={styles.wrapper}>
          <BackNavigation headerName="Back" type="white" />
          <View style={styles.absoluteStars}>
            <BackgroundStars />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Heading
              heading={heading}
              className="text-white"
              style={styles.headingStyle}
            />
            <SubHeading
              subHeading={subHeading}
              className="text-white"
              style={styles.subHeadingStyle}
            />
            {children}
            <SpaceElement spacing={40} />
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default GradientScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  absoluteStars: { position: "absolute", top: scale(20), right: scale(15) },
  headingStyle: {
    textAlign: "left",
    marginTop: scale(19),
    fontSize: scale(42),
    lineHeight: scale(36),
  },
  subHeadingStyle: {
    fontSize: scale(13),
    textAlign: "left",
    marginTop: scale(10),
  },
});
