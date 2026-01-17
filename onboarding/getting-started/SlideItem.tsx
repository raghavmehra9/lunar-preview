import { View, Image } from "react-native";
import Heading from "@/components/form/Heading";
import SubHeading from "@/components/form/SubHeading";
import { scale } from "@/utils/helpers/sizeMatters";
import { SCREEN_WIDTH } from "@/constants/Spacing";
import { GettingStartedItem } from "./mock-data";

type SlideItemProps = {
  item: GettingStartedItem;
};

export default function SlideItem({ item }: SlideItemProps) {
  return (
    <View style={{ width: SCREEN_WIDTH, paddingTop: scale(70) }}>
      {/* Top Texts */}
      <View style={{ paddingHorizontal: scale(20), flex: 0.23 }}>
        <Heading
          heading={item.title}
          className="!text-left"
          style={{ fontSize: scale(44), lineHeight: scale(35) }}
        />
        <SubHeading
          subHeading={item.subtitle}
          className="!text-left"
          style={{
            fontSize: scale(15),
            marginTop: scale(10),
            lineHeight: scale(20),
          }}
        />
      </View>

      {/* Bottom Section */}
      <View
        style={{
          marginTop: scale(40),
          borderTopLeftRadius: scale(40),
          borderTopRightRadius: scale(40),
          flex: 0.77,
          backgroundColor: item.backgroundColor,
          alignItems: "center",
        }}
      >
        <Heading
          heading={item.helperTitle}
          className="!text-left self-start pl-[37px]"
          style={{
            marginTop: scale(20),
            fontSize: scale(24),
          }}
        />
        <Image
          source={item.cards.image}
          style={{
            width: item.cards.width,
            height: item.cards.height,
            resizeMode: "contain",
          }}
        />
        <Image
          source={item.illustration}
          style={{
            marginTop: "auto",
            width: scale(320),
            height: scale(180),
            resizeMode: "contain",
          }}
        />
      </View>
    </View>
  );
}
