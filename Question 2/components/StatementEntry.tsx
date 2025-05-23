import { StatementEntryModel } from "@/lib/types/models";
import { Text, View } from "react-native";

interface Props {
    entry: StatementEntryModel
}

// Component showing statement entries
const StatementEntry = ({ entry }: Props) => {
    return (
        <View className="flex w-full justify-between items-center">
            <View className="">
                <Text className="">{entry.paymentMethod}</Text>
                <Text>{entry.date.toString()}</Text>
            </View>
            <Text>Ksh. { entry.amount }</Text>
        </View>
    )
}

export default StatementEntry;