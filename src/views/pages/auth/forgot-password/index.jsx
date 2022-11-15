import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import announce from '@/views/components/announcement';
import LoadingScreen from '@/views/components/loading';
import RenderIf from '@/views/components/render-if';
import StatusResult from '@/views/components/status-result';

import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';

import AuthLayout from '@/views/layouts/auth-layout';
import MainLayout from '@/views/layouts/main-layout';

import { forgotPassword } from '@/utils/services/auth';

const ForgotPassword = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: ''
        }
    });

    const forgotPasswordMutation = useMutation(data => forgotPassword(data), {
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
        forgotPasswordMutation.mutateAsync(data.email);
    };

    return (
        <>
            <LoadingScreen when={forgotPasswordMutation.isLoading} />
            <RenderIf when={forgotPasswordMutation.isSuccess}>
                <MainLayout screen>
                    <StatusResult
                        type="success"
                        title="Password reset email has been sent"
                        detail="Follow the directions in the email to reset your password"
                        button="Back to Login"
                        href="/login"
                        className="!h-full"
                    />
                </MainLayout>
            </RenderIf>
            <RenderIf
                when={
                    forgotPasswordMutation.isIdle ||
                    forgotPasswordMutation.isError
                }
            >
                <AuthLayout onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="w-full text-center text-xl font-semibold lg:text-2xl">
                        Reset your password
                    </h1>
                    <TextField
                        control={control}
                        className="w-full"
                        name="email"
                        fieldName="email"
                        placeholder="email"
                        type="email"
                        rules={{ required: true }}
                    />

                    <Button className="w-full" type="submit">
                        Send password reset email
                    </Button>
                </AuthLayout>
            </RenderIf>
        </>
    );
};

export default ForgotPassword;
