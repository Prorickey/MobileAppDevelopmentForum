import { Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Library Management System</Text>
      <BookCatalog />
      <MembershipInfo />
    </View>
  );
}

function BookCatalog() {
  return (
    <View>
      <Text>📚 Available Books</Text>
      <BookItem />
      <Text>Total: 127 books</Text>
    </View>
  );
}

function MembershipInfo() {
  return (
    <View>
      <Text>👥 Membership Status</Text>
      <Text>Member: Sarah Johnson</Text>
      <Text>ID: LIB2024-0089</Text>
      <Text>Books Borrowed: 3</Text>
    </View>
  );
}

function BookItem() {
  return (
    <View>
      <Text>- React Native Development</Text>
      <Text>- JavaScript for Beginners</Text>
      <Text>- Mobile App Design</Text>
    </View>
  );
}