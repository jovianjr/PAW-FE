import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';

import SessionManager from '@/session';
import { Announcement } from '@/views/components/announcement';

import routes from '@/utils/constants/routes';
import { AuthProvider } from '@/utils/context/auth';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Announcement />
                <SessionManager />
                <RouterProvider router={routes} />
            </AuthProvider>
            <ReactQueryDevtools initialIsOpen={false} className="!text-white" />
        </QueryClientProvider>
    );
};

export default App;
