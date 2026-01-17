import DownArrow from "@/assets/svg/arrow/DownArrow";
import { scale } from "@/utils/helpers/sizeMatters";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";

interface AccordionProps {
  title: string;
  children?: React.ReactNode;
  index: number;
  activeIndex: number | null;
  onPress?: () => void;
  setActiveIndex: (index: number | null) => void;
}

interface ItemProps {
  text: string;
  onPress?: () => void;
}

const Accordion: React.FC<AccordionProps> & { Item: React.FC<ItemProps> } = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
  onPress,
}) => {
  const isExpanded = activeIndex === index;

  const toggleAccordion = () => {
    onPress?.();
    setActiveIndex(isExpanded ? null : index);
  };

  return (
    <View style={styles.accordion}>
      <TouchableOpacity style={styles.header} onPress={toggleAccordion}>
        <Text
          className="font-Avenir-regular text-purple-jacarta"
          style={styles.title}
        >
          {title}
        </Text>

        {children && (
          <Animated.View
            style={{ transform: [{ rotate: isExpanded ? "180deg" : "0deg" }] }}
          >
            <DownArrow />
          </Animated.View>
        )}
      </TouchableOpacity>

      {isExpanded && children && (
        <Animated.View style={styles.content}>{children}</Animated.View>
      )}
    </View>
  );
};

const AccordionItem: React.FC<ItemProps> = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Animated.Text
      className="text-purple-frenchLilac font-Avenir-regular"
      style={styles.itemText}
    >
      {text}
    </Animated.Text>
  </TouchableOpacity>
);

Accordion.Item = AccordionItem;

const styles = StyleSheet.create({
  accordion: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    paddingVertical: scale(7),
  },
  header: {
    paddingVertical: scale(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: scale(14),
  },
  content: {},
  item: {
    marginVertical: scale(7),
  },
  itemText: {
    fontSize: scale(14),
  },
});

export default Accordion;
