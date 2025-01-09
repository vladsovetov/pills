import React from "react";
import { View, Text, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { RootStackParamList } from "@/src/navigation/types";
import { usePills } from "@/src/pills/hooks/usePills";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Pill } from "@/src/pills/types";
import { PillsContainer } from "@/src/pills/components/PillsContainer/PillsContainer";
import { formatTime } from "@/src/lib/utils";

const Item = ({
  hour,
  pills,
  day,
}: {
  hour: number;
  pills: Pill[];
  day: string;
}) => (
  <View className="flex-col items-center min-h-16 border-b-2 border-gray-200 p-2">
    <Text className="text-lg font-bold">{hour}</Text>
    <PillsContainer
      pills={pills}
      hourFormatted={formatTime(hour)}
      date={day}
      onUpdate={() => {}}
    />
  </View>
);

export default function DaySchedule() {
  const { day } = useLocalSearchParams<RootStackParamList["calendar/[day]"]>();
  const { data: pills = [], isLoading, error } = usePills(day);

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

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const data = hours.map((hour) => ({
    hour,
    pills: pills.filter((pill) => {
      const hourFormatted = formatTime(hour);
      return pill.startTime === hourFormatted;
    }),
  }));

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Item hour={item.hour} pills={item.pills} day={day} />
          )}
          keyExtractor={(item) => item.hour.toString()}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
