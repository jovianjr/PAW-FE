import { useRouteError } from 'react-router-dom';
import StatusResult from '@/views/components/status-result';
import MainLayout from '@/views/layouts/main-layout';

const ErrorBoundary = () => {
    let error = useRouteError();
    return (
        <MainLayout>
            {error.status === 404 ? (
                <StatusResult
                    type="warning"
                    title="404"
                    detail="Page not found"
                    titleClassName="text-[64px]"
                    detailClassName="text-[24px]"
                />
            ) : (
                <StatusResult
                    title="Sorry, an unexpected error has occurred"
                    detail={error.statusText || error.message}
                />
            )}
        </MainLayout>
    );
};

export default ErrorBoundary;
