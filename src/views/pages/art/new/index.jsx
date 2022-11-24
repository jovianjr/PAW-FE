import { Transition } from '@headlessui/react';
import { CloudArrowUpIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useMutation } from '@tanstack/react-query';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import announce from '@/views/components/announcement';
import LoadingScreen from '@/views/components/loading';
import RenderIf from '@/views/components/render-if';

import { SpinIcon } from '@/views/elements/icons';
import TextField from '@/views/elements/text-field';
import Button from '@/views/elements/button';
import Select from '@/views/elements/select';

import MainLayout from '@/views/layouts/main-layout';
import genreOptions from '@/utils/constants/options/genre';
import { uploadFile, newArtwork } from '@/utils/services/artwork';

const ArtNew = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState();
    const {
        control,
        handleSubmit,
        reset,
        formState: { isDirty, isValid }
    } = useForm({
        defaultValues: {
            title: '',
            description: '',
            artist: '',
            dateCreated: '',
            genre: ''
        }
    });

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

    const newArtMutation = useMutation(data => newArtwork(data), {
        onSuccess: res => {
            announce.success('artwork has been created succesfully');
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
        newArtMutation.mutateAsync({
            title: data.title,
            description: data.description,
            artist: data.artist,
            dateCreated: data.dateCreation,
            image: image,
            genre: data.genre
        });
    };

    return (
        <>
            <LoadingScreen
                when={newArtMutation.isLoading}
                text="Submitting Artwork"
            />

            <MainLayout
                containerClassName="!h-full lg:!h-screen"
                className="flex !h-full py-5 px-7 lg:items-center lg:justify-center lg:py-20"
                screen
            >
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex h-full w-full flex-col items-center justify-center"
                >
                    <div className="flex h-full w-full flex-col items-center gap-14 lg:w-max lg:flex-row">
                        <div className="relative flex aspect-square w-full gap-4 rounded border border-slate-300 bg-slate-200 lg:h-[60vh]">
                            <Transition
                                show={
                                    !!imageUploadMutation.isLoading ||
                                    !!imageUploadMutation.isFetching
                                }
                                enter="transition-opacity duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity duration-500"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                className="absolute flex h-full w-full flex-col items-center justify-center gap-2 bg-white/75"
                            >
                                <SpinIcon className="h-8 w-8 animate-[loading-spin_1s_cubic-bezier(0.46,0.03,0.52,0.96)_infinite] lg:h-16 lg:w-16" />
                                <p className="text-xs font-medium">Uploading</p>
                            </Transition>
                            <RenderIf
                                when={
                                    !!image &&
                                    !imageUploadMutation.isLoading &&
                                    !imageUploadMutation.isFetching
                                }
                            >
                                <div className="flex aspect-square h-full w-full items-center justify-center">
                                    <img
                                        src={image}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <div
                                    className="absolute top-4 right-4 aspect-square w-10 cursor-pointer rounded-full bg-white p-2 shadow-md hover:bg-slate-100"
                                    onClick={() => setImage()}
                                >
                                    <TrashIcon />
                                </div>
                            </RenderIf>
                            <RenderIf
                                when={
                                    !image &&
                                    !imageUploadMutation.isLoading &&
                                    !imageUploadMutation.isFetching
                                }
                            >
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
                                    htmlFor="upload-photo"
                                    className="relative flex aspect-square h-full w-full cursor-pointer flex-col items-center justify-center transition-all hover:bg-slate-300"
                                >
                                    <CloudArrowUpIcon className="h-8 w-8 lg:h-10 lg:w-10" />
                                    <span className="text-sm font-semibold lg:text-base">
                                        Upload Here
                                    </span>
                                    <p className="absolute bottom-10 w-2/3 pt-10 text-center text-xs text-slate-500 lg:bottom-1/4 lg:mt-8">
                                        We recommend using high quality .jpg
                                        less than 10MB
                                    </p>
                                </label>
                            </RenderIf>
                        </div>
                        <div className="flex h-full w-full flex-col justify-between gap-4 overflow-auto overflow-x-hidden lg:h-[60vh] lg:max-h-[60vh]">
                            <div className="flex flex-col gap-4">
                                <TextField
                                    control={control}
                                    name="title"
                                    placeholder="Add your title"
                                    className="!bg-transparent"
                                    inputClassName="rounded-none border-y-0 border-x-0 border-slate-300 !bg-transparent text-sm lg:text-xl font-semibold text-slate-900 placeholder-shown:border-b-2 focus:border-b-2 focus:!outline-none"
                                    rules={{ required: true }}
                                />
                                <TextField
                                    textarea
                                    control={control}
                                    name="description"
                                    fieldName="description"
                                    placeholder="Describe your art"
                                    className="!bg-transparent"
                                    inputClassName="max-h-[30vh] min-h-[30vh] rounded-none border-y-0 border-x-0 border-slate-300 !bg-transparent text-sm lg:text-base text-slate-900 placeholder-shown:border-b-2 focus:border-b-2 focus:!outline-none"
                                    rules={{ required: true }}
                                />
                            </div>
                            <div className="flex flex-col gap-2 lg:gap-4">
                                <div className="flex min-w-[30vw] flex-col items-center gap-4 lg:flex-row">
                                    <TextField
                                        control={control}
                                        name="artist"
                                        placeholder="Artist Name"
                                        className="w-full !bg-transparent lg:w-2/3"
                                        inputClassName="rounded-none border-y-0 border-x-0 border-slate-300 !bg-transparent text-sm lg:text-base font-medium text-slate-900 placeholder-shown:border-b-2 focus:border-b-2 focus:!outline-none"
                                        rules={{ required: true }}
                                    />
                                    <TextField
                                        control={control}
                                        type="date"
                                        name="dateCreation"
                                        fieldName="Date Creation"
                                        placeholder="Date Creation"
                                        className="w-full !bg-transparent lg:w-1/3"
                                        inputClassName={clsx(
                                            'rounded-none border-x-0 border-t-0 border-b-2 border-slate-300 !bg-transparent text-sm lg:text-base font-medium text-slate-900',
                                            `valid:border-none valid:!text-slate-900 valid:before:!content-[''] invalid:!text-transparent`,
                                            `focus:border-b-2 focus:!text-slate-900 focus:!outline-none focus:before:!content-['']`
                                        )}
                                        rules={{ required: true }}
                                    />
                                </div>
                                <Select
                                    isMulti
                                    options={genreOptions}
                                    control={control}
                                    name="genre"
                                    rules={{ required: true }}
                                />
                            </div>
                            <div className="mt-4 flex w-full items-center justify-end gap-10">
                                <RenderIf when={isDirty && isValid && !!image}>
                                    <button
                                        className="text-sm text-purple-700"
                                        onClick={() => reset()}
                                    >
                                        clear
                                    </button>
                                </RenderIf>
                                <Button
                                    type="submit"
                                    disabled={!isDirty || !isValid || !image}
                                >
                                    Finish & Upload
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </MainLayout>
        </>
    );
};

export default ArtNew;
