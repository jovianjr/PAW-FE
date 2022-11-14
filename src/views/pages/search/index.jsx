import MainLayout from '@/views/layouts/main-layout';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import ListArts from '@/views/pages/search/list-arts';
import ListUsers from '@/views/pages/search/list-users';

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
    return (
        <MainLayout className="min-h-screen pb-20">
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
                                75
                            </span>
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mx-auto px-10">
                    {tabItems?.map((item, index) => {
                        return (
                            <Tab.Panel key={index}>
                                <item.element />
                            </Tab.Panel>
                        );
                    })}
                </Tab.Panels>
            </Tab.Group>
        </MainLayout>
    );
};

export default Search;
