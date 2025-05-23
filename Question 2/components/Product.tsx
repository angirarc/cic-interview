import { MiniAppConfig } from "@/lib/config";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
    product: MiniAppConfig
}

const Product = ({ product }: Props) => {
    const router = useRouter();

    return (
        <TouchableOpacity onPress={ () => router.navigate(product.path)}>
            <View className="flex h-full w-full justify-between items-center">
                <product.Icon />
                <Text className="w-20">{ product.name }</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Product;