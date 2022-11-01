import { useParams } from 'react-router-dom';

const User = () => {
	const params = useParams();
	return <>User id: {params.id}</>;
};

export default User;
