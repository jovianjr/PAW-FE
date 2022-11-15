import axios from 'axios';
import { get } from '@/utils/services/jwt';

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

api.interceptors.request.use(
    req => {
        const authorization =
            req.headers && req.headers['Authorization'] !== undefined
                ? req.headers['Authorization']
                : `Bearer ${get()}`;

        req.headers = { Authorization: authorization };
        return Promise.resolve(req);
    },
    err => {
        return Promise.reject(err);
    }
);

api.interceptors.response.use(
    res => {
        return Promise.resolve(res);
    },
    err => {
        return Promise.reject(err);
    }
);

export default api;
