import Colors from '@/src/constants/Colors';
import { StyleSheet, Text, View } from 'react-native';
import products from '@/assets/data/products';
import { Image } from 'react-native';

const product = products[1];

//using JSX
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style= {styles.image} />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>R{product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  }
});
