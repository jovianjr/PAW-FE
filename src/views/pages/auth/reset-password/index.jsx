import { useQuery, useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

import announce from '@/views/components/announcement';
import LoadingScreen from '@/views/components/loading';
import StatusResult from '@/views/components/status-result';
import RenderIf from '@/views/components/render-if';

import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';

import AuthLayout from '@/views/layouts/auth-layout';
import MainLayout from '@/views/layouts/main-layout';

import { resetPassword, resetPasswordCheck } from '@/utils/services/auth';

const ResetPassword = () => {
    let [searchParams] = useSearchParams();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            password: '',
            confirmPassword: ''
        }
    });

    const { data, isLoading, isFetching, isError, isIdle } = useQuery(
        ['reset-password-check'],
        () => resetPasswordCheck(searchParams.get('token')),
        {
            refetchOnWindowFocus: false,
            refetchInterval: false,
            onSuccess: res => {},
            onError: err => {},
            retry: (failureCount, error) => {
                if (error?.response?.status === 498) return false;
                else if (failureCount === 2) return false;
                else return true;
            }
        }
    );

    const resetPasswordMutation = useMutation(data => resetPassword(data), {
        onSuccess: res => {
            console.log(res);
        },
        onError: err => {
            if (err.response) {
                const { data } = err.response;
                announce.error(data.errors);
            } else console.log(err);
        }
    });

    const onSubmit = data => {
        resetPasswordMutation.mutateAsync({
            token: searchParams.get('token'),
            password: data.password,
            confirmPassword: data.confirmPassword
        });
    };

    return (
        <>
            <LoadingScreen
                when={
                    isLoading || isFetching || resetPasswordMutation.isLoading
                }
            />
            <RenderIf when={resetPasswordMutation.isSuccess}>
                <MainLayout screen>
                    <StatusResult
                        type="success"
                        title="Your password has successfully changed!"
                        button="Back to Login"
                        href="/login"
                        className="!h-full"
                    />
                </MainLayout>
            </RenderIf>
            <RenderIf when={isError}>
                <MainLayout screen>
                    <StatusResult
                        type="danger"
                        title="Invalid / Expired Token"
                        button="Back to Login"
                        href="/login"
                        className="!h-full"
                    />
                </MainLayout>
            </RenderIf>
            <RenderIf when={resetPasswordMutation.isError}>
                <MainLayout screen>
                    <StatusResult
                        type="danger"
                        title="Your password cannot be reset at this time"
                        detail={
                            resetPasswordMutation?.error?.response?.data
                                ?.errors ?? 'Please try again'
                        }
                        button="Back to Login"
                        href="/login"
                        className="!h-full"
                    />
                </MainLayout>
            </RenderIf>
            <RenderIf
                when={
                    resetPasswordMutation.isIdle &&
                    !isError &&
                    !resetPasswordMutation.isSuccess &&
                    !resetPasswordMutation.isError
                }
            >
                <AuthLayout onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="w-full text-center text-xl font-semibold lg:text-2xl">
                        Change password for @{data?.data?.username}
                    </h1>
                    <div className="flex w-full flex-col gap-4">
                        <TextField
                            control={control}
                            className="w-full"
                            name="password"
                            fieldName="Password"
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

                    <Button className="w-full" type="submit">
                        Change password
                    </Button>
                </AuthLayout>
            </RenderIf>
        </>
    );
};

export default ResetPassword;
