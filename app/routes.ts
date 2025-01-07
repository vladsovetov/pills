export const ROUTES = {
  CALENDAR: {
    ROOT: "/calendar",
    DAY: (date: string) => `/calendar/${date}` as const,
  },
} as const;
