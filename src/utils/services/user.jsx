import axios from '@/utils/helpers/axios';

const getUser = async () => {
    const { data } = await axios.get('/user', { headers: null });

    return data;
};

export { getUser };
