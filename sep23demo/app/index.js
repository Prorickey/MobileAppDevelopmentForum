import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  const user = { id: 42, name: "Jane Doe" };
  const router = useRouter();
  return (
    <View>
      <Text>🏠 Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          router.push({
            pathname: "/details",
            params: { id: user.id, name: user.name },
          })
        }
      ></Button>
    </View>
  );
}
