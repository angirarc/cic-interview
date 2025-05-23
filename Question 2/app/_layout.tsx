import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from 'react-native-paper'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import "@/assets/global.css";

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <StatusBar />
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout
