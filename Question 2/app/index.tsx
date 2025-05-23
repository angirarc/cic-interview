import * as React from "react";
import { useRouter } from "expo-router";
import { Button, View, Text } from "react-native";

import useAuthStore from "@/lib/store/AuthStore";

import SplashScreen from "./SplashScreen";

const App = () => {
  const router = useRouter();

  const { state, getCurrentUser } = useAuthStore();

  const toLogin = () => router.replace('/login');
  const toHome = () => router.replace('/home');
  const retry = () => getCurrentUser();

  React.useEffect(() => {
    getCurrentUser(toHome)
  }, []);

  const isLoading = state.getCurrentUser.state === 'LOADING';
  const isError = state.getCurrentUser.state === 'ERROR';

  if (isLoading) return <SplashScreen />;

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
