import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { getCalendarCells } from "./Calendar.utils";
import { CalendarCell } from "./CalendarCell";
import { format } from "date-fns";

export const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const cells = getCalendarCells(date.getFullYear(), date.getMonth());
  const navigateMonthDate = (direction: number) => {
    const nextMonthDate = new Date(date);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + direction);
    setDate(nextMonthDate);
  };

  return (
    <ScrollView className="flex-1 bg-white ">
      <View className="p-0">
        <Text className="text-xl font-bold text-center mb-4">
          {format(date, "MMMM yyyy")}
        </Text>
        <View className="flex-row mb-4">
          <Pressable
            className="flex-1 h-10 bg-blue-500 justify-center items-center"
            onPress={() => navigateMonthDate(-1)}
          >
            <Text className="text-white font-medium">Prev Month</Text>
          </Pressable>
          <Pressable
            className="flex-1 h-10 bg-blue-500 justify-center items-center border-l border-blue-400"
            onPress={() => setDate(new Date())}
          >
            <Text className="text-white font-medium">Go to Today</Text>
          </Pressable>
          <Pressable
            className="flex-1 h-10 bg-blue-500 justify-center items-center border-l border-blue-400"
            onPress={() => navigateMonthDate(1)}
          >
            <Text className="text-white font-medium">Next Month</Text>
          </Pressable>
        </View>
        <View className="flex-row bg-blue-300">
          {weekDays.map((day) => (
            <View
              key={day}
              className="flex-1 py-2 border-r border-blue-400 last:border-r-0"
            >
              <Text className="text-center text-white font-medium">{day}</Text>
            </View>
          ))}
        </View>
        <View className="flex-row flex-wrap justify-start border-l border-t border-gray-200">
          {cells.map(({ date, column, isCurrentDay }) => (
            <CalendarCell
              key={date.toString()}
              date={date}
              column={column}
              isCurrentDay={isCurrentDay}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
