import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  const user = {id: 20, name: "John Doe"}

  return (
    <View>
      <Text>🏠 Home Screen</Text>
      <Button title="Go to Details" onPress={()=>router.push({
        pathname: '/details',
        params: { id: user.id, name: user.name}
      })}>
      </Button>
    </View>
  );
}