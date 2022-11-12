import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '@/views/pages/error';
import HomePage from '@/views/pages/home';
import LoginPage from '@/views/pages/auth/login';
import SignUpPage from '@/views/pages/auth/signup';
import ForgotPasswordPage from '@/views/pages/auth/forgot-password';
import ResetPasswordPage from '@/views/pages/auth/reset-password';
import Activate from '@/views/pages/auth/activate';
import UserPage from '@/views/pages/user';
import ArtDetailPage from '@/views/pages/art/detail';
import ArtNewPage from '@/views/pages/art/new';
import SearchPage from '@/views/pages/search';

const AuthRoutes = [
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/signup',
        element: <SignUpPage />
    },
    {
        path: '/forgot-password',
        element: <ForgotPasswordPage />
    },
    {
        path: '/reset-password',
        element: <ResetPasswordPage />
    },
    {
        path: '/activate',
        element: <Activate />
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
        path: '/:id',
        element: <UserPage />
    },
    {
        path: '/art',
        element: <HomePage />
    },
    {
        path: '/art/new',
        element: <ArtNewPage />
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
