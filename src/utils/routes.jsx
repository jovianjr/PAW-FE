import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '@/views/pages/error';
import HomePage from '@/views/pages/home';
import LoginPage from '@/views/pages/auth/login';
import SignUpPage from '@/views/pages/auth/signup';
import UserPage from '@/views/pages/user';
import ArtDetailPage from '@/views/pages/art/detail';
import ArtNewPage from '@/views/pages/art/new';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/signup',
		element: <SignUpPage />,
	},
	{
		path: '/:id',
		element: <UserPage />,
	},
	{
		path: '/art',
		element: <HomePage />,
	},
	{
		path: '/art/new',
		element: <ArtNewPage />,
	},
	,
	{
		path: '/art/:id',
		element: <ArtDetailPage />,
	},
]);

export default routes;
