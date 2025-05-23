import ActivePolicy from '@/components/ActivePolicy';
import Product from '@/components/Product';
import { activePolicies } from '@/fixtures/policies';
import miniAppConfig from '@/constants/config';
import { useRouter } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

// Home Screen
const HomeScreen = () => {
  const router = useRouter();
  return (
    <View className="flex h-full w-full justify-center items-center">
      <Text>Welcome Back,</Text>
      <ScrollView horizontal className='w-full'>
        {
          activePolicies.map((policy, i) => <ActivePolicy key={i} policy={ policy } />)
        }
      </ScrollView>
      <View className="w-full">
          <Text>Check Out Our Products</Text>
        <View className="w-full pt-6 grid">
          {
            miniAppConfig.map((app, i) => (
              <Product key={i} product={app} />
            ))
          }
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;