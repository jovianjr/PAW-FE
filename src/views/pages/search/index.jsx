import { Tab } from '@headlessui/react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import ListArts from '@/views/pages/search/list-arts';
import ListUsers from '@/views/pages/search/list-users';
import MainLayout from '@/views/layouts/main-layout';
import { useQuery } from '@tanstack/react-query';
import { searchByUser } from '@/utils/services/user';
import { searchByArtwork } from '@/utils/services/artwork';
import LoadingScreen from '@/views/components/loading';
import { useParams } from 'react-router-dom';

const tabItems = [
    {
        tabName: 'Arts',
        element: ListArts
    },
    {
        tabName: 'Users',
        element: ListUsers
    }
];

const Search = () => {
    const params = useParams();
    const [sortBy, setSortBy] = useState('newest');
    const [genre, setGenre] = useState('');

    // change to default
    useEffect(() => {
        setGenre('');
        setSortBy('newest');
    }, [params]);

    const artQuery = useQuery(
        ['search-by-artwork', params.keyword, sortBy, genre],
        () => searchByArtwork(params.keyword, sortBy, genre),
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

    const userQuery = useQuery(
        ['searchByUser', params.keyword],
        () => searchByUser(params.keyword),
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
                when={
                    artQuery.isLoading ||
                    artQuery.isFetching ||
                    userQuery.isLoading ||
                    userQuery.isFetching
                }
                text="searching..."
            />
            <MainLayout className="min-h-screen pb-20" search={params.keyword}>
                <Tab.Group>
                    <Tab.List className="w-full space-x-8 pt-10 pb-5 text-center text-[14px] font-semibold">
                        {tabItems?.map((val, index) => (
                            <Tab
                                key={index}
                                className={({ selected }) =>
                                    clsx(
                                        'px-4 py-2 focus:outline-0',
                                        selected
                                            ? 'border-b-2 border-slate-900 '
                                            : ''
                                    )
                                }
                            >
                                {val.tabName}
                                <span className="ml-2 rounded-lg bg-slate-200 px-2 text-xs">
                                    {index === 0
                                        ? artQuery.data?.data?.length ?? 0
                                        : userQuery.data?.data?.length ?? 0}
                                </span>
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mx-auto px-10">
                        {tabItems?.map((item, index) => {
                            return (
                                <Tab.Panel key={index}>
                                    <item.element
                                        dataArt={artQuery.data}
                                        dataUser={userQuery.data}
                                        {...{
                                            sortBy,
                                            setSortBy,
                                            genre,
                                            setGenre
                                        }}
                                    />
                                </Tab.Panel>
                            );
                        })}
                    </Tab.Panels>
                </Tab.Group>
            </MainLayout>
        </>
    );
};

export default Search;
