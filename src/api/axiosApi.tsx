import axios from 'axios';
import queryString from "query-string";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: {
        encode: (params: any) => {
            return queryString.stringify(params,)
        },
    },
});


axiosClient.interceptors.request.use(async (config) => {
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response
}, (err) => {
    throw err;
});

export default axiosClient;

