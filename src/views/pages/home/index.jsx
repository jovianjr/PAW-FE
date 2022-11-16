import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {MagnifyingGlassIcon, ChevronDownIcon,ChevronUpDownIcon} from '@heroicons/react/24/outline';
import { CardArt } from '@/views/components/card';

import MainLayout from '@/views/layouts/main-layout';
import TextField from '@/views/elements/text-field';
import Dropdown from '@/views/components/dropdown';

const data = [
    {
        img: '/images/1.png',
        slug: 'fuji-mountain',
        title: 'Fuji Mountain',
        name: 'John Doe',
        username: 'johndoe',
        date_created: '01 jan 2022'
    },
    {
        img: '/images/2.png',
        slug: 'fuji-mountain',
        title: 'Fuji Mountain',
        name: 'John Doe',
        username: 'johndoe',
        date_created: '01 jan 2022'
    },
    {
        img: '/images/3.png',
        slug: 'fuji-mountain',
        title: 'Fuji Mountain',
        name: 'John Doe',
        username: 'johndoe',
        date_created: '01 jan 2022'
    },
    {
        img: '/images/4.png',
        slug: 'fuji-mountain',
        title: 'Fuji Mountain',
        name: 'John Doe',
        username: 'johndoe',
        date_created: '01 jan 2022'
    },
    {
        img: '/images/5.png',
        slug: 'fuji-mountain',
        title: 'Fuji Mountain',
        name: 'John Doe',
        username: 'johndoe',
        date_created: '01 jan 2022'
    },
    {
        img: '/images/6.png',
        slug: 'fuji-mountain',
        title: 'Fuji Mountain',
        name: 'John Doe',
        username: 'johndoe',
        date_created: '01 jan 2022'
    },
    {
        img: '/images/7.png',
        slug: 'fuji-mountain',
        title: 'Fuji Mountain',
        name: 'John Doe',
        username: 'johndoe',
        date_created: '01 jan 2022'
    },
    {
        img: '/images/8.png',
        slug: 'fuji-mountain',
        title: 'Fuji Mountain',
        name: 'John Doe',
        username: 'johndoe',
        date_created: '01 jan 2022'
    }
];

const menuOptions = [
    {
        icon: null,
        path: null,
        name: 'newest',
        text: 'Newest'
    },
    {
        icon: null,
        path: null,
        name: 'oldest',
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
            <form className="flex items-center gap-0 w-full px-5 lg:px-20 py-4" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    control={control}
                    icon={MagnifyingGlassIcon}
                    name="search"
                    placeholder="Search artwork"
                    resetField={() => resetField('search')}
                    className="w-3/4 lg:w-5/6 text-sm font-small lg:font-medium"
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
                    className="w-1/4 lg:w-1/6 rounded border border-slate-300 bg-transparent py-3 lg:py-2.5 text-xs font-small lg:text-sm lg:font-medium transition-all bg-slate-300 text-black-700
                    hover:border-black hover:bg-black hover:text-white"
                    to="/search"
                >
                    Search
               </button>
               <Dropdown
                    options={menuOptions}
                    itemClassName="pr-10 text-xs font-small"
                    onClick={val => onClickDropdown(val)}
                >
                    <ChevronUpDownIcon className="lg:hidden h-7 w-7 text-slate-900 hover:text-white"/>
                </Dropdown>
            </form>

            <div className="flex justify-between w-full px-20 pt-1">
                <div className="hidden lg:flex items-center gap-5 w-full">
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
                    className="hidden lg:flex items-center gap 4 w-24 rounded border border-slate-300 bg-transparent px-4 py-2 text-xs font-small transition-all bg-white text-black-700
                    hover:border-black hover:bg-black hover:text-white"
                    >
                    Sort by
                    <ChevronDownIcon className="h-4 w-4 text-slate-900 hover:text-white"/>
                    </button>
                </Dropdown>
            </div>
            <div className="grid gap-x-4 gap-y-6 lg:grid-cols-4 lg:w-full px-20 py-4">
                {data.map((card, index) => {
                    return (
                        <CardArt
                            key={index}
                            image={card.img}
                            slug={card.slug}
                            title={card.title}
                            name={card.name}
                            username={card.username}
                            date_created={card.date_created}
                        />
                    );
                })}
            </div>
            <div className="h-screen"></div>
        </MainLayout>
    );
};

export default Home;
