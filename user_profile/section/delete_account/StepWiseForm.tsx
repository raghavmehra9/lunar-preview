import Button from "@/components/form/Button";
import SpaceElement from "@/components/SpaceElement";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { useSession } from "@/context/ctx";
import useMutateDeleteUser from "@/_hooks/user/useMutateDeleteUser";
import commonStyles from "@/styles/commonStyle";
import { scale } from "@/utils/helpers/sizeMatters";
import { useRef, useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import DeleteConfirmationModal from "../user_profile/DeleteConfirmation";
import Reason from "./Reason";

interface ReasonData {
  _id: string;
  reason: string;
}

interface StepWiseFormProps {
  reason: ReasonData[];
}

const StepWiseForm = ({ reason }: StepWiseFormProps) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const deleteUser = useMutateDeleteUser();
  const { signOut } = useSession();

  const [selectedReason, setSelectedReason] = useState<{
    id: string;
    text: string;
  } | null>(null);
  const [slide, setSlide] = useState<number>(0);
  const scrollViewRef = useRef<ScrollView | null>(null);

  const TOTAL_SLIDES = 2;
  const SPECIAL_REASON_ID = "67d7d6df9da6af3b82ced9be";

  const scrollToSlide = (index: number) => {
    if (index < TOTAL_SLIDES) {
      setSlide(index);
      scrollViewRef.current?.scrollTo({
        x: SCREEN_WIDTH * index - scale(40),
        animated: true,
      });
    }
  };

  const handleReasonSelect = (id: string) => {
    setSelectedReason({ id, text: "" });
    id === SPECIAL_REASON_ID ? scrollToSlide(1) : scrollToSlide(2);
  };

  const handleDeleteAccount = () => {
    if (selectedReason?.id) {
      deleteUser.mutate(
        { reason_id: selectedReason.id, reason_text: selectedReason.text },
        {
          onSuccess() {
            signOut();
          },
        }
      );
    }
  };

  return (
    <View style={commonStyles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Slide 1 - Select Reason */}
        <View style={styles.slide}>
          <ScrollView contentContainerStyle={styles.reasonContainer}>
            {reason.map(({ _id, reason }) => (
              <View style={styles.reasonItem} key={_id}>
                <Reason
                  reasonData={{ id: _id, message: reason }}
                  isSelected={selectedReason?.id === _id}
                  onPress={() => handleReasonSelect(_id)}
                />
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Slide 2 - Additional Input (Only for specific reason ID) */}
        <View
          style={[
            styles.slide,
            selectedReason?.text ? styles.activeBorder : styles.inactiveBorder,
          ]}
        >
          {selectedReason?.id === SPECIAL_REASON_ID ? (
            <TextInput
              numberOfLines={6}
              value={selectedReason.text}
              multiline
              onChangeText={(text) =>
                setSelectedReason((prev) =>
                  prev ? { ...prev, text } : { id: SPECIAL_REASON_ID, text }
                )
              }
              placeholder="Type here"
              style={styles.inputField}
            />
          ) : (
            <View style={styles.emptySlide} />
          )}
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View className="justify-center gap-5" style={{ marginTop: scale(10) }}>
        <Button
          title="Delete My Account"
          onPress={() => setDeleteConfirmation(true)}
          isLoading={deleteUser?.isPending}
          isDisabled={
            !selectedReason?.id ||
            (selectedReason?.id === SPECIAL_REASON_ID &&
              !selectedReason.text) ||
            deleteUser?.isPending
          }
          variant="primary"
        />
        {selectedReason?.id === SPECIAL_REASON_ID && (
          <Button
            title="Back"
            onPress={() => {
              setSelectedReason(null);
              scrollToSlide(0);
            }}
            isLoading={false}
            isDisabled={false}
            variant="white"
          />
        )}
        <SpaceElement spacing={10} />
      </View>

      {deleteConfirmation ? (
        <DeleteConfirmationModal
          isVisible={deleteConfirmation}
          isLoading={deleteUser?.isPending}
          onClose={() => setDeleteConfirmation(false)}
          confirmation={handleDeleteAccount}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

export default StepWiseForm;

const styles = StyleSheet.create({
  scrollContainer: {
    width: SCREEN_WIDTH * 2,
    paddingTop: scale(10),
  },
  slide: {
    width: SCREEN_WIDTH - scale(40),
    alignSelf: "flex-start",
    padding: scale(10),
    borderRadius: scale(20),
    backgroundColor: "white",
  },
  reasonContainer: {
    alignSelf: "flex-start",
  },
  reasonItem: {
    paddingVertical: scale(8),
  },
  inputField: {
    height: scale(130),
    borderColor: "gray",
    borderRadius: scale(10),
    padding: scale(10),
    backgroundColor: "rgba(255,255,255,0.1)",
    textAlignVertical: "top",
  },
  emptySlide: {
    width: "100%",
    height: scale(50),
  },
  activeBorder: {
    borderWidth: 1,
    borderColor: "#6B3E75",
  },
  inactiveBorder: {
    borderWidth: 1,
    borderColor: "#fff",
  },
});
