import { IconDimension } from "@/assets/svg/IconTypes";
import CorePlan from "@/assets/svg/subscribe/CorePlan";
import ElitePlan from "@/assets/svg/subscribe/ElitePlan";
import PlusPlan from "@/assets/svg/subscribe/PlusPlan";
import { PlanType } from "@/components/subscription/Types";
import { ComponentType } from "react";

const PLAN_ICON: Record<PlanType, ComponentType<IconDimension>> = {
  QuickStart: CorePlan,
  TriumPlan: PlusPlan,
  "Annual Premium": ElitePlan,
};

export { PLAN_ICON };
