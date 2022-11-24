import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';

import announce from '@/views/components/announcement';
import LoadingScreen from '@/views/components/loading';
import MainLayout from '@/views/layouts/main-layout';
import Modal from '@/views/components/modal';

import { getDetailArt, deleteArt } from '@/utils/services/artwork';
import RenderIf from '@/views/components/render-if';
import { AuthContext } from '@/utils/context/auth';

const ArtDetail = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [deleteModal, setDeleteModal] = useState(false);

    const { data, isLoading, isFetching } = useQuery(
        ['get-detail-art', params.slug],
        () => getDetailArt(params.slug),
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

    const deleteMutation = useMutation(data => deleteArt(data), {
        onSuccess: res => {
            navigate('/');
        },
        onError: err => {
            if (err.response) {
                const { data } = err.response;
                announce.error(data.errors);
            } else console.log(err);
        }
    });

    return (
        <>
            <LoadingScreen when={deleteMutation.isLoading} text="deleting" />
            <LoadingScreen
                when={isLoading || isFetching || deleteMutation.isLoading}
                text="getting art details"
            />
            <Modal
                title="Delete artwork"
                isOpen={deleteModal}
                setIsOpen={setDeleteModal}
                onClick={() => deleteMutation.mutateAsync(data?.data?._id)}
            >
                Are you sure to delete this artwork?
            </Modal>
            <MainLayout className="lg:my-12 lg:px-40">
                <div className="relative flex flex-col-reverse lg:flex-col">
                    <RenderIf when={data?.data?.user_id?._id === user?._id}>
                        <div className="absolute right-0 top-4 flex gap-4 px-4 lg:top-0 lg:flex lg:translate-x-full lg:flex-col lg:gap-4">
                            <PencilSquareIcon
                                className="h-5 w-5 cursor-pointer rounded-full transition-all hover:bg-slate-300 lg:h-12 lg:w-12 lg:p-3"
                                onClick={() =>
                                    navigate(`/art/${params.slug}/update`)
                                }
                            />
                            <TrashIcon
                                className="h-5 w-5 cursor-pointer rounded-full transition-all hover:bg-slate-300 lg:h-12 lg:w-12 lg:p-3"
                                onClick={() => setDeleteModal(true)}
                            />
                        </div>
                    </RenderIf>
                    <img
                        className="aspect-[16/9] w-full rounded object-cover"
                        src={data?.data?.imgSrc}
                    />
                    <div className="flex items-center justify-between p-4 lg:mt-4 lg:p-0">
                        <div className="flex gap-2">
                            <img
                                className="aspect-square w-8 rounded-full object-cover lg:w-14"
                                src={data?.data?.user_id?.image}
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
                        <p className="hidden text-base lg:block">
                            {moment
                                .utc(data?.data?.date_created)
                                .format('DD MMMM YYYY')}
                        </p>
                    </div>
                </div>
                <div className="px-6 py-8 lg:p-0">
                    <div className="flex flex-col lg:hidden">
                        <p className="text-xs text-slate-500">
                            {data?.data?.date_created}
                        </p>
                        <p className="text-base font-semibold">
                            {data?.data?.title}
                        </p>
                    </div>
                    <p className="mt-4 text-justify text-base">
                        {data?.data?.description}
                    </p>
                </div>
            </MainLayout>
        </>
    );
};

export default ArtDetail;
