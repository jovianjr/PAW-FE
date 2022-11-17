import {
    MagnifyingGlassIcon,
    ChevronDownIcon,
    ChevronUpDownIcon
} from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import MainLayout from '@/views/layouts/main-layout';
import TextField from '@/views/elements/text-field';
import Dropdown from '@/views/components/dropdown';
import { CardArt } from '@/views/components/card';
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

    const { data, isLoading, isFetching, isError, isIdle } = useQuery(
        ['get-All', sortBy],
        () => getAll(sortBy),
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
        <MainLayout>
            <form
                className="flex w-full items-center gap-0 px-5 py-4 lg:px-20"
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    control={control}
                    icon={MagnifyingGlassIcon}
                    name="search"
                    placeholder="Search artwork"
                    resetField={() => resetField('search')}
                    className="font-small w-3/4 text-sm lg:w-5/6 lg:font-medium"
                    inputClassName="!py-2.5"
                    action={
                        <button
                            type="button"
                            className="w-12 rounded border border-slate-300 bg-transparent py-1 text-sm transition-all hover:bg-slate-200"
                        >
                            Go
                        </button>
                    }
                />
                <button
                    type="submit"
                    className="font-small text-black-700 w-1/4 rounded border border-slate-300 bg-transparent bg-slate-300 py-3 text-xs transition-all hover:border-black hover:bg-black hover:text-white lg:w-1/6
                    lg:py-2.5 lg:text-sm lg:font-medium"
                    to="/search"
                >
                    Search
                </button>
                <Dropdown
                    options={menuOptions}
                    itemClassName="pr-10 text-xs font-small"
                    onClick={val => onClickDropdown(val)}
                >
                    <ChevronUpDownIcon className="h-7 w-7 text-slate-900 hover:text-white lg:hidden" />
                </Dropdown>
            </form>

            <div className="flex w-full justify-between px-20 pt-1">
                <div className="hidden w-full items-center gap-5 lg:flex">
                    {[
                        'Animal',
                        'Panorama',
                        'Decorative',
                        'Photography',
                        'Digital'
                    ].map((val, index) => (
                        <button
                            key={index}
                            type="button"
                            className="font-small text-black-700 w-auto rounded border border-slate-300 bg-transparent bg-white px-3 py-2 text-xs transition-all hover:border-black hover:bg-black hover:text-white"
                        >
                            {val}
                        </button>
                    ))}
                </div>
                <Dropdown
                    options={menuOptions}
                    itemClassName="pr-10 text-xs font-small"
                    onClick={val => onClickDropdown(val)}
                >
                    <button
                        type="button"
                        className="gap 4 font-small text-black-700 hidden w-24 items-center rounded border border-slate-300 bg-transparent bg-white px-4 py-2 text-xs transition-all hover:border-black
                    hover:bg-black hover:text-white lg:flex"
                    >
                        Sort by
                        <ChevronDownIcon className="h-4 w-4 text-slate-900 hover:text-white" />
                    </button>
                </Dropdown>
            </div>
            <div className="grid gap-x-4 gap-y-6 px-20 py-4 lg:w-full lg:grid-cols-4">
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
            {/* <div className="h-screen"></div> */}
        </MainLayout>
    );
};

export default Home;
