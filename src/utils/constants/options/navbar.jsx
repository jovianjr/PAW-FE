import {
    ArrowLeftOnRectangleIcon,
    Cog6ToothIcon,
    PencilSquareIcon,
    UserCircleIcon
} from '@heroicons/react/24/outline';

export const menuOptions = [
    {
        icon: UserCircleIcon,
        path: '/profile',
        name: 'profile',
        text: 'My Account'
    },
    {
        icon: Cog6ToothIcon,
        path: '/profile/settings',
        name: 'settings',
        text: 'Settings'
    },
    {
        icon: ArrowLeftOnRectangleIcon,
        path: '/',
        name: 'logout',
        text: 'Log out',
        className: 'text-red-500 !stroke-red-500'
    }
];

export const menuOptionsMobile = [
    {
        icon: PencilSquareIcon,
        path: '/art/new',
        name: 'create',
        text: 'Create'
    },
    {
        icon: UserCircleIcon,
        path: '/profile',
        name: 'profile',
        text: 'My Account'
    },
    {
        icon: Cog6ToothIcon,
        path: '/profile/settings',
        name: 'settings',
        text: 'Settings'
    }
];
