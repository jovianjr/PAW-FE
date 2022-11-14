import { CardArt } from '@/views/components/card';

const data = [
    {
        img: '/images/1.png',
        slug: 'fuji-mountain',
        title: 'Fuji Mountain',
        name: 'John Doe',
        username: 'johndoe',
        date_created: '01 jan 2022'
    },
    {
        img: '/images/2.png',
        slug: 'fuji-mountain',
        title: 'Fuji Mountain',
        name: 'John Doe',
        username: 'johndoe',
        date_created: '01 jan 2022'
    },
    {
        img: '/images/3.png',
        slug: 'fuji-mountain',
        title: 'Fuji Mountain',
        name: 'John Doe',
        username: 'johndoe',
        date_created: '01 jan 2022'
    },
    {
        img: '/images/4.png',
        slug: 'fuji-mountain',
        title: 'Fuji Mountain',
        name: 'John Doe',
        username: 'johndoe',
        date_created: '01 jan 2022'
    },
    {
        img: '/images/5.png',
        slug: 'fuji-mountain',
        title: 'Fuji Mountain',
        name: 'John Doe',
        username: 'johndoe',
        date_created: '01 jan 2022'
    },
    {
        img: '/images/6.png',
        slug: 'fuji-mountain',
        title: 'Fuji Mountain',
        name: 'John Doe',
        username: 'johndoe',
        date_created: '01 jan 2022'
    },
    {
        img: '/images/7.png',
        slug: 'fuji-mountain',
        title: 'Fuji Mountain',
        name: 'John Doe',
        username: 'johndoe',
        date_created: '01 jan 2022'
    },
    {
        img: '/images/8.png',
        slug: 'fuji-mountain',
        title: 'Fuji Mountain',
        name: 'John Doe',
        username: 'johndoe',
        date_created: '01 jan 2022'
    }
];

const CardArts = ({}) => {
    return (
        <div className="grid gap-x-4 gap-y-6 lg:grid-cols-4">
            {data.map((card, index) => {
                return (
                    <CardArt
                        key={index}
                        image={card.img}
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
