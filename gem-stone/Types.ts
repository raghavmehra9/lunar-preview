type Direction = "next" | "previous";
type GemStoneCategory = "Lucky Stone" | "Fortune Stone" | "Life Stone";
type StoneTypes =
  | "Ruby"
  | "Yellow Sapphire"
  | "Red Coral"
  | "Blue Sapphire"
  | "Cat's Eye"
  | "Diamond"
  | "Hessonite Garnet"
  | "Emerald"
  | "Pearl";

type IconButtonProps = {
  icon: React.ReactNode;
  onPress: () => void;
};

type GemStoneDetailsProps = {
  data: Record<GemStoneCategory, SingleGemDetails>;
};

type SingleGemDetails = {
  color: string;
  display_name: string;
  name: StoneTypes;
  planet: string;
  significance: string[];
  worn_by: string;
};

export {
  Direction,
  StoneTypes,
  IconButtonProps,
  SingleGemDetails,
  GemStoneCategory,
  GemStoneDetailsProps,
};
