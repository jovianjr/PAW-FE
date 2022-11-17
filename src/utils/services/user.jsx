import axios from '@/utils/helpers/axios';

const searchByUser = async username => {
    const { data } = await axios.get(`/user/search/${username}`);

    return data;
};

const getUser = async () => {
    const { data } = await axios.get('/user', { headers: null });

    return data;
};

export { getUser, searchByUser };
