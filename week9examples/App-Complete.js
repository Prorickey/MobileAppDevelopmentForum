import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);

  const BACKEND_URL = 'http://192.168.145.51:8080';

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await fetch(BACKEND_URL + "/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if(data.error){
        alert('Login failed: ' + data.error);
        return;
      }
      
      if (data.id) {
        await AsyncStorage.setItem('userId', data.id.toString());
        setUserId(data.id);
      } else {
        alert('Login failed');
      }
    } catch (err) {
      console.error(err);
      alert('Error logging in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basic Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title={loading ? 'Logging in...' : 'Login'} onPress={handleLogin} />
      {userId && <Text style={styles.user}>User ID: {userId}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20,
    backgroundColor: '#ffffff'
  },
  title: { 
    fontSize: 24, 
    textAlign: 'center', 
    marginBottom: 20,
    color: '#333333',
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    color: '#333333'
  },
  user: { 
    marginTop: 20, 
    fontSize: 18, 
    textAlign: 'center',
    color: '#007AFF',
    fontWeight: '600'
  },
});
