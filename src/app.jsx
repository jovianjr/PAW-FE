import { RouterProvider } from 'react-router-dom';
import routes from '@/utils/constants/routes';

const App = () => {
    return <RouterProvider router={routes} />;
};

export default App;
