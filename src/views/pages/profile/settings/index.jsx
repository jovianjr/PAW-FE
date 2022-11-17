import clsx from 'clsx';
import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import MainLayout from '@/views/layouts/main-layout';
import GeneralSettings from '@/views/pages/profile/settings/general';
import PasswordSettings from '@/views/pages/profile/settings/password';

const tabItems = [
    { name: 'General settings', element: GeneralSettings },
    { name: 'Password', element: PasswordSettings },
    { name: 'Help', element: GeneralSettings }
];

const User = () => {
    const params = useParams();
    const [currentTab, setCurrentTab] = useState(0);

    const Element = useMemo(() => {
        return tabItems[currentTab].element;
    }, [currentTab]);

    return (
        <MainLayout screen className="overflow-hidden">
            <div className="flex h-full w-full gap-10 bg-slate-200 py-3 px-4">
                <div className="hidden h-full w-1/5 flex-col items-center gap-6 rounded bg-white py-8 px-6 lg:flex">
                    <img
                        src="https://picsum.photos/200/300"
                        className="aspect-square w-40 rounded-full ring ring-slate-200"
                    />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-center text-xl font-semibold">
                            John Doe
                        </h1>

                        <h2 className="text-center text-sm font-normal">
                            Martial Artist
                        </h2>
                    </div>
                    <div className="flex w-full flex-col items-start gap-6">
                        {tabItems.map((val, index) => {
                            return (
                                <h3
                                    key={index}
                                    className={clsx(
                                        'w-full cursor-pointer py-4 px-3 text-sm font-semibold  transition-all hover:text-purple-500',
                                        currentTab === index
                                            ? 'bg-purple-50 text-purple-700'
                                            : ''
                                    )}
                                    onClick={() => setCurrentTab(index)}
                                >
                                    {val.name}
                                </h3>
                            );
                        })}
                        <h3 className="w-full cursor-pointer py-4 px-3 text-sm font-semibold  text-red-500 transition-all hover:bg-red-50">
                            Logout
                        </h3>
                    </div>
                </div>

                <div className="h-full w-4/5 rounded bg-white py-8 px-10">
                    <Element />
                </div>
            </div>
        </MainLayout>
    );
};
export default User;
