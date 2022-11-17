import { CardUser } from '@/views/components/card';
import RenderIf from '@/views/components/render-if';

const CardUsers = ({ dataUser: data }) => {
    return (
        <>
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
