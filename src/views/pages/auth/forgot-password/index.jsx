import { useForm } from 'react-hook-form';

import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';

import AuthLayout from '@/views/layouts/auth-layout';

const ForgotPassword = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: ''
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
