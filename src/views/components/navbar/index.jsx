import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
        name: 'profile',
        text: 'My Account'
    },
    {
        icon: Cog6ToothIcon,
        name: 'settings',
        text: 'Settings'
    },
    {
        icon: ArrowLeftOnRectangleIcon,
        name: 'logout',
        text: 'Log out'
    }
];

const Navbar = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, resetField } = useForm({
        defaulValues: { search: '' }
    });

    const onSubmit = data => {
        navigate(`/search/${data.search}`);
    };

    return (
        <header className="sticky top-0 flex h-16 items-center justify-between border-b border-slate-300 py-4 px-6">
            <h1 className="text-lg font-black">PAW</h1>
            <form className="w-1/2" onSubmit={handleSubmit(onSubmit)}>
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
                <Button variant="secondary">Login</Button>
                <Button>Sign Up</Button>
            </div>
            <div className="flex items-center gap-4">
                <button className="text-sm font-semibold hover:underline">
                    Create
                </button>
                <Dropdown
                    options={menuOptions}
                    itemClassName="pr-10"
                    onClick={val => console.log(val)}
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
