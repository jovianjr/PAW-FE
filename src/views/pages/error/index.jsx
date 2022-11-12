import { useRouteError } from 'react-router-dom';
import StatusResult from '@/views/components/status-result';

const ErrorBoundary = () => {
	let error = useRouteError();
	if (error.status === 404) {
		return (
			<StatusResult type="warning" title="404" detail="Page not found" titleClassName='text-[64px]' detailClassName='text-[24px]'/>
		)
	}
	return (
		<StatusResult title="Sorry, an unexpected error has occurred" detail={error.statusText || error.message}/>
	);
};

export default ErrorBoundary;
