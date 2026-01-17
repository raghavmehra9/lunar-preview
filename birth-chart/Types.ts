type BirthChartApiResponse = {
  data: CelestialBody[];
};

type CelestialBody = {
  name: string;
  description: string;
  signs: Sign[];
  placements: Placement[];
};

type Sign = {
  name: string;
  description: string;
};

type Placement = {
  house: number;
  description: string;
  effects: Effects;
};

type Effects = {
  Career: string;
  Relationships: string;
  Health: string;
  Spiritual_Growth: string;
};

export { BirthChartApiResponse, CelestialBody, Sign, Placement, Effects };
