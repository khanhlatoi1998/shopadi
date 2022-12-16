import axiosClient from "./axiosApi";
import queryString from 'query-string';

const productApi = {
    getAll: (params?: object) => {
        let url = '/products/all';
        return axiosClient.get(url, { params });
    },
    getItem: (id: string | number | undefined) => {
        let url = `/products/item/${id}`;
        return axiosClient.get(url);
    },
    getAllPagination: (params?: object) => {
        let url = `/products`;
        return axiosClient.get(url, { params });
    },
    getCategoryItems: (category: string, params?: object) => {
        let url = `/products/category/${category}`;
        return axiosClient.get(url, { params });
    }
};

export default productApi;