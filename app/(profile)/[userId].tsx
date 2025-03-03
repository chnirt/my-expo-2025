import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Profile() {
  const { userId } = useLocalSearchParams();

  return (
    <View className="flex-1 justify-center items-center">
      <Text>profile - {userId}</Text>
    </View>
  );
}
