import React, { useRef, useState } from "react";
import {
  FlatList,
  FlatList as FlatListType,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useFetchPreferences from "@/_hooks/user/useFetchPreferences";
import useMutatePreferences from "@/_hooks/user/useMutatePreferences";
import {
  PreferenceOption,
  UserPreferencesBody,
} from "@/api/user-profile/types";
import LoadingScreen from "@/components/LoadingScreen";
import Button from "@/components/form/Button";
import Heading from "@/components/form/Heading";
import LinkButton from "@/components/form/LinkButton";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { Ionicons } from "@expo/vector-icons";
import ProgressBarWithClose from "./ProgressBarWithClose";
import { QUESTIONS_MAPPER } from "./mock_data";

const PreferencesView: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<UserPreferencesBody>({
    gentle_nudge_preference: "",
    seeking_preference: "",
    support_preference: "",
  });
  const [imageBackgroundHeight, setImageBackgroundHeight] = useState<number>(0);
  const flatListRef = useRef<FlatListType<PreferenceOption>>(null);
  const fetchUserPreferences = useFetchPreferences();
  const submitPreferences = useMutatePreferences();
  const questions = fetchUserPreferences.data?.options || [];

  const goToIndex = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < (questions.length ?? 0)) {
      setCurrentIndex(newIndex);
      flatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
    } else if (newIndex >= questions.length) {
      submitPreferences.mutate(answers);
    }
  };

  const handleSelect = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    // setTimeout(() => {
    //   if (index < QUESTIONS.length - 1) {
    //     goToIndex(index + 1);
    //   }
    // }, 1000);
  };

  const handleClose = () => {
    console.log("CLOSED PREFERENCES");
    submitPreferences.mutate(answers);
  };

  const handleImageBackgroundLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setImageBackgroundHeight(height);
  };

  const renderItem = ({ item }: { item: PreferenceOption; index: number }) => (
    <View style={{ width: SCREEN_WIDTH, paddingHorizontal: scale(20) }}>
      <Heading
        heading={QUESTIONS_MAPPER[item.name] || ""}
        className="!text-left"
        style={{
          fontSize: scale(40),
          lineHeight: scale(40),
          height: SCREEN_HEIGHT * 0.17,
        }}
      />

      <ImageBackground
        source={require("@assets/images/preferences/optionscard.webp")}
        style={{
          width: "100%",
          height: SCREEN_HEIGHT * 0.6,
          justifyContent: "center",
          alignItems: "center",
        }}
        onLayout={handleImageBackgroundLayout}
        resizeMode="contain"
      >
        <View
          style={{
            paddingHorizontal: scale(10),
            width: "100%",
            justifyContent: "center",
          }}
        >
          {item.options.map((option, index) => {
            const isSelected =
              answers[item.name as keyof UserPreferencesBody] === option;
            return (
              <TouchableOpacity
                key={option}
                onPress={() => handleSelect(item.name, option)}
                style={[
                  styles.optionBox,
                  index === 0 ? {} : { marginTop: scale(20) },
                  isSelected ? styles.active : styles.inactive,
                ]}
              >
                <Text
                  className="font-Avenir-light text-white"
                  style={[styles.textStyle]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ImageBackground>
    </View>
  );

  if (fetchUserPreferences.isLoading || fetchUserPreferences.isRefetching) {
    return <LoadingScreen />;
  }

  if (fetchUserPreferences.isError) {
    return (
      <TouchableOpacity
        className="flex-1 bg-brand-background justify-center items-center"
        onPress={() => fetchUserPreferences.refetch()}
      >
        <Text
          className="font-Skillet-regular text-brand-primary items-center"
          style={{ fontSize: scale(30) }}
        >
          Retry Questions <Ionicons name="refresh-sharp" size={scale(16)} />
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View className="flex-1 bg-brand-background">
      <SafeAreaView className="flex-1" edges={["top"]}>
        {/* Progress bar */}
        <ProgressBarWithClose
          totalSteps={questions.length || 0}
          currentStep={currentIndex + 1}
          onClose={handleClose}
        />

        {/* Questions List */}
        <FlatList
          ref={flatListRef}
          data={questions || []}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
        />

        {/* Bottom navigation */}
        <View
          className="absolute"
          style={{
            width: "100%",
            bottom: SCREEN_HEIGHT * 0.03,
            flexDirection: "row",
            paddingHorizontal: scale(20),
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <LinkButton
            title="Back"
            onPress={() => goToIndex(currentIndex - 1)}
            variant="primary"
            textStyle={{
              fontSize: scale(18),
              lineHeight: scale(22),
            }}
            textClass="font-Avenir-regular"
            isDisabled={currentIndex === 0}
          />

          <Button
            title={currentIndex === questions.length - 1 ? "Finish" : "Next"}
            onPress={() => goToIndex(currentIndex + 1)}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default PreferencesView;

const styles = StyleSheet.create({
  optionBox: {
    borderWidth: scale(1),
    borderRadius: scale(10),
    marginHorizontal: scale(40),
  },
  active: {
    backgroundColor: "#532868",
    borderColor: "#fff",
  },
  inactive: {
    backgroundColor: "#754290",
    borderColor: "transparent",
  },
  textStyle: {
    paddingVertical: scale(13),
    paddingHorizontal: scale(10),
    fontSize: scale(15),
    textAlign: "center",
  },
});
