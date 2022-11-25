import { useRouteError } from 'react-router-dom';
import StatusResult from '@/views/components/status-result';
import MainLayout from '@/views/layouts/main-layout';

const ErrorBoundary = () => {
    let error = useRouteError();
    return (
        <MainLayout>
            {error.status === 404 || error === 404 ? (
                <StatusResult
                    type="warning"
                    title="404"
                    detail="Page not found"
                    titleClassName="text-[40px] lg:text-[64px]"
                    detailClassName="text-[20px] lg:text-[24px]"
                    iconClassName="w-[120px] lg:w-[200px]"
                />
            ) : (
                <StatusResult
                    title="An error has occurred"
                    detail={error.statusText || error.message}
                />
            )}
        </MainLayout>
    );
};

export default ErrorBoundary;
