import { Href, Router } from "expo-router";

let router: Router | null = null;
let currentRoute: string = "";

export const setRouter = (r: Router) => {
  router = r;
};

export const updateCurrentRoute = (route: string) => {
  currentRoute = route;
};

export const getCurrentRoute = () => currentRoute;

export const navigateIfNotAlreadyThere = (customPath: Href) => {
  if (router && currentRoute !== customPath) {
    router.push(customPath);
  }
};
