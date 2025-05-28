import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { API_URL } from '../../env';  // adjust path if needed

type Item = {
  id: number;
  name: string;
  description: string;
};

export default function HomeScreen() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    axios.get(`${API_URL}/items/`)
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Item List</Text>
    //   <FlatList
    //     data={items}
    //     keyExtractor={(item) => item.id.toString()}
    //     renderItem={({ item }) => (
    //       <View style={styles.card}>
    //         <Text style={styles.name}>{item.name}</Text>
    //         <Text>{item.description}</Text>
    //       </View>
    //     )}
    //   />
    // </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>👋 Home screen is working!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { marginBottom: 15, padding: 15, backgroundColor: '#f8f8f8', borderRadius: 10 },
  name: { fontSize: 18, fontWeight: 'bold' },
});