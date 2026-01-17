import { createContext, useContext, useState } from "react";

type ContextProps = {
  activePlan: string;
  handlePlanSelection: (plan: string) => void;
};

const contextProps = {
  activePlan: "",
  handlePlanSelection: (_: string) => undefined,
};

const SubscriptionContext = createContext<ContextProps>(contextProps);

export function useSelectedSubscription() {
  const value = useContext(SubscriptionContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error(
        "useSelectedSubscription must be wrapped in a <SubscriptionProvider />"
      );
    }
  }

  return value;
}

export const SubscriptionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activePlan, setActivePlan] = useState("");

  const handlePlanSelection = (plan: string) => {
    setActivePlan(plan);
  };

  return (
    <SubscriptionContext.Provider
      value={{
        activePlan,
        handlePlanSelection,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};
