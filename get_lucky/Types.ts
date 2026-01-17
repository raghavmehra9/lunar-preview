type Planets =
  | "Sun"
  | "Moon"
  | "Mercury"
  | "Venus"
  | "Mars"
  | "Jupiter"
  | "Saturn"
  | "Rahu"
  | "Ketu";

type DetailsTheme = {
  theme: string;
  message: string;
  whatToDo: string[];
  affirmation: string;
};

type StrongestPlanet = {
  planet: Planets;
  cosmicAlly: string;
  meaning: string;
  action: string[];
};

type WeakestPlanet = {
  planet: Planets;
  cosmicLesson: string;
  meaning: string;
  action: string[];
};

type LuckyUnLuckyResponse = {
  data: {
    percentage: number;
    total_points: number;
    details: DetailsTheme;
    strongest_planets: StrongestPlanet[];
    weakest_planets: WeakestPlanet[];
  };
};

type PlanetStrengthTypes = "strong" | "weak";

type PlanetStrengthSectionProps = {
  data: StrongestPlanet | WeakestPlanet;
  index: number;
  count: number;
  type: PlanetStrengthTypes;
};

export {
  Planets,
  DetailsTheme,
  WeakestPlanet,
  StrongestPlanet,
  PlanetStrengthTypes,
  LuckyUnLuckyResponse,
  PlanetStrengthSectionProps,
};
