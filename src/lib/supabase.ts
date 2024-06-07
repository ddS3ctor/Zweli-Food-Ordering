import 'react-native-url-polyfill/auto';
import * as SecureStore from 'expo-secure-store';
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/database.types';

const ExpoSecureStoreAdapter = {
  
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },

  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value);
  },

  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key);
  },
};

const supabaseUrl = 'https://rszzobjqllnhjbolimxz.supabase.co';
const supabaseAnonKey = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzenpvYmpxbGxuaGpib2xpbXh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0NTc5OTksImV4cCI6MjAzMzAzMzk5OX0.MPIGqO6rUPv7akyDTHASIu8z8Y_1-EmhsovjRV6t7bY';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});