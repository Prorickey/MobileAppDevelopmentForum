import { Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Component Tree</Text>
      <UserProfile />
      <ActivityFeed />
    </View>
  );
}

function UserProfile() {
  return (
    <View>
      <Avatar />
      <UserInfo />
    </View>
  );
}

function ActivityFeed() {
  return (
    <View>
      <Text>Recent Activity</Text>
      <PostItem />
    </View>
  );
}

function Avatar() {
  return (
    <View>
      <Text>👤</Text>
    </View>
  );
}

function UserInfo() {
  return (
    <View>
      <Text>John Doe</Text>
      <Text>john@example.com</Text>
    </View>
  );
}

function PostItem() {
  return (
    <View>
      <Text>Sample Post</Text>
      <Text>This is a sample post content...</Text>
    </View>
  );
}