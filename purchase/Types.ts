type IndividualPlans =
  | "ascendent-report"
  | "gemstone"
  | "moon-sign"
  | "cosmic-crew";

type IndividualPlanDetails = {
  _id: string;
  plan_name: string;
  plan_amount: number;
  active: boolean;
  slug: string;
};

type CreatePaymentPayload = { planId: string; type: string };

type CardDetails = {
  brand: string;
  last4: string;
  exp_month: number;
  exp_year: number;
  funding: string;
  wallet: string | null;
};

type Plan = {
  _id: string;
  plan_name: string;
  plan_amount: number;
  active: boolean;
  __v: number;
  slug: string;
};

type Payment = {
  cardDetails: CardDetails;
  _id: string;
  userId: string;
  planId: Plan;
  paymentIntentId: string;
  paymentMethodId: string;
  paymentType: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type Meta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

type PaymentData = {
  data: Payment[];
  meta: Meta;
};

export interface FrequencyPlan {
  _id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  thumbnail_url: string;
  frequency_audio_url: string;
  description: string;
  benefits: string[];
  use_cases: string[];
  active: boolean;
  __v: number;
  createdAt: string;
  updatedAt: string;
}

export interface Frequency {
  _id: string;
  userId: string;
  planId: FrequencyPlan;
  cardDetails: CardDetails;
  paymentIntentId: string;
  paymentMethodId: string;
  paymentType: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface FrequencyResponse {
  data: Frequency[];
  meta: Meta;
}

export {
  IndividualPlans,
  IndividualPlanDetails,
  CreatePaymentPayload,
  PaymentData,
  FrequencyResponse,
};
