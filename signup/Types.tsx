type EmailProps = {
  email: string;
  reset?: () => void;
};

type OtpState = {
  onfilled?: () => void;
  setOtp: (text: string, name: string) => void;
  refresh: number;
};

type FormData = {
  name: string;
  birth_date: string;
  birth_location: string;
  birth_time: string;
  birth_location_latitude: string;
  birth_location_longitude: string;
};

export { EmailProps, FormData, OtpState };
