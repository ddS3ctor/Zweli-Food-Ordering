import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import OrderListItem from '@/components/OrderListItem';
import { useAdminOrderList } from '@/api/orders';

const Stack = createNativeStackNavigator();

export default function OrderScreen() {

  const { data: orders, isLoading, error } = useAdminOrderList({ archived: true});

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch</Text>;
  }

  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
    />
  );
}