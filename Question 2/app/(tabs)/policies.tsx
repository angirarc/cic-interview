import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';

const PoliciesScreen = () => {
  const router = useRouter();
  return (
    <View className="flex h-full w-full justify-center items-center">
      <Text>Policies</Text>
    </View>
  );
}

export default PoliciesScreen;