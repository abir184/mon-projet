```jsx
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import products from '../data/products';

export default function ProductScreen() {
  return (
    <ScrollView style={styles.container}>
      {products.map((item) => (
        <View key={item.id} style={styles.product}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
          />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price} DT</Text>
          <Text>{item.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 35,
  },
  product: {
    padding: 15,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginVertical: 5,
  },
});
```