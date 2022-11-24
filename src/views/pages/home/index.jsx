import {
    MagnifyingGlassIcon,
    ChevronDownIcon,
    ChevronUpDownIcon
} from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';

import { CardArt } from '@/views/components/card';
import Dropdown from '@/views/components/dropdown';
import LoadingScreen from '@/views/components/loading';
import RenderIf from '@/views/components/render-if';

import MainLayout from '@/views/layouts/main-layout';

import genreOptions from '@/utils/constants/options/genre';
import { getAll } from '@/utils/services/artwork';

const menuOptions = [
    {
        icon: null,
        path: null,
        name: 'newest',
        text: 'Newest'
    },
    {
        icon: null,
        path: null,
        name: 'oldest',
        text: 'Oldest'
    }
];

const Home = () => {
    const navigate = useNavigate();
    const [sortBy, setSortBy] = useState('newest');
    const [genre, setGenre] = useState('');
    const { control, handleSubmit, resetField } = useForm({
        defaulValues: { search: '' }
    });

    const onSubmit = data => {
        navigate(`/search/${data.search}`);
    };

    const onClickDropdown = val => {
        setSortBy(val.name);
        return;
    };

    const { data, isLoading, isFetching } = useQuery(
        ['get-All', sortBy, genre],
        () => getAll(sortBy, genre),
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

    return (
        <>
            <LoadingScreen
                when={isLoading || isFetching}
                text="getting art..."
            />
            <MainLayout search={false} className="min-h-screen">
                <div className="flex items-center justify-center gap-2 py-4 px-5 lg:px-20">
                    <form
                        className="flex w-full items-center gap-0"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <TextField
                            control={control}
                            icon={MagnifyingGlassIcon}
                            name="search"
                            placeholder="Search artwork"
                            resetField={() => resetField('search')}
                            className="font-small w-4/5 text-sm lg:w-5/6 lg:font-medium"
                            inputClassName="!py-2.5 !rounded-r-none"
                        />
                        <Button
                            variant="secondary"
                            className="h-full w-1/5 !rounded-l-none border border-slate-300 !py-3 text-slate-900 hover:bg-slate-400"
                            type="submit"
                        >
                            Search
                        </Button>
                    </form>
                    <Dropdown
                        options={menuOptions}
                        className="lg:hidden"
                        itemClassName="text-xs font-small"
                        onClick={val => onClickDropdown(val)}
                        currentItem={sortBy}
                        activeClassName="!bg-slate-300"
                    >
                        <ChevronUpDownIcon className="h-7 w-7 text-slate-900 hover:text-white " />
                    </Dropdown>
                </div>

                <div className="hidden w-full justify-between px-20 pt-1 lg:flex">
                    <div className="flex w-full items-center gap-4">
                        {genreOptions.map((genreVal, index) => (
                            <button
                                key={index}
                                type="button"
                                className={clsx(
                                    'font-small w-auto rounded border border-slate-300 bg-transparent bg-white px-3 py-2 text-xs text-slate-700 transition-all hover:border-purple-200 hover:bg-purple-200 hover:text-slate-900',
                                    genre === genreVal.value
                                        ? 'order-first bg-purple-700 !text-white'
                                        : ''
                                )}
                                onClick={() => {
                                    if (genre === genreVal.value) setGenre('');
                                    else setGenre(genreVal.value);
                                }}
                            >
                                {genreVal.label}
                            </button>
                        ))}
                    </div>
                    <Dropdown
                        options={menuOptions}
                        itemClassName="pr-10 text-xs font-small hover:bg-slate-100 hover:text-slate-700"
                        onClick={val => onClickDropdown(val)}
                        currentItem={sortBy}
                        activeClassName="!bg-slate-300"
                    >
                        <span
                            type="button"
                            className="font-sm hidden w-28 items-center justify-between gap-4 rounded border border-slate-300 bg-transparent bg-white stroke-slate-700 px-4 py-2 text-xs text-slate-700 transition-all hover:border-slate-500
                    hover:bg-slate-500 hover:stroke-white hover:text-white lg:flex"
                        >
                            Sort by
                            <ChevronDownIcon className="h-4 w-4 stroke-inherit" />
                        </span>
                    </Dropdown>
                </div>
                <RenderIf when={data?.data?.length === 0}>
                    <div className="cols-pen item-center col-span-4 mt-20 w-auto text-center text-sm">
                        Sorry, there is no data found
                    </div>
                </RenderIf>
                <RenderIf when={data?.data?.length !== 0}>
                    <div className="grid gap-x-4 gap-y-6 px-6 py-4 lg:w-full lg:grid-cols-4 lg:px-20">
                        {data?.data?.map((val, index) => {
                            return (
                                <CardArt
                                    key={index}
                                    image={val.imgSrc}
                                    slug={val.slug}
                                    title={val.title}
                                    name={val.user_id?.name}
                                    username={val.user_id?.username}
                                    date_created={val.date_created}
                                />
                            );
                        })}
                    </div>
                </RenderIf>
            </MainLayout>
        </>
    );
};

export default Home;
