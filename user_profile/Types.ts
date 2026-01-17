import { IndividualPlans } from "../purchase/Types";
import { ZodiacSignTypes } from "../register/Types";

type UserProfileResponse = {
  _id?: string;
  name: string;
  nick_name: string;
  email: string;
  birth_date: string;
  birth_time: string;
  birth_location: string;
  birth_location_longitude: number;
  birth_location_latitude: number;
  birth_location_timezone: number;
  is_user_onboarded: boolean;
  moon_sign: ZodiacSignTypes;
  ascendent_sign: ZodiacSignTypes;
  subscribed: boolean;
  profile_image: string | null;
  activeSubscriptions?: { _id: string }[];
} & IndividualPlan;

type IndividualPlan = {
  plans?: {
    ascendent_report_enabled: boolean;
    cosmic_crew_enabled: boolean;
    gemstone_enabled: boolean;
    moon_sign_enabled: boolean;
  };
};

type ReasonListResponse = {
  data: { _id: string; reason: string }[];
};

type UserDetailResponse = UserProfileResponse & {
  nick_name: string;
};

type ProfileSectionProps = {
  data: Pick<UserProfileResponse, "name" | "email">;
};

type SignSectionProps = {
  data: { moonSign: ZodiacSignTypes; ascendantSign: ZodiacSignTypes };
  moonRoute?: IndividualPlans;
  ascendantRoute?: IndividualPlans;
};

// ASTROLOGER BOOKINGS
type Astrologer = {
  _id: string;
  name: string;
  age: number;
  experience: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  fees: number;
};

type FormattedBookingDate = {
  year: number;
  month: string;
  day: number;
};

type Booking = {
  _id: string;
  userId: string;
  google_meet_link: string;
  status: "scheduled" | "canceled";
  booking_date: string;
  name: string;
  email: string;
  start_time: string;
  end_time: string;
  event_url: string;
  astrologerId: Astrologer;
  last_updated_at: string;
  timezone: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  customStatus: "completed" | "cancelled";
  button_disabled: boolean;
  formatted_booking_date: FormattedBookingDate;
};

type BookingsData = {
  scheduledBookings: Booking[];
  pastBookings: Booking[];
};

type MetaData = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

type AstrologerBookingsResponse = {
  data: BookingsData;
  meta: MetaData;
};

type ConsultationType = "scheduledBookings" | "pastBookings";

type ConsultationProps = {
  data: {
    active: ConsultationType;
    name: string;
    experience: number;
    date: {
      year: number;
      month: string;
      day: number;
    };
    start_time: string;
    status: "scheduled" | "canceled";
    pastStatus: "completed" | "cancelled";
    button_disabled: boolean;
    google_meet_link: string;
  };
};

export {
  AstrologerBookingsResponse,
  ConsultationProps,
  ConsultationType,
  ProfileSectionProps,
  ReasonListResponse,
  SignSectionProps,
  UserDetailResponse,
  UserProfileResponse,
};
