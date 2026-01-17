import {
  ColorCategoryObject,
  PanChangTypes,
} from "@/components/cosmic_council/Type";

const COUNCIL_COLOR_MAPPER: Record<PanChangTypes, ColorCategoryObject> = {
  tithi: {
    section: "#906AB6",
    background: "#9972BF",
  },
  nakshatra: {
    section: "#AF5D72",
    background: "#BA697D",
  },
  karan: {
    section: "#FFB95D",
    background: "#FFC981",
  },
};

export { COUNCIL_COLOR_MAPPER };
