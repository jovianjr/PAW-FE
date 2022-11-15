import Cookies from 'js-cookie';
import { authTokenKey } from '@/utils/constants/key';

export const get = () => {
    return Cookies.get(authTokenKey);
};

export const set = (newToken, options = null) => {
    Cookies.set(authTokenKey, newToken, options);
};

export const remove = () => {
    Cookies.remove(authTokenKey);
};

const jwt = { get, set, remove };
export default jwt;
