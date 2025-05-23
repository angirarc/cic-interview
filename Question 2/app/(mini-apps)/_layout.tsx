import HeaderWithBack from "@/components/headers/HeaderWithBack";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

const MiniAppsLayout = () => {
    return (
        <SafeAreaView className="h-full">
            <View className="pt-9">
                <StatusBar style="auto" />
                <ScrollView>
                    <Stack>
                        <Stack.Screen name="assets-insurance" options={{ header: () => <HeaderWithBack title="Assets Insurance" /> }} />
                        <Stack.Screen name="general-insurance" options={{ header: () => <HeaderWithBack title="General Insurance" /> }} />
                        <Stack.Screen name="life-insurance" options={{ header: () => <HeaderWithBack title="Life Insurance" /> }} />
                    </Stack>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default MiniAppsLayout