import Accordion from "@/components/common/Accordion";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { scale } from "@/utils/helpers/sizeMatters";
import { router } from "expo-router";
import { useState } from "react";
import { Linking, StyleSheet, View } from "react-native";
import WebViewModal from "../../modal/WebViewModal";
import LogoutModal from "./LogoutModal";

const AccordionSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [modal, setModal] = useState(false);

  const handleCloseModal = () => {
    setActiveLink("");
    setModal(!modal);
  };

  return (
    <View className="bg-brand-secondary" style={styles.accordionWrapper}>
      <Accordion
        title="Subscription & Purchases"
        index={0}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <Accordion.Item
          text="My subscription"
          onPress={() => router.push("/(app)/user-profile/my-subscription")}
        />
        <Accordion.Item
          text="My purchases"
          onPress={() => router.push("/(app)/user-profile/my-purchase")}
        />
        <Accordion.Item
          text="My frequencies"
          onPress={() => router.push("/(app)/user-profile/my-frequencies")}
        />
      </Accordion>

      <Accordion
        title="My Consultation"
        index={1}
        onPress={() => {
          router.push("/(app)/user-profile/my-consultations");
        }}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      <Accordion
        title="Support & Help"
        index={2}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <Accordion.Item
          text="Feedback"
          onPress={() => {
            setModal(true);
            setActiveLink("https://lunar-website-iota.vercel.app/contact-us");
          }}
        />
      </Accordion>

      <Accordion
        title="Policies & Terms of Use"
        index={3}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <Accordion.Item
          text="Privacy Policy"
          onPress={() => {
            setModal(true);
            setActiveLink(
              "https://lunar-website-iota.vercel.app/privacy-policy"
            );
          }}
        />
        <Accordion.Item
          text="Terms of Use"
          onPress={() => {
            setModal(true);
            setActiveLink("https://lunar-website-iota.vercel.app/terms-of-use");
          }}
        />
      </Accordion>

      <Accordion
        title="About Us"
        index={4}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <Accordion.Item
          text="About Us"
          onPress={() => {
            setModal(true);
            setActiveLink("https://lunar-website-iota.vercel.app/about-us");
          }}
        />
        <Accordion.Item
          text="Contact Us"
          onPress={() => {
            setModal(true);
            setActiveLink("https://lunar-website-iota.vercel.app/contact-us");
          }}
        />
      </Accordion>

      <Accordion
        title="Rate Us"
        index={5}
        onPress={() => {
          Linking.openURL(
            "https://play.google.com/store/apps/details?id=com.app.lunarastrologer&hl=en"
          );
        }}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      <Accordion
        title="Settings"
        index={6}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <Accordion.Item
          text="Logout"
          onPress={() => setLogoutModalVisible(true)}
        />
        <Accordion.Item
          text="Delete Account"
          onPress={() => router.push("/(app)/user-profile/delete-account")}
        />
      </Accordion>

      {isLogoutModalVisible ? (
        <LogoutModal
          isVisible={isLogoutModalVisible}
          onClose={() => setLogoutModalVisible(false)}
        />
      ) : (
        <></>
      )}

      {modal && activeLink ? (
        <WebViewModal closeModal={handleCloseModal} link={activeLink} />
      ) : (
        <></>
      )}
    </View>
  );
};

export default AccordionSection;

const styles = StyleSheet.create({
  accordionWrapper: {
    width: SCREEN_WIDTH - scale(20 * 2),
    marginTop: scale(10),
    paddingVertical: scale(20),
    paddingHorizontal: scale(30),
    borderRadius: scale(20),
  },
});
