// Define types
interface Frequency {
  name: string;
}

interface Category {
  category: string;
  frequency: Frequency[];
}

interface FrequencyCardProps {
  name: string;
  freqId: string;
}

interface CategoryNameProps {
  name: string;
}

interface FrequencyFormData {
  name: string;
  mobile_number: string;
  email: string;
  birth_time: string;
  birth_date: string;
  birth_location: string;
  birth_location_latitude: number;
  birth_location_longitude: number;
  street_1: string;
  street_2: string;
  state: string;
  city: string;
  zip_code: string;
  country: string;
}

interface FrequencyDetail {
  benefits: string[];
  use_cases: string[];
  description: string;
  name: string;
  thumbnail_url: string;
  category: {
    _id: string;
    name: string;
    active: boolean;
  };
}

export {
  Frequency,
  Category,
  FrequencyCardProps,
  CategoryNameProps,
  FrequencyFormData,
  FrequencyDetail,
};
