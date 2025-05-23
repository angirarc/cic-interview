import * as React from "react";
import { useFonts } from "@/useFonts";
import SplashScreen from "./SplashScreen";
import useAuthStore from "@/lib/store/AuthStore";
import { Button, View } from "react-native";
import { Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import AppHeader from "@/components/headers/AppHeader";
import { StatusBar } from "expo-status-bar";

const App = () => {
  const router = useRouter();
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  const { state, getCurrentUser } = useAuthStore();
  React.useEffect(() => {
    const loadFonts = async () => {
      const loaded = await useFonts();
      setFontsLoaded(loaded);
    };

    loadFonts();
  }, []);

  const toLogin = () => router.replace('/login');
  const toHome = () => router.replace('/home');
  const retry = () => getCurrentUser();

  React.useEffect(() => {
    getCurrentUser(toHome)
  }, []);

  const isLoading = state.getCurrentUser.state === 'LOADING';
  const isError = state.getCurrentUser.state === 'ERROR';

  if (isLoading || !fontsLoaded) return <SplashScreen />;

  if (!isError) {
    return (
      <View className="flex h-screen w-screen justify-center items-center">
        <Text>Error: {state.getCurrentUser.error}</Text>;
        <View className="flex justify-center">
          <Button title="Go to Login" onPress={toLogin} />
          <Button title="Try Again" onPress={retry} />
        </View>
      </View>
    )
  }

  return (
    <Text>Line</Text>
  );
};

export default App;
