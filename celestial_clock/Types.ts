import { Planets } from "../get_lucky/Types";

type Muhurat = "Hora" | "Rahukaal" | "Abhijeet";

type CelestialClockTypes = "current_hora" | "rahukaal" | "abhijit_muhurta";
type CelestialClockProps = {
  celestialData: MuhuratData;
  startTime: string;
  endTime: string;
  activeTab: CelestialClockTypes;
};

type TabsType = {
  tabName: Muhurat;
  name: CelestialClockTypes;
  textColor: string;
  borderColor: string;
};

type InstructionItem = {
  label: string;
  content: string;
};

interface CategoryHeaderProps {
  planetName: Planets;
  type: CelestialClockTypes;
  activeTabTime: { startTime: string; endTime: string };
}

type CategoryColorObject = {
  backgroundColor: string;
  planetBackgroundColor: string;
  highlightColor: string;
};

type TimeRange = {
  start: string;
  end: string;
};

type HoraDetails = {
  doThis: string[];
  avoidThis: string[];
};

type Hora = {
  name: Planets;
  details: HoraDetails;
  time: string;
};

type MuhuratData = {
  abhijit_muhurta: TimeRange;
  rahukaal: TimeRange;
  current_hora: Hora;
};

type CelestialDataWrapper = {
  data: MuhuratData;
};

interface HoraInstructionCardProps {
  instructions: HoraDetails;
}

export {
  CelestialClockProps,
  CategoryHeaderProps,
  CategoryColorObject,
  TabsType,
  InstructionItem,
  CelestialClockTypes,
  HoraInstructionCardProps,
  CelestialDataWrapper,
};
