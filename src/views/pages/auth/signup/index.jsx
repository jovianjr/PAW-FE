import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';

import AuthLayout from '@/views/layouts/auth-layout';

const SignUp = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            username: '',
            password: '',
            confirm_password: ''
        }
    });

    const onSubmit = () => {
        alert('submitted');
    };

    return (
        <AuthLayout onSubmit={handleSubmit(onSubmit)}>
            <h1 className="w-full text-center text-xl font-semibold lg:text-2xl">
                CREATE ACCOUNT
            </h1>
            <div className="flex w-full flex-col gap-4">
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
                    name="confirm_password"
                    fieldName="Confirm Password"
                    placeholder="Confirm Password"
                    type="password"
                    rules={{ required: true }}
                />
            </div>

            <div className="flex w-full items-center justify-between">
                <p className="text-xs lg:text-sm">
                    Already have an account?{' '}
                    <Link to="/login" className="font-semibold text-purple-700">
                        Login
                    </Link>
                </p>
                <Button type="submit">Sign Up</Button>
            </div>
        </AuthLayout>
    );
};

export default SignUp;
