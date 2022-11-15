import { Link } from 'react-router-dom';

import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon
} from '@/views/elements/icons';

const socialMedia = [
    {
        url: 'https://instagram.com',
        icon: InstagramIcon,
        name: 'instagram'
    },
    {
        url: 'https://twitter.com',
        icon: TwitterIcon,
        name: 'instagram'
    },
    {
        url: 'https://youtube.com',
        icon: YoutubeIcon,
        name: 'youtube'
    },
    {
        url: 'https://facebook.com',
        icon: FacebookIcon,
        name: 'facebook'
    }
];

const Footer = () => {
    return (
        <footer className="sticky bottom-0 flex w-full items-center justify-between border-t border-slate-300 bg-white p-2 lg:px-6">
            <div className="flex w-full items-center justify-between gap-4 lg:justify-start">
                <Link to="/" className="pt-0 font-semibold">
                    <h1>PAW</h1>
                </Link>
                <div className="flex items-center gap-2">
                    {socialMedia.map((val, index) => (
                        <a href={val.url} key={index}>
                            <val.icon />
                        </a>
                    ))}
                </div>
            </div>
            <div className="hidden items-center gap-4 lg:flex">
                <Link to="/" className="hover:underline">
                    Homepage
                </Link>
                <p className="">|</p>
                <Link to="/login" className="hover:underline">
                    Login
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
