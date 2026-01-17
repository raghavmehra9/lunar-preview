import { IconDimension } from "@/assets/svg/IconTypes";
import Aquarius from "@/assets/svg/zodiac_sign/Aquarius";
import Aries from "@/assets/svg/zodiac_sign/Aries";
import Cancer from "@/assets/svg/zodiac_sign/Cancer";
import Capricorn from "@/assets/svg/zodiac_sign/Capricorn";
import Gemini from "@/assets/svg/zodiac_sign/Gemini";
import Leo from "@/assets/svg/zodiac_sign/Leo";
import Libra from "@/assets/svg/zodiac_sign/Libra";
import Pisces from "@/assets/svg/zodiac_sign/Pisces";
import Sagittarius from "@/assets/svg/zodiac_sign/Sagittarius";
import Scorpio from "@/assets/svg/zodiac_sign/Scorpio";
import Taurus from "@/assets/svg/zodiac_sign/Taurus";
import Virgo from "@/assets/svg/zodiac_sign/Virgo";
import { ZodiacSignTypes } from "@/components/register/Types";

const ZODIAC_SIGNS: Record<
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

export { ZODIAC_SIGNS };
