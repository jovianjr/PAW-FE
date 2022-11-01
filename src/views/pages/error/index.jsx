import { useRouteError } from 'react-router-dom';
const ErrorBoundary = () => {
	let error = useRouteError();
	return (
		<div>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
};

export default ErrorBoundary;
