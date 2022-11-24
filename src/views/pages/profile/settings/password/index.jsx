import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import announce from '@/views/components/announcement';
import LoadingScreen from '@/views/components/loading';

import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';

import { updatePassword } from '@/utils/services/auth';

const User = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { control, reset, handleSubmit } = useForm({
        defaultValues: {
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        }
    });

    const updatePasswordMutation = useMutation(data => updatePassword(data), {
        onSuccess: res => {
            announce.success('password has been updated succesfully');
            navigate(`/profile`);
        },
        onError: err => {
            if (err.response) {
                const { data } = err.response;
                announce.error(data.errors);
            } else console.log(err);
        }
    });

    const onSubmit = e => {
        // console.log(data);
        updatePasswordMutation.mutateAsync({
            currentPassword: e.currentPassword,
            newPassword: e.newPassword,
            confirmPassword: e.confirmPassword
        });
    };

    return (
        <div className="h-full">
            <LoadingScreen
                when={updatePasswordMutation.isLoading}
                text="Updating Profile"
            />
            <h1 className="text-2xl font-semibold">Password</h1>

            <form
                className="flex h-full max-h-[75vh] flex-col gap-9 overflow-y-auto py-6"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Row
                    control={control}
                    name="currentPassword"
                    fieldName="Current Password"
                    placeholder="current password"
                />

                <Row
                    control={control}
                    name="newPassword"
                    fieldName="New Password"
                    placeholder="new password"
                />

                <Row
                    control={control}
                    name="confirmPassword"
                    fieldName="Confirm Password"
                    placeholder="confirm password"
                />

                <div className="flex w-full items-center gap-10">
                    <Button className="!px-10" type="submit">
                        Update
                    </Button>

                    <button
                        type="button"
                        className="text-slate-500"
                        onClick={() => reset()}
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

const Row = ({ control, name, fieldName, placeholder, textarea = false }) => {
    return (
        <div className="grid grid-cols-12 items-start gap-2 py-1 lg:gap-0">
            <div className="col-span-12 lg:col-span-3 lg:pt-3">
                <label className="text-sm">{fieldName}</label>
            </div>
            <div className="col-span-12 h-full lg:col-span-9">
                <TextField
                    control={control}
                    name={name}
                    fieldName={fieldName}
                    placeholder={placeholder}
                    type="password"
                    className="w-full lg:w-2/3"
                    inputClassName="border-none !text-sm"
                    rules={{ required: true }}
                    textarea={textarea}
                />
            </div>
        </div>
    );
};

export default User;
