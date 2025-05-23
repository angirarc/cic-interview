import * as React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const SplashScreen = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="text-accent" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
