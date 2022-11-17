import { CardArt } from '@/views/components/card';
import { useQuery } from '@tanstack/react-query';
import { searchByArtwork } from '@/utils/services/artwork';
import { useParams } from 'react-router-dom';

const data = [];

const CardArts = ({}) => {
    const params = useParams();
    const { data, isLoading, isFetching, isError, isIdle } = useQuery(
        ['searchByArtwork'],
        () => searchByArtwork(params.keyword),
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
        <div className="grid gap-x-4 gap-y-6 lg:grid-cols-4">
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
        </div>
    );
};

export default CardArts;
