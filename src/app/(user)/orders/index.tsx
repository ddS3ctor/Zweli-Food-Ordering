import { FlatList } from 'react-native';
import OrderListItem from '@/components/OrderListItem';
import orders from '@assets/data/orders';
import { Stack } from 'expo-router';



export default function OrderScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Orders' }} />
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
        contentContainerStyle={{ gap: 10, padding: 10 }} 
      />
    </>
  );
}



