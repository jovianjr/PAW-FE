import clsx from 'clsx';
import { CardArt } from '@/views/components/card';
import { useParams } from 'react-router-dom';
import RenderIf from '@/views/components/render-if';
import genreOptions from '@/utils/constants/options/genre';
import { useState } from 'react';
import Dropdown from '@/views/components/dropdown';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

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

const CardArts = ({ dataArt: data, sortBy, setSortBy, genre, setGenre }) => {
    const onClickDropdown = val => {
        setSortBy(val.name);
        return;
    };

    return (
        <>
            <div className="flex w-full justify-between pb-4">
                <div className="hidden w-full items-center gap-5 lg:flex">
                    {genreOptions.map((genreVal, index) => (
                        <button
                            key={index}
                            type="button"
                            className={clsx(
                                'font-small w-auto rounded border border-slate-300 bg-transparent bg-white px-3 py-2 text-xs text-slate-700 transition-all hover:border-purple-200 hover:bg-purple-200 hover:text-slate-900',
                                genre === genreVal.value
                                    ? 'order-first bg-purple-700 !text-white'
                                    : ''
                            )}
                            onClick={() => {
                                genre === genreVal.value
                                    ? setGenre('')
                                    : setGenre(genreVal.value);
                            }}
                        >
                            {genreVal.label}
                        </button>
                    ))}
                </div>
                <Dropdown
                    options={menuOptions}
                    itemClassName="pr-10 text-xs font-small hover:bg-slate-100 hover:text-slate-700"
                    onClick={val => onClickDropdown(val)}
                    currentItem={sortBy}
                    activeClassName="!bg-slate-300"
                >
                    <span
                        type="button"
                        className="font-sm hidden w-28 items-center justify-between gap-4 rounded border border-slate-300 bg-transparent bg-white stroke-slate-700 px-4 py-2 text-xs text-slate-700 transition-all hover:border-slate-500
                    hover:bg-slate-500 hover:stroke-white hover:text-white lg:flex"
                    >
                        Sort by
                        <ChevronDownIcon className="h-4 w-4 stroke-inherit" />
                    </span>
                </Dropdown>
            </div>
            <div className="grid gap-x-4 gap-y-6 lg:grid-cols-4">
                <RenderIf when={data?.data?.length === 0}>
                    <div className="cols-pen item-center col-span-4 mt-10 w-auto text-center text-sm">
                        Sorry, there is no such keyword for artwork
                    </div>
                </RenderIf>
                <RenderIf when={data?.data?.length !== 0}>
                    {data?.data?.map((card, index) => {
                        return (
                            <CardArt
                                key={index}
                                image={card.imgSrc}
                                slug={card.slug}
                                title={card.title}
                                name={card.name}
                                username={card.username}
                                date_created={card.date_created}
                            />
                        );
                    })}
                </RenderIf>
            </div>
        </>
    );
};

export default CardArts;
