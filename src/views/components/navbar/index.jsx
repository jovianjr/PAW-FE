import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import {
    ArrowLeftOnRectangleIcon,
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
        text: 'Log out'
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
        <header className="sticky top-0 flex h-16 items-center justify-between border-b border-slate-300 py-4 px-6">
            <Link to="/">
                <h1 className="text-lg font-black">PAW</h1>
            </Link>
            <form className="w-1/2" onSubmit={handleSubmit(onSubmitSearch)}>
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
            <div className="flex items-center gap-2">
                <Button href="/login" variant="secondary">
                    Login
                </Button>
                <Button href="/signup">Sign Up</Button>
            </div>
            <div className="flex items-center gap-4">
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
        </header>
    );
};

export default Navbar;
