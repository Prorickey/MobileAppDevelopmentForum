import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { ThemeProvider, useTheme } from './Theme';

export default function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  )
}

function HomePage() {
  const theme = useTheme()

  function cameraPress() {
    console.log("Pressed")
  }

  return (
    <View style={{
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: "auto"
    }}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={[styles.container, { backgroundColor: theme.colors.secondary }]}>
        <Text>Style this text differently</Text>
      </View>
      <View style={styles.container}>
        <Button icon="camera" mode="contained" onPress={cameraPress}>
          Press Me
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#31ffb7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});
