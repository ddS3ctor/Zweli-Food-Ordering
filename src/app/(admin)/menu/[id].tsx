import { View, Text, Image, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { defaultPizzaImage } from '@/components/ProductListItem';
import { useState } from 'react';
import { useCart } from '@/provider/CartProvider';
import { PizzaSize } from 'src/types';
import Colors from '@/constants/Colors';
import { useProduct } from '@/api/products';


const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL']

const ProductDetailsScreen= () => {

    const { id: idString } = useLocalSearchParams();
    const id = parseFloat(typeof idString === 'string' ? idString : idString?.[0] || '');
    const { data: product, isLoading, error, } = useProduct(id);
    const { addItem } = useCart();
    const router = useRouter();

    const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');

    const addToCart = () => {
        if (!product){
            return;
        }
        addItem(product, selectedSize);
        console.warn('Added ' + product.name + ' to cart...');
        router.push('/cart');
    };
    
    if (isLoading){
        return <ActivityIndicator />
    };
    
    if (error){
        return <Text>Failed to fetch product!</Text>
    };

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                title: 'Menu',
                headerRight: () => (
                    <Link href={`/(admin)/menu/create?id=${idString}`}  asChild>
                    <Pressable>
                        {({ pressed }) => (
                        <FontAwesome
                            name="pencil"
                            size={25}
                            color={Colors.light.tint}
                            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                        />
                        )}
                    </Pressable>
                    </Link>
              ),
            }}
          />

            <Stack.Screen options={{ title: product?.name}} />
            <Image source={{ uri: product.image || defaultPizzaImage}} 
            style={styles.image}
            />

            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>R{product.price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10
    },

    image: {
        width: '100%',
        aspectRatio: 1,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },

});

export default ProductDetailsScreen;