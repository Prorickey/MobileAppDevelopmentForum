import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>🏠 Home Screen</Text>
      <Link href="/details">Go to Details</Link>
    </View>
  );
}