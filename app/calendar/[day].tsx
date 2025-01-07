import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { format, isValid, parse } from "date-fns";
import { RootStackParamList } from "@/src/navigation/types";

export default function DaySchedule() {
  const { day } = useLocalSearchParams<RootStackParamList["calendar/[day]"]>();
  const date = parse(day as string, "yyyy-MM-dd", new Date());
  if (!isValid(date)) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="px-4 py-6">
          <Text className="text-red-500">Invalid date format</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="px-4 py-6">
          {/* Header Section */}
          <View className="mb-6">
            <Text className="text-2xl font-bold text-gray-900">
              {format(date, "EEEE, MMMM d")}
            </Text>
            <Text className="text-gray-600 mt-1">Your schedule for today</Text>
          </View>

          {/* Schedule Content */}
          <View className="space-y-4">
            {/* Empty State */}
            <View className="py-8 flex items-center justify-center bg-gray-50 rounded-lg">
              <Text className="text-gray-500 text-center mb-2">
                No appointments scheduled
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
