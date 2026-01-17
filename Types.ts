type NavigationTheme = "purple" | "white";

type ColorsType = "white" | "jacarta";

type DateDetails = {
  weekday: string;
  month: string;
  day: number;
  year: number;
};

type DateProps = {
  data: DateDetails;
  type?: ColorsType;
};

export { DateDetails, DateProps, NavigationTheme };
