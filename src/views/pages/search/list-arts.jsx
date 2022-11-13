import { CardArt } from '@/views/components/card';

const CardArts = ({ data = [] }) => {
    return (
        <div className="grid gap-x-4 gap-y-6 lg:grid-cols-4">
            {data.map((card, index) => {
                return (
                    <CardArt
                        key={index}
                        image={card.img}
                        title={card.title}
                        text={card.text}
                        date_created={card.date_created}
                    />
                );
            })}
        </div>
    );
};

export default CardArts;
