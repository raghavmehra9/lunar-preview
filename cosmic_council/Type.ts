import React from "react";

type PanChangTypes = "nakshatra" | "tithi" | "karan";

type ColorCategoryObject = {
  section: string;
  background: string;
};

type ChildrenProps = { children: React.ReactNode };

type CouncilCardProps = {
  children: React.ReactNode;
  title: PanChangTypes;
  subTitle: string;
};

type CouncilCardBodyProps = {
  label?: BodyLabel;
  value: string;
  title: PanChangTypes;
  className?: string;
};

type BodyLabel = "Name" | "Meaning" | "Good for" | "Not so good for" | "Avoid";

type TithiDetails = {
  name: string;
  meaning: string;
};

type NakshatraDetails = {
  name: string;
  goodFor: string;
  notGoodFor: string;
};

type KaranaDetails = {
  name: string;
  meaning: string;
  goodFor: string;
  avoid: string;
};

type DetailProps<T> = {
  data: T;
};

type DateDetails = {
  weekday: string;
  month: string;
  day: number;
  year: number;
};

type DateProps = {
  data: DateDetails;
};

export {
  BodyLabel,
  ChildrenProps,
  ColorCategoryObject,
  CouncilCardBodyProps,
  CouncilCardProps,
  DetailProps,
  KaranaDetails,
  NakshatraDetails,
  PanChangTypes,
  TithiDetails,
  DateProps,
  DateDetails,
};
