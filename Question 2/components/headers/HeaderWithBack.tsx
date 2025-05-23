
import { useRouter } from "expo-router";
import { ArrowLeft } from "iconsax-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const HeaderWithBack = ({ title, containerClasses = '' }: { title: string, containerClasses?: string }) => {
  const router = useRouter();

  return (
    <View className={ `flex-row px-5 pt-14 pb-2 bg-mainbg ${containerClasses}` }>
        <TouchableOpacity className="py-2 px-1" onPress={() => router.back()}>
            <ArrowLeft stroke="stroke-black" width="14" height="14" />
        </TouchableOpacity>
        <Text className="text-black ml-3  text-xl">{ title }</Text>
    </View>
  );
};

export default HeaderWithBack;