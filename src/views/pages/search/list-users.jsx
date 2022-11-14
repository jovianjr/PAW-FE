import { CardUser } from '@/views/components/card';

const data = [
    {
        img: '/images/1.png',
        username: 'peterDrucker',
        name: 'John Doe',
        title: 'manager'
    },
    {
        img: '/images/2.png',
        username: 'peterDrucker',
        name: 'John Doe',
        title: 'manager'
    },
    {
        img: '/images/3.png',
        username: 'peterDrucker',
        name: 'John Doe',
        title: 'manager'
    },
    {
        img: '/images/4.png',
        username: 'peterDrucker',
        name: 'John Doe',
        title: 'manager'
    },
    {
        img: '/images/5.png',
        username: 'peterDrucker',
        name: 'John Doe',
        title: 'manager'
    },
    {
        img: '/images/6.png',
        username: 'peterDrucker',
        name: 'John Doe',
        title: 'manager'
    },
    {
        img: '/images/7.png',
        username: 'peterDrucker',
        name: 'John Doe',
        title: 'manager'
    },
    {
        img: '/images/8.png',
        username: 'peterDrucker',
        name: 'John Doe',
        title: 'manager'
    }
];

const CardUsers = () => {
    return (
        <div className="mx-auto grid gap-x-20 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            {data.map((card, index) => (
                <CardUser
                    key={index}
                    image={card.img}
                    username={card.username}
                    name={card.name}
                    text={card.title}
                />
            ))}
        </div>
    );
};

export default CardUsers;
