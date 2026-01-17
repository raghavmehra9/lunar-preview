import { IconDimension } from "@/assets/svg/IconTypes";
import Aries from "@/assets/svg/profile_zodiac/Aries";
import Aquarius from "@/assets/svg/profile_zodiac/Aquarius";
import Cancer from "@/assets/svg/profile_zodiac/Cancer";
import Capricorn from "@/assets/svg/profile_zodiac/Capricorn";
import Gemini from "@/assets/svg/profile_zodiac/Gemini";
import Leo from "@/assets/svg/profile_zodiac/Leo";
import Libra from "@/assets/svg/profile_zodiac/Libra";
import Pisces from "@/assets/svg/profile_zodiac/Pisces";
import Sagittarius from "@/assets/svg/profile_zodiac/Sagittarius";
import Scorpio from "@/assets/svg/profile_zodiac/Scorpio";
import Taurus from "@/assets/svg/profile_zodiac/Taurus";
import Virgo from "@/assets/svg/profile_zodiac/Virgo";
import { ZodiacSignTypes } from "@/components/register/Types";

const PROFILE_ZODIAC_SIGNS: Record<
  ZodiacSignTypes,
  React.ComponentType<IconDimension>
> = {
  Aries: Aries,
  Taurus: Taurus,
  Gemini: Gemini,
  Cancer: Cancer,
  Leo: Leo,
  Virgo: Virgo,
  Libra: Libra,
  Scorpio: Scorpio,
  Sagittarius: Sagittarius,
  Capricorn: Capricorn,
  Aquarius: Aquarius,
  Pisces: Pisces,
};

export { PROFILE_ZODIAC_SIGNS };
