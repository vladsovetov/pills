import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { RootStackParamList } from "@/src/navigation/types";
import { usePills } from "@/src/pills/hooks/usePills";

export default function DaySchedule() {
  const { day } = useLocalSearchParams<RootStackParamList["calendar/[day]"]>();
  const { data, isLoading, error } = usePills(day);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
}
