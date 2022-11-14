import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';

import AuthLayout from '@/views/layouts/auth-layout';

const Login = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });

    const onSubmit = () => {
        alert('submitted');
    };

    return (
        <AuthLayout onSubmit={handleSubmit(onSubmit)}>
            <h1 className="w-full text-center text-2xl font-semibold">
                Reset your password
            </h1>
            <div className="flex w-full flex-col gap-4">
                <TextField
                    control={control}
                    className="w-full"
                    name="username"
                    fieldName="Username"
                    placeholder="Username"
                    rules={{ required: true }}
                />
                <div className="flex w-full flex-col items-end gap-2">
                    <TextField
                        control={control}
                        className="w-full"
                        name="password"
                        fieldName="Password"
                        placeholder="Password"
                        type="password"
                        rules={{ required: true }}
                    />
                    <Link
                        to="/forgot-password"
                        className="text-sm text-purple-700"
                    >
                        Forgot password?
                    </Link>
                </div>
            </div>

            <div className="flex w-full items-center justify-between">
                <p className="text-sm">
                    Don’t have any account?{' '}
                    <Link
                        to="/signup"
                        className="font-semibold text-purple-700"
                    >
                        Sign Up
                    </Link>
                </p>
                <Button type="submit">Login</Button>
            </div>
        </AuthLayout>
    );
};

export default Login;
