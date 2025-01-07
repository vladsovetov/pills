import { Link } from "expo-router";
import { Text, View } from "react-native";
import { ROUTES } from "./routes";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Home</Text>
      <Link href={ROUTES.CALENDAR.ROOT}>
        <Text className="text-blue-500">Go to Calendar</Text>
      </Link>
    </View>
  );
}
