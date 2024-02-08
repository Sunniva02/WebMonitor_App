import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages';
import Dashboard from '../pages/dashboard';
import OverviewPage from '../pages/overview';
import PairingPage from '../pages/pairing';
import ErrorPage from '../pages/error-page';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/overview',
        element: <OverviewPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/pairing',
        element: <PairingPage />,
        errorElement: <ErrorPage />,
    },
    {

    },
]);

export default router;