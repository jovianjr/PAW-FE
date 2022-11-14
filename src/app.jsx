import { RouterProvider } from 'react-router-dom';

import routes from '@/utils/constants/routes';
import { AuthProvider } from '@/utils/context/auth';

const App = () => {
    return (
        <AuthProvider>
            <RouterProvider router={routes} />
        </AuthProvider>
    );
};

export default App;
