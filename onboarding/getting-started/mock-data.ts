import { SCREEN_WIDTH } from "@/constants/Spacing";
import { ImageProps } from "react-native";

export interface Card {
  image: ImageProps["source"];
  width: number;
  height: number;
}

export interface GettingStartedItem {
  id: number;
  title: string;
  subtitle: string;
  helperTitle: string;
  bottomSectionBgColor: string;
  cards: Card;
  illustration: ImageProps["source"];
  backgroundColor: string;
}

export type GettingStarted = GettingStartedItem[];

export const GETTING_STARTED_DATA: GettingStarted = [
  {
    id: 1,
    title: "Find Out How Your\nDay Will Be",
    subtitle: "Know your lucky hours. Dodge the tricky ones.",
    helperTitle: "Your Ally For..",
    bottomSectionBgColor: "#FDE2E4",
    cards: {
      image: require("@assets/images/getting-started/images_1.webp"),
      width: SCREEN_WIDTH,
      height: SCREEN_WIDTH * 0.36,
    },
    illustration: require("@assets/images/getting-started/illustration_1.webp"),
    backgroundColor: "#FCEAEF",
  },
  {
    id: 2,
    title: "A calm guide for\nyour everyday\nmoments",
    subtitle:
      "Simple rituals and prompts to help you\nreset and realign anytime.",
    helperTitle: "Your Secret Tool..",
    bottomSectionBgColor: "#FFF0DB",
    cards: {
      image: require("@assets/images/getting-started/images_2.webp"),
      width: SCREEN_WIDTH,
      height: SCREEN_WIDTH * 0.36,
    },

    illustration: require("@assets/images/getting-started/illustration_2.webp"),
    backgroundColor: "#FBEADD",
  },
  {
    id: 3,
    title: "Let calm\nguidance back\nyou up",
    subtitle: "Simple rituals and prompts to help you\nmove with confidence.",
    helperTitle: "Level up your daily routine..",
    bottomSectionBgColor: "#F5E0FF",
    cards: {
      image: require("@assets/images/getting-started/images_3.webp"),
      width: SCREEN_WIDTH,
      height: SCREEN_WIDTH * 0.36,
    },

    illustration: require("@assets/images/getting-started/illustration_3.webp"),
    backgroundColor: "#F7E7F6",
  },
];

export interface CosmicItemProps {
  item: GettingStartedItem;
  index?: number;
}

export interface CosmicListProps {
  data: GettingStarted;
  onItemPress?: (item: GettingStartedItem) => void;
}
