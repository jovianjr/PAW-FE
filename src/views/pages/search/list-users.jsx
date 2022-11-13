import { CardUser } from '@/views/components/card';

const CardUsers = ({ data }) => {
    return (
        <div className="mx-auto grid gap-x-20 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            {data.map((card, index) => (
                <CardUser
                    key={index}
                    image={card.img}
                    title={card.title}
                    text={card.text}
                />
            ))}
        </div>
    );
};

export default CardUsers;
