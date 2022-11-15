import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';

import { AuthContext } from '@/utils/context/auth';
import { getUser } from '@/utils/services/user';
import LoadingScreen from '@/views/components/loading';

const SessionManager = ({}) => {
    const auth = useContext(AuthContext);
    const { isLoading, isFetching } = useQuery(['me'], () => getUser(), {
        refetchOnWindowFocus: false,
        refetchInterval: false,
        onSuccess: res => {
            console.log('session', res.data);
            auth.login(res.data);
        },
        onError: err => {
            auth.logout();
        },
        retry: (failureCount, error) => {
            if (error?.response?.status === 401) return false;
            else if (failureCount === 2) return false;
            else return true;
        }
    });

    return <LoadingScreen when={isLoading || isFetching} />;
};

export default SessionManager;
