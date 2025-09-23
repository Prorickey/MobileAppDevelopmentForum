import { Button, Text, View, useState } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)

  function click() {
    setCount(count+1)
  }

  return (
    <View>
      <Button onPress={click}>
        <Text>Click me!</Text>
      </Button>
      <CountCard count={count} />
    </View>
  );
}

function CountCard(props) {
  const count = props.count 

  return (
    <View>
        <Text>Count: {count}</Text>
    </View>
  )
}