import { CardUser } from '@/views/components/card';
import { useQuery } from '@tanstack/react-query';
import { searchByUser } from '@/utils/services/user';
import { useParams } from 'react-router-dom';
import RenderIf from '@/views/components/render-if';
import LoadingScreen from '@/views/components/loading';

const data = [];

const CardUsers = ({ setCountUser }) => {
    const params = useParams();
    const { data, isLoading, isFetching, isError, isIdle } = useQuery(
        ['searchByUser'],
        () => searchByUser(params.keyword),
        {
            refetchOnWindowFocus: false,
            refetchInterval: false,
            onSuccess: res => {
                setCountUser(res.data.length);
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
            <div className="mx-auto grid gap-x-20 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
                <RenderIf when={data?.data?.length === 0}>
                    <div className="item-center col-span-3 mt-10 w-auto text-center text-sm">
                        Sorry, there is no such keyword for user
                    </div>
                </RenderIf>
                <RenderIf when={data?.data?.length !== 0}>
                    {data?.data?.map((card, index) => (
                        <CardUser
                            key={index}
                            image={card.image}
                            username={card.username}
                            name={card.name}
                            text={card.title}
                        />
                    ))}
                </RenderIf>
            </div>
        </>
    );
};

export default CardUsers;
