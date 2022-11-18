import { useMutation } from '@tanstack/react-query';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import LoadingScreen from '@/views/components/loading';

import announce from '@/views/components/announcement';
import RenderIf from '@/views/components/render-if';

import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';

import { AuthContext } from '@/utils/context/auth';
import { uploadFile } from '@/utils/services/artwork';
import { updateUser } from '@/utils/services/user';

const GeneralSettings = () => {
    const navigate = useNavigate();
    const { user, login } = useContext(AuthContext);
    const [image, setImage] = useState();

    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            email: '',
            username: '',
            name: '',
            title: '',
            bio: '',
            instagram: '',
            twitter: '',
            youtube: '',
            facebook: ''
        }
    });

    useEffect(() => {
        resetFields();
    }, [user]);

    const resetFields = () => {
        reset({
            email: user?.email,
            username: user?.username,
            name: user?.name,
            title: user?.title,
            bio: user?.bio,
            instagram: user?.instagram,
            twitter: user?.twitter,
            youtube: user?.youtube,
            facebook: user?.facebook
        });
        setImage(user?.image);
    };

    const imageUploadMutation = useMutation(data => uploadFile(data), {
        onSuccess: res => {
            setImage(res.url);
        },
        onError: err => {
            if (err.response) {
                const { data } = err.response;
                announce.error(data.errors);
            } else console.log(err);
        }
    });

    const updateUserMutation = useMutation(data => updateUser(data), {
        onSuccess: res => {
            announce.success('artwork has been created succesfully');
            login(res.data);
            navigate('/profile');
        },
        onError: err => {
            if (err.response) {
                const { data } = err.response;
                announce.error(data.errors);
            } else console.log(err);
        }
    });

    const onSubmit = data => {
        updateUserMutation.mutateAsync({
            image: image,
            name: data.name,
            title: data.title,
            bio: data.bio,
            instagram: data.instagram,
            twitter: data.twitter,
            youtube: data.youtube,
            facebook: data.facebook
        });
    };
    return (
        <>
            <LoadingScreen
                when={updateUserMutation.isLoading}
                text="Updating Profile"
            />
            <div className="h-full">
                <h1 className="text-2xl font-semibold">General Settings</h1>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex h-full max-h-[75vh] flex-col gap-9 overflow-y-auto py-6"
                >
                    <div className="flex flex-col">
                        <div className="grid grid-cols-12 items-center py-4">
                            <div className="col-span-12 lg:col-span-3">
                                <label className="text-sm">
                                    Profile picture
                                </label>
                            </div>
                            <div className="col-span-12 flex h-full items-center gap-4 lg:col-span-9">
                                <input
                                    className="hidden"
                                    name="photo"
                                    id="upload-photo"
                                    type="file"
                                    onChange={e =>
                                        imageUploadMutation.mutateAsync(
                                            e.target.files[0]
                                        )
                                    }
                                ></input>
                                <label
                                    className="flex cursor-pointer items-center gap-2 rounded py-6 transition-all hover:bg-purple-100 lg:p-4"
                                    htmlFor="upload-photo"
                                >
                                    <div className="h-full rounded border border-purple-300 py-3 px-3">
                                        <PhotoIcon className="h-5 w-5" />
                                    </div>
                                    <p className="text-start text-xs font-semibold text-purple-500">
                                        Upload image
                                    </p>
                                </label>
                                <RenderIf
                                    when={
                                        image &&
                                        (!imageUploadMutation.isLoading ||
                                            !imageUploadMutation.isFetching)
                                    }
                                >
                                    <div className="grid grid-cols-12 items-center">
                                        <div className="col-span-12 lg:col-span-3"></div>
                                        <div className="col-span-9 h-full">
                                            <img
                                                src={image}
                                                className="aspect-square w-20 rounded-full object-cover ring ring-slate-200"
                                            />
                                        </div>
                                    </div>
                                </RenderIf>
                                <RenderIf
                                    when={
                                        !!imageUploadMutation.isLoading ||
                                        !!imageUploadMutation.isFetching
                                    }
                                >
                                    <p className="px-4 text-sm">loading ... </p>
                                </RenderIf>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 items-start">
                        <div className="col-span-12 lg:col-span-3">
                            <label className="text-sm">Email</label>
                        </div>
                        <div className="col-span-12 lg:col-span-9">
                            {user?.email ?? '-'}
                        </div>
                    </div>

                    <div className="grid grid-cols-12 items-start">
                        <div className="col-span-12 lg:col-span-3">
                            <label className="text-sm">Username</label>
                        </div>
                        <div className="col-span-12 lg:col-span-9">
                            {user?.username ?? '-'}
                        </div>
                    </div>

                    <Row
                        control={control}
                        name="name"
                        fieldName="Display Name"
                        placeholder="display name"
                        required
                    />

                    <Row
                        control={control}
                        name="title"
                        fieldName="Title"
                        placeholder="title"
                    />

                    <Row
                        control={control}
                        name="bio"
                        fieldName="Bio"
                        placeholder="bio"
                        textarea
                    />

                    <Row
                        control={control}
                        name="instagram"
                        fieldName="Instagram"
                        placeholder="instagram"
                    />

                    <Row
                        control={control}
                        name="twitter"
                        fieldName="Twitter"
                        placeholder="twitter"
                    />

                    <Row
                        control={control}
                        name="youtube"
                        fieldName="Youtube"
                        placeholder="youtube"
                    />

                    <Row
                        control={control}
                        name="facebook"
                        fieldName="Facebook"
                        placeholder="facebook"
                    />

                    <div className="flex w-full items-center gap-10">
                        <Button className="!px-10" type="submit">
                            Update
                        </Button>

                        <button
                            type="button"
                            className="text-slate-500"
                            onClick={resetFields}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

const Row = ({
    control,
    name,
    fieldName,
    placeholder,
    textarea = false,
    required = false
}) => {
    return (
        <div className="grid grid-cols-12 items-start py-1">
            <div className="col-span-12 pt-3 lg:col-span-3">
                <label className="text-sm">{fieldName}</label>
            </div>
            <div className="col-span-12 h-full lg:col-span-9">
                <TextField
                    control={control}
                    name={name}
                    fieldName={fieldName}
                    placeholder={placeholder}
                    className="w-full lg:w-2/3"
                    inputClassName="border-none !text-sm"
                    rules={{ required: required }}
                    textarea={textarea}
                />
            </div>
        </div>
    );
};

export default GeneralSettings;
