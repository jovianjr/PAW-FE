import { Cog6ToothIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import moment from 'moment';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon
} from '@/views/elements/icons';
import { CardArt } from '@/views/components/card';
import LoadingScreen from '@/views/components/loading';
import RenderIf from '@/views/components/render-if';

import MainLayout from '@/views/layouts/main-layout';
import { getUserByUsername } from '@/utils/services/user';
import { getListArt } from '@/utils/services/artwork';

const User = ({ username = null, isLoggedIn = false }) => {
    const navigate = useNavigate();
    const params = useParams();
    const [lihatDetail, setLihatDetail] = useState(false);

    const getUser = useQuery(
        ['get-user', username ?? params.username],
        () => getUserByUsername(username ?? params.username),
        {
            refetchOnWindowFocus: false,
            refetchInterval: false,
            onSuccess: res => {},
            onError: err => {},
            retry: (failureCount, error) => {
                if (error?.response?.status === 498) return false;
                else if (failureCount === 2) return false;
                else return true;
            }
        }
    );

    const { data, isLoading, isFetching } = useQuery(
        ['get-art-by-user', getUser.data?.data?.username],
        () => {
            if (getUser.data?.data) return getListArt(getUser.data?.data?._id);
            return null;
        },
        {
            refetchOnWindowFocus: false,
            refetchInterval: false,
            onSuccess: res => {},
            onError: err => {},
            retry: (failureCount, error) => {
                if (error?.response?.status === 498) return false;
                else if (failureCount === 2) return false;
                else return true;
            }
        }
    );

    return (
        <MainLayout screen containerClassName="!h-full lg:!h-screen">
            <div className="flex h-full flex-col-reverse gap-6 bg-slate-100 lg:flex-row lg:px-10 lg:py-6">
                <div className="w-full px-6 py-8 lg:w-3/4 lg:p-0">
                    <>
                        <LoadingScreen
                            when={
                                isLoading ||
                                isFetching ||
                                getUser.isLoading ||
                                getUser.isFetching
                            }
                            text="getting your artworks..."
                        />

                        <div className="grid !h-auto max-h-screen gap-x-4 gap-y-6 overflow-y-auto lg:grid-cols-4">
                            <RenderIf when={data?.data?.length === 0}>
                                <div className="cols-pen item-center col-span-4 mt-10 w-auto text-center text-sm">
                                    There is no any artwork yet. Let's try to
                                    create one!
                                </div>
                            </RenderIf>
                            <RenderIf when={data?.data?.length !== 0}>
                                {data?.data?.map((val, index) => {
                                    return (
                                        <CardArt
                                            key={index}
                                            image={val.imgSrc}
                                            slug={val.slug}
                                            title={val.title}
                                            name={val.user_id?.name}
                                            username={val.user_id?.username}
                                            date_created={val.date_created}
                                        />
                                    );
                                })}
                            </RenderIf>
                        </div>
                    </>
                </div>
                <div className="relative flex h-full w-full flex-col items-center gap-6 bg-white py-9 px-6 lg:w-1/4">
                    <RenderIf when={isLoggedIn}>
                        <Cog6ToothIcon
                            className="absolute top-4 right-3 h-6 w-6 cursor-pointer lg:top-2 lg:right-3 lg:h-4 lg:w-4"
                            onClick={() => navigate('/profile/settings')}
                        />
                    </RenderIf>
                    <img
                        src={
                            getUser.data?.data?.image ??
                            '/images/profile-placeholder.png'
                        }
                        className="aspect-square w-40 rounded-full object-cover"
                    />

                    <div className="flex flex-col items-center justify-center gap-1">
                        <h1 className="text-xl font-semibold">
                            {getUser.data?.data?.name}
                        </h1>
                        <h2 className="text-sm">{getUser.data?.data?.title}</h2>
                    </div>

                    <DetailUser {...{ getUser }} className="hidden lg:flex" />
                    <button
                        className="flex items-center justify-center gap-2 text-xs text-slate-700 hover:underline lg:hidden"
                        onClick={() => {
                            setLihatDetail(!lihatDetail);
                        }}
                    >
                        {!lihatDetail ? 'View Details' : 'Less Detail'}
                        {!lihatDetail ? (
                            <ChevronDownIcon className="h-4 w-4" />
                        ) : null}
                        {lihatDetail ? (
                            <ChevronDownIcon className="h-4 w-4 rotate-180" />
                        ) : null}
                    </button>
                    <RenderIf when={lihatDetail}>
                        <DetailUser {...{ getUser }} className="lg:hidden" />
                    </RenderIf>
                </div>
            </div>
        </MainLayout>
    );
};

const DetailUser = ({ getUser, className }) => {
    return (
        <div
            className={clsx(
                'flex h-full w-full flex-col items-center gap-6',
                className
            )}
        >
            <div className="flex h-auto w-auto  flex-row items-start gap-[8px] bg-white ">
                <RenderIf when={!!getUser.data?.data?.instagram}>
                    <a
                        href={`https://instagram.com/${getUser.data?.data?.instagram}`}
                    >
                        <InstagramIcon />
                    </a>
                </RenderIf>
                <RenderIf when={!!getUser.data?.data?.twitter}>
                    <a
                        href={`https://twitter.com/${getUser.data?.data?.twitter}`}
                    >
                        <TwitterIcon />
                    </a>
                </RenderIf>
                <RenderIf when={!!getUser.data?.data?.youtube}>
                    <a
                        href={`https://instagram.com/${getUser.data?.data?.youtube}`}
                    >
                        <YoutubeIcon />
                    </a>
                </RenderIf>
                <RenderIf when={!!getUser.data?.data?.facebook}>
                    <a
                        href={`https://youtube.com/${getUser.data?.data?.facebook}`}
                    >
                        <FacebookIcon />
                    </a>
                </RenderIf>
            </div>

            <RenderIf when={!!getUser.data?.data?.bio}>
                <div className="flex h-auto w-full flex-col items-start gap-2 bg-white ">
                    <h3 className="text-start text-xs font-normal not-italic leading-5">
                        Bio
                    </h3>
                    <h4 className="text-sm font-normal not-italic leading-5">
                        {getUser.data?.data?.bio}
                    </h4>
                </div>
            </RenderIf>

            <h5 className=" text-center text-xs font-normal not-italic leading-4">
                Member since:
                {moment
                    .utc(getUser.data?.data?.createdAt)
                    .format('DD MMMM YYYY')}
            </h5>
        </div>
    );
};

export default User;
