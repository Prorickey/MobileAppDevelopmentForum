import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Details() {
  const { id, name } = useLocalSearchParams();
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>User ID: {id}</Text>
      <Text>User Name: {name}</Text>
    </View>
  );
}