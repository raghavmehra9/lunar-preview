import { Planets } from "../get_lucky/Types";
import { ZodiacSignTypes } from "../register/Types";

type Element = "Fire" | "Air" | "Earth" | "Water";
type Modality = "Cardinal" | "Fixed" | "Mutable";
type CardTitle = "Element" | "Ruled By" | "Modality";

type Capitalized<T extends string> = Capitalize<T>;

type ElementProps =
  | {
      cardTitle: "Element";
      icon: Capitalized<Element>;
    }
  | {
      cardTitle: "Ruled By";
      icon: Planets;
    }
  | {
      cardTitle: "Modality";
      icon: Capitalized<Modality>;
    };

type MoonSignReport = {
  sign: ZodiacSignTypes;
  description: string;
  strengths: string[];
  watchOutFor: string[];
  loveNeeds: string[];
};

type AscendantReport = {
  sign: ZodiacSignTypes;
  symbol: string;
  element: Capitalized<Element>;
  modality: Capitalized<Modality>;
  rulingPlanets: Planets[];
  traits: {
    good: string[];
    needsWork: string[];
  };
  lagna: string;
  loveAndRelationships: string;
  friendship: string;
  careers: string[];
};

type ReportSectionProps = {
  title: string;
  data: string[] | string;
  bullet?: boolean;
};

type ReportType = "moon" | "ascendant";
export {
  Element,
  Modality,
  CardTitle,
  ReportType,
  ElementProps,
  MoonSignReport,
  AscendantReport,
  ReportSectionProps,
};
