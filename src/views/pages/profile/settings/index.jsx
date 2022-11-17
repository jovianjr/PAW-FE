import clsx from 'clsx';
import { useMemo, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import MainLayout from '@/views/layouts/main-layout';
import GeneralSettings from '@/views/pages/profile/settings/general';
import PasswordSettings from '@/views/pages/profile/settings/password';

import { AuthContext } from '@/utils/context/auth';
import jwt from '@/utils/services/jwt';

const tabItems = [
    { name: 'General settings', element: GeneralSettings },
    { name: 'Password', element: PasswordSettings }
];

const User = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    const [currentTab, setCurrentTab] = useState(0);

    const Element = useMemo(() => {
        return tabItems[currentTab].element;
    }, [currentTab]);

    const logoutHandler = () => {
        jwt.remove();
        logout();
        navigate('/');
    };

    return (
        <MainLayout screen className="overflow-hidden">
            <div className="flex h-full w-full gap-10 bg-slate-200 py-3 px-4">
                <div className="hidden h-full w-1/5 flex-col items-center gap-6 rounded bg-white py-8 px-6 lg:flex">
                    <img
                        src={user?.image}
                        className="aspect-square w-40 rounded-full object-cover ring ring-slate-200"
                    />
                    <div className="flex flex-col gap-1">
                        <h1 className="text-center text-xl font-semibold">
                            {user?.name}
                        </h1>

                        <h2 className="text-center text-sm font-normal">
                            {user?.title}
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
                        <button
                            className="w-full cursor-pointer py-4 px-3 text-start text-sm font-semibold  text-red-500 transition-all hover:bg-red-50"
                            onClick={logoutHandler}
                        >
                            Logout
                        </button>
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
