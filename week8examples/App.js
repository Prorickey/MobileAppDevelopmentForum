// npx create-expo-app@latest --template blank

import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

export default function App() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://api.open-notify.org/iss-now.json?api_key=sdjfshfds", {
          headers: {
            "Authorization": "Bearer "// + token
          }
        })
        const json = await response.json()
        setData(json)
      } catch(err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if(loading) return (
    <ActivityIndicator 
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      size="large" />
  )
  if(error) return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Error: {error}</Text>
    </View>
  )

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ISS Latitude: {data.iss_position.latitude}</Text>
      <Text>ISS Longitude: {data.iss_position.longitude}</Text>
    </View>
  );
};
