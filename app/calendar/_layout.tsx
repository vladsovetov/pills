import { Stack } from "expo-router";
import { format } from "date-fns";

export default function ScheduleLayout() {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="[day]"
        options={({ route }) => {
          const { day } = route.params as { day: string };
          return {
            title: isNaN(new Date(day).getTime())
              ? "Schedule"
              : format(new Date(day), "MMMM d, yyyy"),
          };
        }}
      />
    </Stack>
  );
}
