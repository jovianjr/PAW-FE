import axios from '@/utils/helpers/axios';

const getUser = async () => {
    const { data } = await axios.get('/user', { headers: null });

    return data;
};

const getUserByUsername = async username => {
    const { data } = await axios.get(`/user/${username}`, { headers: null });

    return data;
};

export { getUser, getUserByUsername };
