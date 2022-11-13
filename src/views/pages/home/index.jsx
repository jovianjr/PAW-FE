import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {MagnifyingGlassIcon, ChevronDownIcon} from '@heroicons/react/24/outline';

import MainLayout from '@/views/layouts/main-layout';
import TextField from '@/views/elements/text-field';
import Dropdown from '@/views/components/dropdown';

const menuOptions = [
    {
        icon: null,
        path: '/profile',
        name: 'profile',
        text: 'Newest'
    },
    {
        icon: null,
        path: '/profile/settings',
        name: 'settings',
        text: 'Oldest'
    }
];

const Home = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, resetField } = useForm({
        defaulValues: { search: '' }
    });
        
    const onSubmit = data => {
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
        <MainLayout>
            <form className="flex items-center gap-0.1 w-full px-20 py-4" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    control={control}
                    icon={MagnifyingGlassIcon}
                    name="search"
                    placeholder="Search artwork"
                    resetField={() => resetField('search')}
                    className="w-5/6"
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
                    className="w-1/6 rounded border border-slate-300 bg-transparent py-3 text-sm font-medium transition-all bg-slate-200 text-black-700
                    hover:border-black hover:bg-black hover:text-white"
                    to="/search"
                >
                    Search
               </button>
            </form>

            <div className="flex justify-between w-full px-20 pt-1">
                <div className="flex items-center gap-5 w-full">
                    {["Animal","Panorama","Decorative","Photography","Digital"].map((val, index) => (
                        <button
                            key={index}
                            type="button"
                            className= "w-auto rounded border border-slate-300 bg-transparent px-3 py-2 text-xs font-small transition-all bg-white text-black-700 hover:border-black hover:bg-black hover:text-white"
                        >
                            {val}
                        </button>))
                    }
                </div>
                <Dropdown
                    options={menuOptions}
                    itemClassName="pr-10 text-xs font-small"
                    onClick={val => onClickDropdown(val)}
                >
                    <button
                    type="button"
                    className="flex items-center gap 4 w-24 rounded border border-slate-300 bg-transparent px-4 py-2 text-xs font-small transition-all bg-white text-black-700
                    hover:border-black hover:bg-black hover:text-white"
                    >
                    Sort by
                    <ChevronDownIcon className="h-4 w-4 text-slate-900 hover:text-white"/>
                    </button>
                </Dropdown>
            </div>
            <div className="h-screen"></div>
        </MainLayout>
    );
};

export default Home;
