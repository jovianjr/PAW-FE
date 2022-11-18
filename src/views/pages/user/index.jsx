import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon
} from '@/views/elements/icons';
import { useQuery } from '@tanstack/react-query';
import { Cog6ToothIcon, BanknotesIcon } from '@heroicons/react/24/solid';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import MainLayout from '@/views/layouts/main-layout';
import { CardArt } from '@/views/components/card';
import RenderIf from '@/views/components/render-if';

import { getUserByUsername } from '@/utils/services/user';
import { getListArt } from '@/utils/services/artwork';
import LoadingScreen from '@/views/components/loading';

const User = ({ username = null, isLoggedIn = false }) => {
    const params = useParams();
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
        <MainLayout screen className="">
            <div className="flex h-full gap-6 bg-slate-200 px-10 py-6">
                <div className="w-3/4">
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
                <div className="flex h-full w-1/4 flex-col items-center gap-6 bg-white py-9 px-6">
                    <RenderIf when={isLoggedIn}>
                        <Cog6ToothIcon className="absolute top-2  right-3 h-4 w-4 " />
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
            </div>
        </MainLayout>
    );
};

export default User;
