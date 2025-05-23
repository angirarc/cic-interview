import { Notification } from "iconsax-react-native";
import React from "react";
import { Text, View } from "react-native";

import useAuthStore from "@/lib/store/AuthStore";

const AppHeader = () => {
    const { user, state } = useAuthStore();
    
    const isLoading = state.getCurrentUser.state === 'LOADING';
    const isError = state.getCurrentUser.state === 'ERROR';

    if (isLoading) {
        return (
            <View className="flex-row items-center justify-between px-4 py-2 bg-mainbg animate-pulse">
                <View className="flex-row items-center px-3">
                    <View className="w-8 h-8 rounded-full bg-gray-300"></View>
                    <View className="ml-2">
                        <View className="w-24 h-4 bg-gray-300 mb-2"></View>
                        <View className="w-32 h-6 bg-gray-300"></View>
                    </View>
                </View>
            </View>
        );
    }

    if (isError || !user) {
        return (
            <View className="flex-row items-center justify-between px-4 py-2 bg-gray-100">
                <Text>Error loading profile</Text>
            </View>
        );
    }

    return (
        <View
            className={`flex-row items-center justify-between pt-10 pb-2 bg-mainbg`}
        >
            <View className="flex-row items-center pl-5">
                <View className="ml-2">
                    <Text className="text-xs text-text-500">Welcome Back,</Text>
                    <Text className="text-xl text-neutral-900 font-DMSansSemiBold">
                        {user?.name}
                    </Text>
                </View>
            </View>
            <View className="pr-5">
                <Notification />
            </View>
        </View>
    );
};

export default AppHeader;