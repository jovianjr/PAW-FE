import axios from '@/utils/helpers/axios';

const activate = async token => {
    const { data } = await axios.get(`/auth/activate/${token}`);

    return data;
};

const forgotPassword = async email => {
    const { data } = await axios.post('/auth/forgot-password', {
        email: email
    });

    return data;
};

const login = async ({ identity, password }) => {
    const { data } = await axios.post('/auth/login', {
        identity: identity,
        password: password
    });

    return data;
};

const resetPassword = async ({ token, password, confirmPassword }) => {
    const { data } = await axios.patch(`/auth/reset-password/${token}`, {
        password: password,
        confirmPassword: confirmPassword
    });

    return data;
};

const resetPasswordCheck = async token => {
    const { data } = await axios.get(`/auth/reset-password/${token}`);

    return data;
};

const signUp = async ({ username, email, password, confirmPassword, name }) => {
    const { data } = await axios.post('/auth/register', {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        name: name
    });

    return data;
};

const updatePassword = async ({
    currentPassword,
    newPassword,
    confirmPassword
}) => {
    const { data } = await axios.patch(`/auth/update-password`, {
        currentPassword: currentPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword
    });

    return data;
};

export {
    activate,
    forgotPassword,
    login,
    resetPassword,
    resetPasswordCheck,
    signUp,
    updatePassword
};
