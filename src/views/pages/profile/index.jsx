import { useContext } from 'react';

import User from '@/views/pages/user';
import { AuthContext } from '@/utils/context/auth';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return <User username={user.username} isLoggedIn={!!user} />;
};

export default Profile;
