import BasicInput, { PasswordInput } from "@/components/Inputs";
import { loginPayload, loginSchema } from "@/lib/schema/auth";
import useAuthStore from "@/lib/store/AuthStore";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Button, Text } from "react-native";

const Login = () => {
    const { state, userLogin } = useAuthStore();

    // form validation logic
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<loginPayload>({
        resolver: yupResolver(loginSchema),
        mode: "onChange",
    });

    // form submit logic
    const submit = handleSubmit((payload) => userLogin(payload));

    return (
        <>
            <Text
                className="ml-1 mt-3 mb-2 font-normal text-base"
            >
                Welcome back
            </Text>
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <BasicInput
                        keyboardType="email-address"
                        value={value}
                        containerClasses="mt-4 mb-2"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder="Phone Number"
                        error={errors.email?.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <PasswordInput
                        value={value}
                        containerClasses="my-4"
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder="Password"
                        error={errors.password?.message}
                    />
                )}
            />

            <Button
                title="Sign In"
                onPress={submit}
                disabled={!isValid || state.userLogin.state === 'LOADING'}
            />
        </>
    )
}

export default Login;