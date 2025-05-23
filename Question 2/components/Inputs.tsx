import { NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, TextInputProps, TouchableOpacity, View } from "react-native";

import { Eye, EyeSlash, InfoCircle } from 'iconsax-react-native';
import { useState } from "react";

interface InputProps extends TextInputProps {
    placeholder?: string
    labelText?: string
    value?: string
    align?: 'top' | 'center' | 'auto' | 'bottom'
    onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void | undefined
    className?: string
    containerClasses?: string
    labelClasses?: string
    error?: string
    message?: string
}

export const Label: React.FC<{ text?: string, className?: string }> = ({ text, className = 'mt-2' }) => {
    if (!text)
        return null

    return <Text className={ `text-sm ${className}` }>{ text }</Text>
}

const BasicInput: React.FC<InputProps> = props => (
    <View className={ `w-full ${props.containerClasses}` }>
        <Label text={ props.labelText } className={ props.labelClasses } />
        <TextInput 
            { ...props }
            textAlignVertical={ props.align }
            className={ `border-2 rounded-md py-4 px-5 text-base ${props.className}` } />
        {props.message && <View className="flex flex-row mt-1 items-center"><InfoCircle size={16} color="#FF9800" /><Text className="ml-1 text-orange-500 text-xs">{props.message}</Text></View>}
        {props.error && <Text className="text-xs mt-1">{props.error}</Text>}
    </View>
)

export const PasswordInput: React.FC<InputProps> = props => {
    const [visible, setVisible] = useState(false)
    
    return (
        <View className={ `w-full ${props.containerClasses}` }>
            <Label text={ props.labelText } className={ props.labelClasses } />
            <View className="border-2 border-grayish flex items-center justify-between flex-row focus:border-secbtnstroke rounded-md py-4 px-5 bg-grayish focus:bg-greenish">
                <TextInput 
                    { ...props } 
                    textAlignVertical={ props.align }
                    secureTextEntry={ !visible } 
                    className={ `h-full font-DMSansRegular text-netural-500 text-base w-72 ${props.className}` } />
                <TouchableOpacity className="w-2/8" onPress={() => setVisible(!visible)}>
                    { visible ? <Eye /> : <EyeSlash /> }
                </TouchableOpacity>
            </View>
            {props.message && <View className="flex flex-row mt-1 items-center"><InfoCircle size={16} color="#FF9800" /><Text className="ml-1 text-orange-500 font-DMSansRegular text-xs">{props.message}</Text></View>}
            {props.error && <Text className="text-red-500 font-DMSansRegular text-xs mt-1">{props.error}</Text>}
        </View>
    )
}

export default BasicInput;