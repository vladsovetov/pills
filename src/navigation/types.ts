import { Route } from "expo-router";

export type RootStackParamList = {
  index: undefined;
  "+not-found": undefined;
  calendar: undefined;
  "calendar/[day]": { day: string };
};

// Helper type for useLocalSearchParams
export type RouteParams<T extends keyof RootStackParamList> = Partial<Route> &
  RootStackParamList[T];
