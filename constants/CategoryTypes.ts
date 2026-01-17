import CheerLeaderCard from "@/assets/svg/cosmic_crew/category/CheerLeaderCard";
import CreativityPlanetCard from "@/assets/svg/cosmic_crew/category/CreativityPlanetCard";
import FrenemyPlanetCard from "@/assets/svg/cosmic_crew/category/FrenemyPlanetCard";
import LifePurposePlanetCard from "@/assets/svg/cosmic_crew/category/LifePurposePlanetCard";
import NurturingPlanetCard from "@/assets/svg/cosmic_crew/category/NurturingPlanetCard";
import RomanticPlanetCard from "@/assets/svg/cosmic_crew/category/RomanticPlanetCard";
import SupportivePlanetCard from "@/assets/svg/cosmic_crew/category/SupportivePlanetCard";
import ToxicPlanetCard from "@/assets/svg/cosmic_crew/category/ToxicPlanetCard";
import WealthPlanetCard from "@/assets/svg/cosmic_crew/category/WealthPlanetCard";
import { IconDimension } from "@/assets/svg/IconTypes";
import { CategoryTypes } from "@/components/cosmic_crew/Types";

const CATEGORY_CARDS: Record<
  CategoryTypes,
  React.ComponentType<IconDimension>
> = {
  atma_karaka: LifePurposePlanetCard,
  amatya_karaka: WealthPlanetCard,
  bhatri_karaka: SupportivePlanetCard,
  matri_karaka: NurturingPlanetCard,
  putra_karaka: CreativityPlanetCard,
  gnati_karaka: ToxicPlanetCard,
  dara_karaka: RomanticPlanetCard,
  yogi: CheerLeaderCard,
  avyogi: FrenemyPlanetCard,
  sahayogi: SupportivePlanetCard,
};

const BACKGROUND_COLORS: Record<CategoryTypes, string> = {
  atma_karaka: "#FFE7E4",
  amatya_karaka: "#F3EFFF",
  bhatri_karaka: "#FFF4EF",
  matri_karaka: "#F3EFFF",
  putra_karaka: "#F3EFFF",
  gnati_karaka: "#FFE7E4",
  dara_karaka: "#FFE7E4",
  yogi: "#FFEDF1",
  avyogi: "#FFEDF1",
  sahayogi: "#FFF4EF",
};

export { CATEGORY_CARDS, BACKGROUND_COLORS };
