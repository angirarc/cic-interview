import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

const AuthLayout = () => {
    return (
        <SafeAreaView className="h-full">
            <View className="pt-9">
                <StatusBar style="auto" />
                <ScrollView>
                    <Stack>
                        <Stack.Screen name="login" options={{ headerShown: false }} />
                    </Stack>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default AuthLayout