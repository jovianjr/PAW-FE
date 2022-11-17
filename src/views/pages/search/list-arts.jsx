import { CardArt } from '@/views/components/card';
import { useQuery } from '@tanstack/react-query';
import { searchByArtwork } from '@/utils/services/artwork';
import { useParams } from 'react-router-dom';
import RenderIf from '@/views/components/render-if';
import LoadingScreen from '@/views/components/loading';

const data = [];

const CardArts = ({ setCountArtwork }) => {
    const params = useParams();
    const { data, isLoading, isFetching, isError, isIdle } = useQuery(
        ['searchByArtwork'],
        () => searchByArtwork(params.keyword),
        {
            refetchOnWindowFocus: false,
            refetchInterval: false,
            onSuccess: res => {
                setCountArtwork(res.data.length);
            },
            onError: err => {},
            retry: (failureCount, error) => {
                if (error?.response?.status === 498) return false;
                else if (failureCount === 2) return false;
                else return true;
            }
        }
    );
    return (
        <>
            <LoadingScreen when={isLoading || isFetching} text="searching..." />
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
