import axios from '@/utils/helpers/axios';

const searchByUser = async username => {
    const { data } = await axios.get(`/user/search/${username}`);

    return data;
};

const getUser = async () => {
    const { data } = await axios.get('/user', { headers: null });

    return data;
};

const getUserByUsername = async username => {
    const { data } = await axios.get(`/user/${username}`, { headers: null });
    return data;
};

const updateUser = async ({
    image,
    name,
    title,
    bio,
    instagram,
    twitter,
    youtube,
    facebook
}) => {
    const { data } = await axios.patch(`/user`, {
        image: image,
        name: name,
        title: title,
        bio: bio,
        instagram: instagram,
        twitter: twitter,
        youtube: youtube,
        facebook: facebook
    });

    return data;
};

export { getUser, searchByUser, getUserByUsername, updateUser };
