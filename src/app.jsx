import { RouterProvider } from 'react-router-dom';
import routes from '@/utils/routes';

const App = () => {
	return <RouterProvider router={routes} />;
};

export default App;
