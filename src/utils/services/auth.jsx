import axios from '@/utils/helpers/axios';

const login = async ({ identity, password }) => {
    const { data } = await axios.post(
        '/auth/login',
        {
            identity: identity,
            password: password
        },
        { headers: null }
    );

    return data;
};

export { login };
