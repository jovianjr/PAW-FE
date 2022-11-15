import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import announce from '@/views/components/announcement';
import LoadingScreen from '@/views/components/loading';
import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';
import AuthLayout from '@/views/layouts/auth-layout';

import jwt from '@/utils/services/jwt';
import { login } from '@/utils/services/auth';
import { AuthContext } from '@/utils/context/auth';

const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            identity: '',
            password: ''
        }
    });

    const loginMutation = useMutation(data => login(data), {
        onSuccess: res => {
            jwt.set(res.data.token);
            auth.login(res.data.user);
            navigate('/');
        },
        onError: err => {
            if (err.response) {
                const { data } = err.response;
                announce.error(data.errors);
            } else console.log(err);
        }
    });

    const onSubmit = data => {
        loginMutation.mutateAsync(data);
    };

    return (
        <>
            <LoadingScreen when={loginMutation.isLoading} />
            <AuthLayout onSubmit={handleSubmit(onSubmit)}>
                <h1 className="w-full text-center text-xl font-semibold lg:text-2xl">
                    Welcome back!
                </h1>
                <div className="flex w-full flex-col gap-4">
                    <TextField
                        control={control}
                        className="w-full"
                        name="identity"
                        fieldName="Username / Email"
                        placeholder="Username / Email"
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
                            className="text-xs text-purple-700 lg:text-sm"
                        >
                            Forgot password?
                        </Link>
                    </div>
                </div>

                <div className="flex w-full items-center justify-between">
                    <p className="text-xs lg:text-sm">
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
        </>
    );
};

export default Login;
