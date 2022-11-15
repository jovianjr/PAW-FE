import clsx from 'clsx';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import {
    ArrowLeftOnRectangleIcon,
    ArrowRightOnRectangleIcon,
    Bars3Icon,
    MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

import Dropdown from '@/views/components/dropdown';
import RenderIf from '@/views/components/render-if';
import Button from '@/views/elements/button';
import TextField from '@/views/elements/text-field';
import { AuthContext } from '@/utils/context/auth';

import {
    menuOptions,
    menuOptionsMobile
} from '@/utils/constants/options/navbar';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    const { control, handleSubmit, resetField } = useForm({
        defaulValues: { search: '' }
    });

    const onSubmitSearch = data => {
        navigate(`/search/${data.search}`);
    };

    const onClickDropdown = val => {
        if (val.name === 'logout') {
            logoutHandler();
            return;
        }

        if (
            !val.path ||
            !menuOptions.filter(option => option.path === val.path)
        )
            return;

        navigate(val.path);
    };

    const logoutHandler = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-slate-300 bg-white py-4 px-6">
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
            <RenderIf when={!user}>
                <div className="hidden items-center gap-2 lg:flex">
                    <Button href="/login" variant="secondary">
                        Login
                    </Button>
                    <Button href="/signup">Sign Up</Button>
                </div>
            </RenderIf>
            <RenderIf when={!!user}>
                <div className="hidden items-center gap-4 lg:flex">
                    <Link
                        to="/art/new"
                        className="text-sm font-semibold hover:underline"
                    >
                        Create
                    </Link>
                    <Dropdown
                        options={menuOptions}
                        className="item-center flex justify-center"
                        itemClassName="pr-10"
                        onClick={val => onClickDropdown(val)}
                    >
                        <img
                            src={
                                user.image ?? '/images/profile-placeholder.png'
                            }
                            className="aspect-square w-8 rounded-full border border-slate-300 object-cover"
                        />
                    </Dropdown>
                </div>
            </RenderIf>
            <div className="absolute right-0 top-0 flex h-full items-center gap-4 lg:hidden">
                <Link
                    to="/art/new"
                    className="text-sm font-semibold hover:underline"
                >
                    Create
                </Link>
                <Dropdown
                    overlay
                    panelClassName="w-screen px-2 py-2"
                    itemClassName="pr-10"
                    onClick={val => onClickDropdown(val)}
                    options={menuOptionsMobile}
                    ExtendedOptions={({ close }) => (
                        <>
                            <RenderIf when={!user}>
                                <Link
                                    to="/login"
                                    className={clsx(
                                        'mx-4 flex items-center gap-2 rounded-lg bg-purple-500 px-4 py-3 text-start text-white hover:bg-purple-700'
                                    )}
                                >
                                    <ArrowRightOnRectangleIcon className="h-5 w-5 stroke-white" />
                                    Sign In
                                </Link>
                            </RenderIf>
                            <RenderIf when={!!user}>
                                <div
                                    className={clsx(
                                        'flex items-center gap-2 px-4 py-3 text-red-500 hover:bg-slate-200'
                                    )}
                                    onClick={() => {
                                        logoutHandler();
                                        close();
                                    }}
                                >
                                    <ArrowLeftOnRectangleIcon className="h-5 w-5 stroke-red-500" />
                                    Log Out
                                </div>
                            </RenderIf>
                        </>
                    )}
                >
                    <Bars3Icon className="h-6 w-10 px-2" />
                </Dropdown>
            </div>
        </header>
    );
};

export default Navbar;
