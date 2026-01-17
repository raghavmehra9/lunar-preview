import { AxiosResponse } from "axios";

import { axiosInstance } from "..";
import {
  AscendantSignReportResponse,
  AstrologerResponse,
  CosmicCouncilResponse,
  CosmicCrewResponse,
  GemStoneResponse,
  MoonCalendarResponse,
  MoonSignReportResponse,
} from "./types";
import { LuckyUnLuckyResponse } from "@/components/get_lucky/Types";
import { CelestialDataWrapper } from "@/components/celestial_clock/Types";
import { AstrologerBookingsResponse } from "@/components/user_profile/Types";
import { BirthChartApiResponse } from "@/components/birth-chart/Types";

const cosmicCrewService = async (): Promise<CosmicCrewResponse> => {
  try {
    const response: AxiosResponse<CosmicCrewResponse> = await axiosInstance.get(
      "/cosmic-crew"
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const gemStoneService = async (): Promise<GemStoneResponse> => {
  try {
    const response: AxiosResponse<GemStoneResponse> = await axiosInstance.get(
      "/gem"
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const cosmicCouncilService = async (): Promise<CosmicCouncilResponse> => {
  try {
    const response: AxiosResponse<CosmicCouncilResponse> =
      await axiosInstance.get("/cosmic-council");
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const luckyUnluckyService = async (): Promise<LuckyUnLuckyResponse> => {
  try {
    const response: AxiosResponse<LuckyUnLuckyResponse> =
      await axiosInstance.get("/lucky-unlucky");
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const moonCalendarService = async (): Promise<MoonCalendarResponse> => {
  try {
    const response: AxiosResponse<MoonCalendarResponse> =
      await axiosInstance.get("/moon-phase");
    return response?.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const moonCalendarPostContent = async (content: string) => {
  try {
    const response = await axiosInstance.post("/moon-phase/manifest", {
      content,
    });
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const moonCalendarUpdateContent = async ({
  id,
  content,
}: {
  id: string;
  content: string;
}): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axiosInstance.put(
      `/moon-phase/manifest/${id}`,
      {
        content,
      }
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const moonCalendarReleaseManifestation = async ({ id }: { id: string }) => {
  try {
    const response = await axiosInstance.put(`/moon-phase/manifest/${id}`);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const fetchAstrolgerService = async (): Promise<AstrologerResponse> => {
  try {
    const response: AxiosResponse<AstrologerResponse> = await axiosInstance.get(
      "/astrologer"
    );
    return response?.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

const fetchAstrolgerBookings = async (
  page: number
): Promise<AstrologerBookingsResponse> => {
  try {
    const response: AxiosResponse<AstrologerBookingsResponse> =
      await axiosInstance.get(`/astrologer/bookings?page=${page}`);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const fetchMoonSignReport = async (): Promise<MoonSignReportResponse> => {
  try {
    const response: AxiosResponse<MoonSignReportResponse> =
      await axiosInstance.get("/moon-sign/report");
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const fetchAscendantSignReport =
  async (): Promise<AscendantSignReportResponse> => {
    try {
      const response: AxiosResponse<AscendantSignReportResponse> =
        await axiosInstance.get("/ascendent-report");
      return response?.data;
    } catch (error) {
      throw error;
    }
  };

const fetchCelestialClock = async (): Promise<CelestialDataWrapper> => {
  try {
    const response: AxiosResponse<CelestialDataWrapper> =
      await axiosInstance.get("/celestial-clock");
    return response?.data;
  } catch (error) {
    throw error;
  }
};

const fetchBirthChartList = async (): Promise<BirthChartApiResponse> => {
  try {
    const response: AxiosResponse<BirthChartApiResponse> =
      await axiosInstance.get("/birth-chart");
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export {
  gemStoneService,
  cosmicCrewService,
  fetchBirthChartList,
  fetchMoonSignReport,
  fetchCelestialClock,
  luckyUnluckyService,
  moonCalendarService,
  cosmicCouncilService,
  fetchAstrolgerService,
  fetchAstrolgerBookings,
  moonCalendarPostContent,
  fetchAscendantSignReport,
  moonCalendarUpdateContent,
  moonCalendarReleaseManifestation,
};
