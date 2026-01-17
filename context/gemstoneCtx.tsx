import { Direction, GemStoneCategory } from "@/components/gem-stone/Types";
import { CATEGORIES } from "@/constants/Stone";
import React, { createContext, useContext, useState } from "react";

type ContextPropsType = {
  activeStone: GemStoneCategory;
  changeCurrentStone: (direction: Direction) => void;
};

const ContextProps = {
  activeStone: CATEGORIES[0],
  changeCurrentStone: (_: Direction) => undefined,
};

const GemStoneContext = createContext<ContextPropsType>(ContextProps);

export function useGemStone() {
  const value = useContext(GemStoneContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useGemStone must be wrapped in a <GemStoneProvider />");
    }
  }

  return value;
}

export const GemStoneProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeCategory, setActiveCategory] =
    useState<GemStoneCategory>("Life Stone");

  const getNextCategory = (current: GemStoneCategory): GemStoneCategory => {
    const currentIndex = CATEGORIES.indexOf(current);
    const nextIndex = (currentIndex + 1) % CATEGORIES.length;
    return CATEGORIES[nextIndex];
  };

  const getPreviousCategory = (current: GemStoneCategory): GemStoneCategory => {
    const currentIndex = CATEGORIES.indexOf(current);
    const previousIndex =
      (currentIndex - 1 + CATEGORIES.length) % CATEGORIES.length;
    return CATEGORIES[previousIndex];
  };

  const handlePress = (direction: Direction) => {
    if (direction === "next") {
      setActiveCategory(getNextCategory(activeCategory));
    } else {
      setActiveCategory(getPreviousCategory(activeCategory));
    }
  };
  return (
    <GemStoneContext.Provider
      value={{
        activeStone: activeCategory,
        changeCurrentStone: handlePress,
      }}
    >
      {children}
    </GemStoneContext.Provider>
  );
};
