import { useState } from 'react';
import { useForm } from 'react-hook-form';

import StatusResult from '@/views/components/status-result';

import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';

import AuthLayout from '@/views/layouts/auth-layout';

const ForgotPassword = () => {
    const [result, setResult] = useState();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: ''
        }
    });

    if (result === 'success')
        return (
            <StatusResult
                type="success"
                title="Your password has successfully changed!"
                button="Back to Login"
                href="/login"
            />
        );

    if (result === 'failed') {
        return (
            <StatusResult
                type="danger"
                title="Your password cannot be reset at this time"
                detail="Please try again"
                button="Back to Login"
                href="/login"
            />
        );
    }

    const onSubmit = () => {
        alert('submitted');
        setResult('failed');
    };

    return (
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
    );
};

export default ForgotPassword;
