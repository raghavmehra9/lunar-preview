import {
  KaranaDetails,
  NakshatraDetails,
  TithiDetails,
} from "@/components/cosmic_council/Type";
import { DateDetails } from "@/components/Types";
import { GemStoneDetailsProps as GemStoneDetail } from "@/components/gem-stone/Types";
import { Planets } from "@/components/get_lucky/Types";
import { MoonCalendarDetails } from "@/components/moon-calendar/Types";
import { CategoryTypes } from "@/components/cosmic_crew/Types";
import { AstrologerData } from "@/components/astrologer/Types";
import { AscendantReport, MoonSignReport } from "@/components/report/Types";

interface CosmicCrew {
  category_name: CategoryTypes;
  category_display_name: string;
  planet_name: Planets;
  description: string;
}

type CosmicCrewResponse = {
  data: CosmicCrew[];
};

type GemStoneResponse = GemStoneDetail;

type CosmicCouncilResponse = {
  data: {
    date: DateDetails;
    nakshatra: NakshatraDetails;
    tithi: TithiDetails;
    karan: KaranaDetails;
  };
};

type MoonCalendarResponse = {
  data: MoonCalendarDetails;
};

type MoonCalendarContentPayload = {
  content: string;
};

type AstrologerResponse = {
  data: AstrologerData;
};

type MoonSignReportResponse = {
  data: MoonSignReport;
};
type AscendantSignReportResponse = {
  data: AscendantReport;
};

export {
  CosmicCrew,
  GemStoneResponse,
  CosmicCrewResponse,
  AstrologerResponse,
  MoonCalendarResponse,
  CosmicCouncilResponse,
  MoonSignReportResponse,
  MoonCalendarContentPayload,
  AscendantSignReportResponse,
};
