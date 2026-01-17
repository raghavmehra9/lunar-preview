import AstrologerScreen from "@/components/astrologer";
import { StatusBar } from "react-native";

const Astrologer = () => {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <AstrologerScreen />
    </>
  );
};

export default Astrologer;
