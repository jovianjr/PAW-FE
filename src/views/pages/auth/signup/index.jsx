import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import announce from '@/views/components/announcement';
import LoadingScreen from '@/views/components/loading';
import RenderIf from '@/views/components/render-if';
import StatusResult from '@/views/components/status-result';

import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';

import AuthLayout from '@/views/layouts/auth-layout';
import MainLayout from '@/views/layouts/main-layout';

import { signUp } from '@/utils/services/auth';

const SignUp = () => {
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        }
    });

    const signUpMutation = useMutation(data => signUp(data), {
        onSuccess: res => {},
        onError: err => {
            if (err.response) {
                const { data } = err.response;
                announce.error(data.errors);
            } else console.log(err);
        }
    });

    const onSubmit = data => {
        signUpMutation.mutateAsync({
            name: data.username,
            email: data.email,
            username: data.username,
            password: data.password,
            confirmPassword: data.confirmPassword
        });
    };

    return (
        <>
            <LoadingScreen when={signUpMutation.isLoading} />
            <RenderIf when={signUpMutation.isSuccess}>
                <MainLayout screen>
                    <StatusResult
                        type="success"
                        title="An activation email has been sent"
                        detail="Follow the directions in the email to activate your account"
                        button="Back to Login"
                        href="/login"
                        className="!h-full"
                    />
                </MainLayout>
            </RenderIf>
            <RenderIf when={!signUpMutation.isSuccess}>
                <AuthLayout onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="w-full text-center text-xl font-semibold lg:text-2xl">
                        CREATE ACCOUNT
                    </h1>
                    <div className="flex w-full flex-col gap-4">
                        <TextField
                            control={control}
                            className="w-full"
                            name="name"
                            fieldName="Full Name"
                            placeholder="Full Name"
                            rules={{ required: true }}
                        />
                        <TextField
                            control={control}
                            className="w-full"
                            name="email"
                            fieldName="email"
                            placeholder="email"
                            type="email"
                            rules={{ required: true }}
                        />
                        <TextField
                            control={control}
                            className="w-full"
                            name="username"
                            fieldName="Username"
                            placeholder="Username"
                            rules={{ required: true }}
                        />
                        <TextField
                            control={control}
                            className="w-full"
                            name="password"
                            fieldName="password"
                            placeholder="Password"
                            type="password"
                            rules={{ required: true }}
                        />
                        <TextField
                            control={control}
                            className="w-full"
                            name="confirmPassword"
                            fieldName="Confirm Password"
                            placeholder="Confirm Password"
                            type="password"
                            rules={{ required: true }}
                        />
                    </div>

                    <div className="flex w-full items-center justify-between">
                        <p className="text-xs lg:text-sm">
                            Already have an account?{' '}
                            <Link
                                to="/login"
                                className="font-semibold text-purple-700"
                            >
                                Login
                            </Link>
                        </p>
                        <Button type="submit">Sign Up</Button>
                    </div>
                </AuthLayout>
            </RenderIf>
        </>
    );
};

export default SignUp;
