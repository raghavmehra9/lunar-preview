import { ComponentType } from "react";

type SubscriptionPlan = {
  plan: number;
  duration: string;
};

type CreatePaymentResponse = {
  clientSecret: string;
};

type PlanType = "QuickStart" | "TriumPlan" | "Annual Premium";

type Plan = {
  _id: string;
  plan_name: PlanType;
  validity: number;
  plan_amount: number;
  active: boolean;
};

type SubscriptionPlans = Plan[];
type PlanDetailsProps = {
  data: Pick<Plan, "validity" | "plan_amount" | "plan_name">;
};
type PlanCardProps = {
  type: PlanType;
} & PlanDetailsProps;

type Purchase_Status = "success" | "error";

type PurchaseMapper = Record<Purchase_Status, ComponentType>;

export {
  Plan,
  PlanType,
  SubscriptionPlan,
  SubscriptionPlans,
  CreatePaymentResponse,

  // props
  PlanCardProps,
  PurchaseMapper,
  PlanDetailsProps,
};
