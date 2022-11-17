import { CardUser } from '@/views/components/card';
import { useQuery } from '@tanstack/react-query';
import { searchByUser } from '@/utils/services/user';
import { useParams } from 'react-router-dom';

const data = [];

const CardUsers = () => {
    const params = useParams();
    const { data, isLoading, isFetching, isError, isIdle } = useQuery(
        ['searchByUser'],
        () => searchByUser(params.keyword),
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
        <div className="mx-auto grid gap-x-20 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            {data?.data?.map((card, index) => (
                <CardUser
                    key={index}
                    image={card.image}
                    username={card.username}
                    name={card.name}
                    text={card.title}
                />
            ))}
        </div>
    );
};

export default CardUsers;
