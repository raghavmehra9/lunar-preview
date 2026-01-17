import BlueSapphire from "@/assets/svg/gem-stone/BlueSapphire";
import CatsEye from "@/assets/svg/gem-stone/CatsEye";
import Daimond from "@/assets/svg/gem-stone/Daimond";
import Emerald from "@/assets/svg/gem-stone/Emerald";
import HessoniteGarnet from "@/assets/svg/gem-stone/HessoniteGarnet";
import Pearl from "@/assets/svg/gem-stone/Pearl";
import RedCoral from "@/assets/svg/gem-stone/RedCoral";
import Ruby from "@/assets/svg/gem-stone/Ruby";
import YellowSapphire from "@/assets/svg/gem-stone/YellowSapphire";
import { IconDimension } from "@/assets/svg/IconTypes";
import { GemStoneCategory, StoneTypes } from "@/components/gem-stone/Types";

const STONES: Record<StoneTypes, React.ComponentType<IconDimension>> = {
  Ruby: Ruby,
  "Yellow Sapphire": YellowSapphire,
  "Red Coral": RedCoral,
  "Blue Sapphire": BlueSapphire,
  "Hessonite Garnet": HessoniteGarnet,
  "Cat's Eye": CatsEye,
  Diamond: Daimond,
  Emerald: Emerald,
  Pearl: Pearl,
};

const CATEGORIES: GemStoneCategory[] = [
  "Lucky Stone",
  "Fortune Stone",
  "Life Stone",
];

type ColorCategoryObject = {
  section: string;
  background: string;
};

const COLOR_MAPPER: Record<GemStoneCategory, ColorCategoryObject> = {
  "Fortune Stone": {
    section: "#A46FA2",
    background: "#B57FB3",
  },
  "Life Stone": {
    section: "#F3A487",
    background: "#F8B096",
  },
  "Lucky Stone": {
    section: "#E07D96",
    background: "#E989A1",
  },
};

export { STONES, CATEGORIES, COLOR_MAPPER };
