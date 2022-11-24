import { ChevronDownIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useMemo, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import MainLayout from '@/views/layouts/main-layout';
import GeneralSettings from '@/views/pages/profile/settings/general';
import PasswordSettings from '@/views/pages/profile/settings/password';

import { AuthContext } from '@/utils/context/auth';
import jwt from '@/utils/services/jwt';
import Dropdown from '@/views/components/dropdown';

const tabItems = [
    { text: 'General settings', name: 'general', element: GeneralSettings },
    { text: 'Password', name: 'password', element: PasswordSettings }
];

const menuOptions = [
    {
        icon: null,
        path: null,
        name: 'general',
        text: 'General Settings'
    },
    {
        icon: null,
        path: null,
        name: 'password',
        text: 'Change Password'
    }
];

const User = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    const [currentTab, setCurrentTab] = useState(0);

    const currentItem = useMemo(() => {
        return tabItems[currentTab].name;
    }, [currentTab]);

    const Element = useMemo(() => {
        return tabItems[currentTab].element;
    }, [currentTab]);

    const logoutHandler = () => {
        jwt.remove();
        logout();
        navigate('/');
    };

    const onClickDropdown = (val, index) => {
        setCurrentTab(index);
        return;
    };

    return (
        <MainLayout
            screen
            containerClassName="!h-full lg:!h-screen overflow-hidden"
        >
            <div className="flex h-full w-full flex-col gap-10 py-3 lg:flex-row lg:bg-slate-200 lg:px-4">
                <div className="flex h-full w-full flex-col items-center gap-6 rounded bg-white py-8 px-6 lg:w-1/5">
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
                    <div className="hidden w-full flex-col items-start gap-6 lg:flex">
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
                                    {val.text}
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
                <Dropdown
                    options={menuOptions}
                    className="flex h-10 w-full items-center justify-between border-y border-purple-700 bg-purple-50 py-4 px-4 text-start text-xs font-semibold text-purple-700 lg:hidden"
                    itemClassName="pr-10 text-xs font-small"
                    panelClassName="w-full"
                    currentItem={currentItem}
                    activeClassName="!bg-purple-100"
                    onClick={(val, index) => onClickDropdown(val, index)}
                    closeOnClick={true}
                >
                    {tabItems[currentTab].text}{' '}
                    <ChevronDownIcon className="h-4 w-4 stroke-purple-700" />
                </Dropdown>
                <div className="h-full w-full rounded bg-white px-4 py-5 lg:w-4/5 lg:py-8 lg:px-10">
                    <Element />
                </div>
            </div>
        </MainLayout>
    );
};
export default User;
