import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import {
    ArrowRightOnRectangleIcon,
    ArrowLeftOnRectangleIcon,
    Bars3Icon,
    Cog6ToothIcon,
    MagnifyingGlassIcon,
    UserCircleIcon
} from '@heroicons/react/24/outline';

import Dropdown from '@/views/components/dropdown';
import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';

const menuOptions = [
    {
        icon: UserCircleIcon,
        path: '/profile',
        name: 'profile',
        text: 'My Account'
    },
    {
        icon: Cog6ToothIcon,
        path: '/profile/settings',
        name: 'settings',
        text: 'Settings'
    },
    {
        icon: ArrowLeftOnRectangleIcon,
        path: '/',
        name: 'logout',
        text: 'Log out',
        className: 'text-red-500 !stroke-red-500'
    }
];

const menuOptionsMobile = [
    {
        icon: UserCircleIcon,
        path: '/profile',
        name: 'profile',
        text: 'My Account'
    },
    {
        icon: Cog6ToothIcon,
        path: '/profile/settings',
        name: 'settings',
        text: 'Settings'
    },
    {
        icon: ArrowRightOnRectangleIcon,
        path: '/login',
        name: 'Login',
        text: 'Sign In',
        className:
            'bg-purple-500 text-white stroke-white text-center mx-4 rounded-lg flex justify-center !py-3 mt-4'
    },
    {
        icon: ArrowLeftOnRectangleIcon,
        path: '/',
        name: 'logout',
        text: 'Log out',
        className:
            'text-red-500 !stroke-red-500 text-center mx-4 rounded-lg flex justify-center !py-3 mt-4'
    }
];

const Navbar = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, resetField } = useForm({
        defaulValues: { search: '' }
    });

    const onSubmitSearch = data => {
        navigate(`/search/${data.search}`);
    };

    const onClickDropdown = val => {
        if (
            !val.path ||
            !menuOptions.filter(option => option.path === val.path)
        )
            return;

        navigate(val.path);
    };

    return (
        <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-slate-300 py-4 px-6">
            <Link to="/">
                <h1 className="text-base font-black lg:text-lg">PAW</h1>
            </Link>
            <form
                className="hidden w-1/2 lg:block"
                onSubmit={handleSubmit(onSubmitSearch)}
            >
                <TextField
                    control={control}
                    icon={MagnifyingGlassIcon}
                    name="search"
                    placeholder="cari artwork"
                    resetField={() => resetField('search')}
                    className="w-full"
                    inputClassName="!py-2.5"
                    action={
                        <button
                            type="submit"
                            className="w-12 rounded border border-slate-300 bg-transparent py-1 text-sm transition-all hover:bg-slate-200"
                        >
                            Go
                        </button>
                    }
                />
            </form>
            <div className="hidden items-center gap-2 lg:flex">
                <Button href="/login" variant="secondary">
                    Login
                </Button>
                <Button href="/signup">Sign Up</Button>
            </div>
            <div className="hidden items-center gap-4 lg:flex">
                <Link
                    to="/art/new"
                    className="text-sm font-semibold hover:underline"
                >
                    Create
                </Link>
                <Dropdown
                    options={menuOptions}
                    itemClassName="pr-10"
                    onClick={val => onClickDropdown(val)}
                >
                    <img
                        src="https://picsum.photos/200"
                        className="aspect-square w-8 rounded-full border border-slate-300 object-cover"
                    />
                </Dropdown>
            </div>
            <div className="absolute right-0 top-0 flex h-full items-center gap-4">
                <Link
                    to="/art/new"
                    className="text-sm font-semibold hover:underline"
                >
                    Create
                </Link>
                <Dropdown
                    options={menuOptionsMobile}
                    panelClassName="w-screen px-2 py-2"
                    itemClassName="pr-10"
                    onClick={val => onClickDropdown(val)}
                    overlay
                >
                    <Bars3Icon className="h-6 w-10 px-2" />
                </Dropdown>
            </div>
        </header>
    );
};

export default Navbar;
