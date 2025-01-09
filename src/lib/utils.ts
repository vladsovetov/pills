import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const formatTime = (hour: number): string => {
  return hour < 10 ? `0${hour}:00` : `${hour}:00`;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
