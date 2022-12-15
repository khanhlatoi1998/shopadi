import axiosClient from "./axiosApi";
import queryString from 'query-string';

const productApi = {
    getAll: (params?: any) => {
        let url = '/products/all';
        return axiosClient.get(url, { params });
    },
    getItem: (id: string | number | undefined) => {
        let url = `/products/item/${id}`;
        return axiosClient.get(url);
    },
    getAllPagination: (params?: any) => {
        let url = `/products`;
        return axiosClient.get(url, { params });
    }
};

export default productApi;