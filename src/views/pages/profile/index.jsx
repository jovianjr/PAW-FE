import { useQuery } from '@tanstack/react-query';
import { Cog6ToothIcon, BanknotesIcon } from '@heroicons/react/24/solid';
import { useParams } from 'react-router-dom';

import MainLayout from '@/views/layouts/main-layout';
import { CardArt } from '@/views/components/card';

import { getListArt } from '@/utils/services/artwork';

const User = () => {
    const params = useParams();
    const { data, isLoading, isFetching, isError, isIdle } = useQuery(
        ['get-Profile'],
        () => getListArt(params.id),
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
                Hello profile pages!
                <div className="grid gap-x-4 gap-y-6 px-20 py-4 lg:w-2/3 lg:grid-cols-3">
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
                </div>
                <div
                    className="w-100 r-[26px] t-[112px] absolute right-[26px]  top-[80px] flex h-40 h-auto flex-col items-center  
						gap-[24px]  bg-white p-6 "
                >
                    <Cog6ToothIcon className="absolute top-0  right-0 h-4 w-4 " />
                    <img
                        src="https://picsum.photos/200/300"
                        className="aspect-square w-40 rounded-full"
                    />

                    <div className="padding-[24px] flex h-auto  w-auto flex-col items-start gap-[4px] bg-white ">
                        <h1 className="text-xl font-semibold not-italic leading-7">
                            {' '}
                            John Doe{' '}
                        </h1>
                        <h2 className="text-center text-sm text-sm font-normal not-italic leading-5">
                            {' '}
                            Martial Artist
                        </h2>
                    </div>

                    <div className="flex h-auto w-auto  flex-row items-start gap-[8px] bg-white ">
                        <BanknotesIcon className="h-4 w-4" />
                    </div>

                    <div className="flex h-auto w-auto  flex-col items-start gap-[8px] bg-white ">
                        <h3 className="text-start text-xs font-normal not-italic leading-5">
                            {' '}
                            Other Information
                        </h3>
                        <h4 className="text-sm font-normal not-italic leading-5">
                            At vero eos et accusamus et iusto odio{' '}
                        </h4>
                    </div>

                    <h5 className="text-center text-xs font-normal not-italic leading-4">
                        {' '}
                        Member since: Aug 20, 2020
                    </h5>
                </div>
            </div>
        </MainLayout>
    );
};

export default User;
