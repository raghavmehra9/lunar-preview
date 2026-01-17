interface Frequency {
  _id: string;
  name: string;
  slug: string;
  price: number;
  category: {
    _id: string;
    name: string;
    active: boolean;
  };
  thumbnail_url: string;
  description: string;
  frequency_audio_url?: string | null;
  benefits: string[];
  use_cases: string[];
  active: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Meta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface FrequencyResponse {
  data: Frequency[];
  meta: Meta;
}

interface FrequencyPaymentResponse {
  clientSecret: string;
}

interface CustomFrequencyResponse {
  data: string;
}

export {
  Frequency,
  Meta,
  FrequencyResponse,
  FrequencyPaymentResponse,
  CustomFrequencyResponse,
};
