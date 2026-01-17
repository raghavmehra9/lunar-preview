import { PlanType } from "@/components/subscription/Types";

type Subscription = {
  plan: string;
  price: number;
  duration: string;
  purchasedOn: string;
  validUpto: string;
};

// Main Subscription Object
type SubscriptionData = {
  currentSubscription: Subscription | null;
  pastSubscriptions: Subscription[];
};

// Example Subscription Data
const subscriptionData: SubscriptionData = {
  currentSubscription: {
    plan: "Core Plan",
    price: 59,
    duration: "1 Month",
    purchasedOn: "2024-07-04T00:00:00.000Z",
    validUpto: "2024-08-04T00:00:00.000Z", // Null if lifetime
  },
  pastSubscriptions: [
    {
      plan: "Core Plan",
      price: 59,
      duration: "1 Month",
      purchasedOn: "2024-06-04T00:00:00.000Z",
      validUpto: "2024-07-04T00:00:00.000Z",
    },
    {
      plan: "Premium Plan",
      price: 99,
      duration: "3 Months",
      purchasedOn: "2024-03-01T00:00:00.000Z",
      validUpto: "2024-06-01T00:00:00.000Z",
    },
  ],
};

type CardDetails = {
  brand: string;
  last4: string;
  exp_month: number;
  exp_year: number;
  funding: string;
  wallet: null;
};

type SubscriptionPlan = {
  _id: string;
  plan_name: PlanType;
  validity: number; // in months
  plan_amount: number;
  active: boolean;
};

type ActiveSubscription = {
  cardDetails: CardDetails;
  _id: string;
  userId: string;
  planId: SubscriptionPlan;
  paymentIntentId: string;
  paymentMethodId: string;
  paymentType: string;
  startDate: string;
  endDate: string;
  timeZone: number;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
};
type UserSubscriptionDetails = {
  activeSubscriptions: ActiveSubscription[];
  expiredSubscriptions: ActiveSubscription[];
};
export {
  subscriptionData,
  Subscription,
  SubscriptionData,
  ActiveSubscription,
  UserSubscriptionDetails,
};
