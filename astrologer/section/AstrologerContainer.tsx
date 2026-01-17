import { useUserDetails } from "@/_hooks/user/useUserDetails";
import AstrologerFeatureIcon from "@/assets/svg/astrologer/AstrologerFeatureIcon";
import Button from "@/components/form/Button";
import FeaturesSection from "@/components/subscription/section/FeaturesSection";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import AstrologerCard from "./AstrologerCard";
import CalendlyModal from "./CalendlyModal";

const AstrologerContainer = ({ fetchAstrologer }: { fetchAstrologer: any }) => {
  const [modal, setModal] = useState(false);
  const userDetails = useUserDetails();

  const handleCloseModal = () => {
    setModal(!modal);
  };

  return (
    <View className="bg-white" style={styles.cardWrapper}>
      <View className="items-center">
        <AstrologerFeatureIcon width={SCREEN_WIDTH - scale(25 * 2)} />
      </View>

      <View style={styles.astrologerCard} className="bg-brand-background">
        <AstrologerCard data={fetchAstrologer?.data?.data} />
        <View style={styles.featureBackground}>
          <FeaturesSection serviceName="Astrologer" />
          <Button
            title="Book Now"
            onPress={() => {
              setModal(true);
            }}
            isLoading={false}
            isDisabled={false}
            variant="warning"
          />
        </View>
      </View>
      {modal && userDetails?.data?._id ? (
        <CalendlyModal
          closeModal={handleCloseModal}
          userId={userDetails?.data?._id?.toString()}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    borderRadius: scale(30),
    paddingHorizontal: scale(20),
    paddingVertical: scale(20),
    gap: scale(20),
    marginTop: scale(30),
  },
  astrologerCard: { borderRadius: scale(10) },
  featureBackground: {
    paddingHorizontal: scale(10),
    gap: scale(20),
    paddingVertical: scale(20),
  },
});

export default AstrologerContainer;
