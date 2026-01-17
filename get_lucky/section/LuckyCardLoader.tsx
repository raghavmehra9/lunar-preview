import Heading from "@/components/form/Heading";
import { View } from "react-native";

const LuckyCardLoader = () => {
  return (
    <View className="flex-1 bg-transparent">
      <Heading heading="Loading Please Wait..." />
    </View>
  );
};

export default LuckyCardLoader;
