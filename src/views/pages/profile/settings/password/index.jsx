import { Cog6ToothIcon, BanknotesIcon } from '@heroicons/react/24/solid';
import { useParams } from 'react-router-dom';
import Button from '@/views/elements/button';
import { useForm } from 'react-hook-form';
import TextField from '@/views/elements/text-field';
import MainLayout from '@/views/layouts/main-layout';
const User = () => {
    const params = useParams();
    const {
        control,
        handleSubmit,
        reset,
        formState: { isDirty, isValid }
    } = useForm({
        defaultValues: {
            title: '',
            description: ''
        }
    });

    return (
        <div className="h-full">
            <h1 className="text-2xl font-semibold">Password</h1>

            <div className="flex h-full max-h-[75vh] flex-col gap-9 overflow-y-auto py-6">
                <Row
                    control={control}
                    name="current_password"
                    fieldName="Current Password"
                    placeholder="current password"
                />

                <Row
                    control={control}
                    name="new_password"
                    fieldName="New Password"
                    placeholder="new password"
                />

                <Row
                    control={control}
                    name="confirm_password"
                    fieldName="Confirm Password"
                    placeholder="confirm password"
                />

                <div className="flex w-full items-center gap-10">
                    <Button className="!px-10">Update</Button>

                    <button type="button" className="text-slate-500">
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

const Row = ({ control, name, fieldName, placeholder, textarea = false }) => {
    return (
        <div className="grid grid-cols-12 items-start py-1">
            <div className="col-span-3 pt-3">
                <label className="text-sm">{fieldName}</label>
            </div>
            <div className="col-span-9 h-full">
                <TextField
                    control={control}
                    name={name}
                    fieldName={fieldName}
                    placeholder={placeholder}
                    className="w-2/3"
                    inputClassName="border-none !text-sm"
                    rules={{ required: true }}
                    textarea={textarea}
                />
            </div>
        </div>
    );
};

export default User;
