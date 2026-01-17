type AstrologyTypes = "Moon" | "Ascendant";
type ZodiacSignTypes =
  | "Aries"
  | "Taurus"
  | "Gemini"
  | "Cancer"
  | "Leo"
  | "Virgo"
  | "Libra"
  | "Scorpio"
  | "Sagittarius"
  | "Capricorn"
  | "Aquarius"
  | "Pisces";
type AstrologySignProps = {
  type: AstrologyTypes;
  heading: ZodiacSignTypes;
};

export { AstrologyTypes, AstrologySignProps, ZodiacSignTypes };
