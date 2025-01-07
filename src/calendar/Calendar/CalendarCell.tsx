import React from "react";
import { View, Text, Pressable, StyleProp, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/src/navigation/types";
import { Link } from "expo-router";
import { ROUTES } from "@/app/routes";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export interface CalendarCellProps {
  column: number;
  date: Date;
  isCurrentDay?: boolean;
}

export const CalendarCell = ({
  date,
  column,
  isCurrentDay = false,
}: CalendarCellProps) => {
  const day = date.getDate();

  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

  return (
    <Link
      href={ROUTES.CALENDAR.DAY(formattedDate)}
      className={`w-[14.28%] aspect-square items-center justify-center border border-gray-200 p-1 ${
        isCurrentDay ? "bg-blue-100" : ""
      }`}
    >
      <Text
        className={`text-center text-gray-700 ${
          isCurrentDay ? "font-bold" : ""
        }`}
      >
        {day}
      </Text>
    </Link>
  );
};
