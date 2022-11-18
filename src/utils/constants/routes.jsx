import { createBrowserRouter, redirect } from 'react-router-dom';

import ErrorPage from '@/views/pages/error';
import HomePage from '@/views/pages/home';
import LoginPage from '@/views/pages/auth/login';
import SignUpPage from '@/views/pages/auth/signup';
import ForgotPasswordPage from '@/views/pages/auth/forgot-password';
import ResetPasswordPage from '@/views/pages/auth/reset-password';
import Activate from '@/views/pages/auth/activate';
import UserPage from '@/views/pages/user';
import ProfilePage from '@/views/pages/profile';
import ProfileSettingsPage from '@/views/pages/profile/settings';
import ArtDetailPage from '@/views/pages/art/detail';
import ArtNewPage from '@/views/pages/art/new';
import SearchPage from '@/views/pages/search';

import { getUser } from '@/utils/services/user';

const checkUser = async () => {
    try {
        const data = await getUser();
        return data;
    } catch (e) {
        return 'unauthorized';
    }
};

const AuthRoutes = [
    {
        path: '/login',
        element: <LoginPage />,
        loader: async () => {
            const response = await checkUser();
            if (response !== 'unauthorized') return redirect('/');
        },
        errorElement: <ErrorPage />
    },
    {
        path: '/signup',
        element: <SignUpPage />,
        loader: async () => {
            const response = await checkUser();
            if (response !== 'unauthorized') return redirect('/');
        },
        errorElement: <ErrorPage />
    },
    {
        path: '/forgot-password',
        element: <ForgotPasswordPage />,
        loader: async () => {
            const response = await checkUser();
            if (response !== 'unauthorized') return redirect('/');
        },
        errorElement: <ErrorPage />
    },
    {
        path: '/reset-password',
        element: <ResetPasswordPage />,
        loader: async () => {
            const response = await checkUser();
            if (response !== 'unauthorized') return redirect('/');
        },
        errorElement: <ErrorPage />
    },
    {
        path: '/activate',
        element: <Activate />,
        loader: async () => {
            const response = await checkUser();
            if (response !== 'unauthorized') return redirect('/');
        },
        errorElement: <ErrorPage />
    }
];

const routes = createBrowserRouter([
    ...AuthRoutes,
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/:username',
        element: <UserPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/profile',
        element: <ProfilePage />,
        loader: async () => {
            const response = await checkUser();
            if (response === 'unauthorized') return redirect('/login');
            return response;
        },
        errorElement: <ErrorPage />
    },
    {
        path: '/profile/settings',
        element: <ProfileSettingsPage />,
        loader: async () => {
            const response = await checkUser();
            if (response === 'unauthorized') return redirect('/login');
            return response;
        },
        errorElement: <ErrorPage />
    },
    {
        path: '/art',
        element: <HomePage />
    },
    {
        path: '/art/new',
        element: <ArtNewPage />,
        loader: async () => {
            const response = await checkUser();
            if (response === 'unauthorized') return redirect('/login');
            return response;
        },
        errorElement: <ErrorPage />
    },
    ,
    {
        path: '/art/:id',
        element: <ArtDetailPage />
    },
    {
        path: '/search',
        element: <SearchPage />
    },
    {
        path: '/search/:keyword',
        element: <SearchPage />
    }
]);

export default routes;
