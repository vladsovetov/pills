import { Pill } from "@/src/pills/types";
import { Text, View } from "react-native";
import { Button } from "@/src/shared/Button";

interface PillsContainerProps {
  pills: Pill[];
  hourFormatted: string;
  date: string;
  onUpdate: () => void;
}

export const PillsContainer = ({
  pills,
  hourFormatted,
  date,
  onUpdate,
}: PillsContainerProps) => {
  return (
    <View className="flex-col items-center gap-2">
      <Button className="bg-orange-400" onPress={onUpdate}>
        Add pill
      </Button>
      {pills.map((pill) => (
        <Button className="flex-row p-0" variant="outline">
          <View style={{ backgroundColor: pill.color }} className="flex-1 p-4">
            <Text className=" text-white text-center" key={pill.id}>
              {pill.name} ({pill.quantity})
            </Text>
          </View>
        </Button>
      ))}
    </View>
  );
};
