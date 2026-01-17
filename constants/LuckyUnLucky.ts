import Jupiter from "@/assets/svg/cosmic_crew/planets/Jupiter";
import Ketu from "@/assets/svg/cosmic_crew/planets/Ketu";
import Mars from "@/assets/svg/cosmic_crew/planets/Mars";
import Mercury from "@/assets/svg/cosmic_crew/planets/Mercury";
import Moon from "@/assets/svg/cosmic_crew/planets/Moon";
import Rahu from "@/assets/svg/cosmic_crew/planets/Rahu";
import Saturn from "@/assets/svg/cosmic_crew/planets/Saturn";
import Sun from "@/assets/svg/cosmic_crew/planets/Sun";
import Venus from "@/assets/svg/cosmic_crew/planets/Venus";
import { IconDimension } from "@/assets/svg/IconTypes";
import { Planets } from "@/components/get_lucky/Types";

const PLANETS: Record<Planets, React.ComponentType<IconDimension>> = {
  Sun: Sun,
  Saturn: Saturn,
  Mars: Mars,
  Moon: Moon,
  Mercury: Mercury,
  Venus: Venus,
  Ketu: Ketu,
  Rahu: Rahu,
  Jupiter: Jupiter,
};

export { PLANETS };
