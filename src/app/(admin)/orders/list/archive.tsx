import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList } from 'react-native';
import OrderListItem from '@/components/OrderListItem';
import orders from '@assets/data/orders';

const Stack = createNativeStackNavigator();

export default function OrderScreen() {
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
    />
  );
}