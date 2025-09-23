import { Text, View } from 'react-native';

export default function App() {

  const dataToPassDown = "hello!"

  return (
    <View>
      <Text>Component Tree</Text>
      <UserProfile data={dataToPassDown} />
    </View>
  );
}

function UserProfile(props) {

  const passItDownAgain = props.data

  return (
    <View>
      <UserInfo data={passItDownAgain} />
    </View>
  );
}

function UserInfo(props) {

  const dataIsHere = props.data

  return (
    <View>
      <Text>John Doe</Text>
      <Text>{dataIsHere}</Text>
    </View>
  );
}