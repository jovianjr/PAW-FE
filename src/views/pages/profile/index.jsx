import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon
} from '@/views/elements/icons';
import { useQuery } from '@tanstack/react-query';
import { Cog6ToothIcon, BanknotesIcon } from '@heroicons/react/24/solid';
import { useParams } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/utils/context/auth';
import MainLayout from '@/views/layouts/main-layout';
import { CardArt } from '@/views/components/card';

import { getUserByUsername } from '@/utils/services/user';
import { getListArt } from '@/utils/services/artwork';
import { getUser } from '@/utils/services/user';

const socialMedia = [
    {
        url: 'https://instagram.com',
        icon: InstagramIcon,
        name: 'instagram'
    },
    {
        url: 'https://twitter.com',
        icon: TwitterIcon,
        name: 'instagram'
    },
    {
        url: 'https://youtube.com',
        icon: YoutubeIcon,
        name: 'youtube'
    },
    {
        url: 'https://facebook.com',
        icon: FacebookIcon,
        name: 'facebook'
    }
];

const User = () => {
    const params = useParams();
    const { user } = useContext(AuthContext);
    const { data, isLoading, isFetching, isError, isIdle } = useQuery(
        ['get-art-by-user', getUser.data?.data?.username],
        () => getListArt(getUser.data?.data?._id),
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
        <MainLayout>
            <div className="h-screen w-full bg-slate-200">
                <div className="grid w-2/3 grid-cols-3 gap-x-4 gap-y-6 px-20 py-4">
                    {data?.data?.map((val, index) => {
                        return (
                            <CardArt
                                key={index}
                                image={val.imgSrc}
                                slug={val.slug}
                                title={val.title}
                                name={val.username?.name}
                                username={val.username?.username}
                                date_created={val.date_created}
                            />
                        );
                    })}
                </div>
                <div
                    className="w-100 r-[26px] t-[112px] absolute right-[26px]  top-[80px] flex h-screen  flex-col items-center  
						gap-[24px]  bg-white p-6 "
                >
                    <Cog6ToothIcon className="absolute top-2  right-3 h-4 w-4 " />
                    <img
                        src="https://picsum.photos/200/300"
                        className="aspect-square w-40 rounded-full"
                    />

                    <div className="padding-[24px] flex h-auto  w-auto flex-col items-start gap-[4px] bg-white ">
                        <h1 className="text-xl font-semibold not-italic leading-7">
                            {user.username ?? '-'}
                        </h1>
                        <h2 className="text-center text-sm text-sm font-normal not-italic leading-5">
                            {user.title ?? '-'}
                        </h2>
                    </div>

                    <div className="flex h-auto w-auto  flex-row items-start gap-[8px] bg-white ">
                        {socialMedia.map((val, index) => (
                            <a href={val.url} key={index}>
                                <val.icon />
                            </a>
                        ))}
                    </div>

                    <div className="mt-5 flex h-auto  w-auto flex-col items-start gap-[8px] bg-white ">
                        <h3 className="text-start text-xs font-normal not-italic leading-5">
                            {' '}
                            Other Information
                        </h3>
                        <h4 className="text-sm font-normal not-italic leading-5">
                            {user.bio ?? '-'}
                        </h4>
                    </div>

                    <h5 className="text-center text-xs font-normal not-italic leading-4">
                        {user.createdAt ?? '-'}
                    </h5>
                </div>
            </div>
        </MainLayout>
    );
};

export default User;
