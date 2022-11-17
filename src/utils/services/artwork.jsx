import axios from '@/utils/helpers/axios';

const searchByArtwork = async title => {
    const { data } = await axios.get(`/artwork?title=${title}`);

    return data;
};

const uploadFile = async image => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'pawpaw7');
    formData.append('cloud_name', 'df2gq53vg');

    const { data } = await axios({
        method: 'post',
        url: 'https://api.cloudinary.com/v1_1/df2gq53vg/image/upload',
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: null
        }
    });

    return data;
};

const newArtwork = async ({
    title,
    description,
    artist,
    dateCreated,
    image,
    genre
}) => {
    const { data } = await axios.post('/artwork/', {
        title: title,
        description: description,
        artist: artist,
        date_created: dateCreated,
        imgSrc: image,
        genre: genre
    });
};
const getListArt = async user_id => {
    const { data } = await axios.get(`/artwork?user_id=${user_id}`);
    return data;
};

const getDetailArt = async () => {
    const { data } = await axios.get('/artwork/slug/bali');

    return data;
};

const getAll = async sortBy => {
    let sort = 'date_created';
    if (sortBy === 'newest') sort = '-date_created';

    const { data } = await axios.get(`/artwork?sort=${sort}`);
    return data;
};

export {
    uploadFile,
    newArtwork,
    getListArt,
    searchByArtwork,
    getDetailArt,
    getAll
};
