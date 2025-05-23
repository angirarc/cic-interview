import { PolicyModel } from "@/lib/types/models";
import { Text, View } from "react-native";

interface Props { policy: PolicyModel }

const ActivePolicy = ({ policy }: Props) => {
    return (
        <View className="flex h-full w-full justify-center items-center">
            <Text>{ policy.type }</Text>
            <View className="flex w-full justify-between">
                <View className="">
                    <Text>Policy Holder</Text>
                    <Text>{ policy.policyHolder }</Text>
                </View>
                <View className="">
                    <Text>Policy Number</Text>
                    <Text>{ policy.policyNumber }</Text>
                </View>
            </View>
            <View className="">
                <Text>Valid Until</Text>
                <Text>{ policy.validUntil.toString() }</Text>
            </View>
        </View>
    );
}

export default ActivePolicy;