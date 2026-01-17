import BalsamicMoon from "@/assets/svg/moon-phase/BalsamicMoon";
import CrescentMoon from "@/assets/svg/moon-phase/CrescentMoon";
import DisseminatingMoon from "@/assets/svg/moon-phase/DisseminatingMoon";
import FirstQuarterMoon from "@/assets/svg/moon-phase/FirstQuarterMoon";
import FullMoon from "@/assets/svg/moon-phase/FullMoon";
import GibbiousMoon from "@/assets/svg/moon-phase/GibbiousMoon";
import LastQuaterMoon from "@/assets/svg/moon-phase/LastQuaterMoon";
import NewMoon from "@/assets/svg/moon-phase/NewMoon";
import { MoonPhases } from "@/components/moon-calendar/Types";
import { IconDimension } from "@/assets/svg/IconTypes";

const MOON_PHASE: Record<MoonPhases, React.ComponentType<IconDimension>> = {
  "New Moon": NewMoon,
  "Crescent Moon": CrescentMoon,
  "First Quarter Moon": FirstQuarterMoon,
  "Gibbous Moon": GibbiousMoon,
  "Full Moon": FullMoon,
  "Disseminating Moon": DisseminatingMoon,
  "Last Quarter Moon": LastQuaterMoon,
  "Balsamic Moon": BalsamicMoon,
};

export { MOON_PHASE };
