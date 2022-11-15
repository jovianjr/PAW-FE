import axios from '@/utils/helpers/axios';

const login = async ({ identity, password }) => {
    const { data } = await axios.post('/auth/login', {
        identity: identity,
        password: password
    });

    return data;
};

const forgotPassword = async email => {
    const { data } = await axios.post('/auth/forgot-password', {
        email: email
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

export { login, forgotPassword, resetPassword, resetPasswordCheck };
