import { useQuery, useMutation } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { getDetailArt } from '@/utils/services/artwork';
import MainLayout from '@/views/layouts/main-layout';

const ArtDetail = () => {
    const { data, isLoading, isFetching, isError, isIdle } = useQuery(
        ['get-detail-art'],
        () => getDetailArt(),
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
        <MainLayout className="lg:my-12 lg:px-40">
            <div className="flex flex-col-reverse lg:flex-col">
                <img
                    className="aspect-[16/9] w-full rounded"
                    src={data?.data?.imgSrc}
                />
                <div className="flex items-center justify-between p-4 lg:mt-4 lg:p-0">
                    <div className="flex gap-2">
                        <img
                            class="aspect-square w-8 rounded-full object-cover lg:w-14"
                            src={data?.data?.user_id.image}
                        />
                        <span className="flex flex-col">
                            <p className="text-xs font-bold lg:text-2xl lg:font-semibold">
                                {data?.data?.title}
                            </p>
                            <Link
                                to="/johndoe"
                                className="cursor-pointer text-xs hover:underline lg:text-base"
                            >
                                {data?.data?.artist}
                            </Link>
                        </span>
                    </div>
                    <p className="hidden text-base lg:block">{data?.data?.date_created}</p>
                </div>
            </div>
            <div className="px-6 py-8 lg:p-0">
                <div className="flex flex-col lg:hidden">
                    <p className="text-xs text-slate-500">{data?.data?.date_created}</p>
                    <p className="text-base font-semibold">
                        {data?.data?.title}
                    </p>
                </div>
                <p className="mt-4 text-justify text-base">
                    {data?.data?.description}
                </p>
            </div>
        </MainLayout>
    );
};

export default ArtDetail;
