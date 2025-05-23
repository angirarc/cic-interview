import ActivePolicy from '@/components/ActivePolicy';
import { activePolicies } from '@/fixtures/policies';
import { InsuranceTypes } from '@/lib/types';
import { Button, Text, View } from 'react-native';

// Mini App for Assets Insurance
const AssetsInsurance = () => {
  const activePolicy = activePolicies.find(pol => pol.type === InsuranceTypes.ASSETS);

  return (
      <View className="flex h-full w-full">
          {activePolicy && <ActivePolicy policy={activePolicy} />}
          <View className="w-full">
              <View className='flex w-full'>
                  <Text>Statement</Text>
                  <Button title="View More" />
              </View>
          </View>
      </View>
  );
}

export default AssetsInsurance;