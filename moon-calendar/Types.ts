import { DateDetails } from "../Types";

type MoonPhases =
  | "New Moon"
  | "Crescent Moon"
  | "First Quarter Moon"
  | "Gibbous Moon"
  | "Full Moon"
  | "Disseminating Moon"
  | "Last Quarter Moon"
  | "Balsamic Moon";

type MoonCalendarDetails = {
  moon_phase_name: string;
  name: MoonPhases;
  description: string;
  date: DateDetails;
  manifestationData: {
    active: boolean;
    _id: string;
    content: string;
  };
};

export { MoonPhases, MoonCalendarDetails };
