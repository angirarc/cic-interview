import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';

const ProfileScreen = () => {
  const router = useRouter();
  return (
    <View className="flex h-full w-full justify-center items-center">
      <Text>Profile</Text>
    </View>
  );
}

export default ProfileScreen;