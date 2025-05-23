import ActivePolicy from '@/components/ActivePolicy';
import StatementEntry from '@/components/StatementEntry';
import { activePolicies, statementEntries } from '@/fixtures/policies';
import { InsuranceTypes } from '@/lib/types';
import { Button, Text, View } from 'react-native';

// Mini App for General Insurance
const GeneralInsurance = () => {
  const activePolicy = activePolicies.find(pol => pol.type === InsuranceTypes.GENERAL);

  return (
    <View className="flex h-full w-full">
      { activePolicy && <ActivePolicy policy={activePolicy} /> }
      <View className="w-full">
          <View className='flex w-full'>
            <Text>Statement</Text>
            <Button title="View More" />
          </View>
          {
            statementEntries.map(statement => <StatementEntry entry={statement} />)
          }
      </View>
    </View>
  );
}

export default GeneralInsurance;