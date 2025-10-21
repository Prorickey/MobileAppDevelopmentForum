import { StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { ThemeProvider, useTheme } from './Theme'

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const theme = useTheme();

  function cameraButton() {
    console.log("Pressed")
  }

  return (
    <View style={{ 
      backgroundColor: theme.colors.secondary, 
      marginVertical: "auto", 
      justifyContent: "center", 
      alignItems: "center",
      padding: theme.spacing.medium
    }}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={[styles.container, { backgroundColor: theme.colors.primary, padding: theme.spacing.medium }]}>
        <Text style={{ color: theme.colors.danger }}>This text is styled in a different way than the other boxes</Text>
      </View>
      <View style={[styles.container, { backgroundColor: theme.colors.primary, padding: theme.spacing.medium }]}>
        <Button icon="camera" mode="contained" onPress={cameraButton}>
          Press me
        </Button>
      </View>
      <View style={[styles.container, { backgroundColor: theme.colors.primary, padding: theme.spacing.medium }]}>
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});
