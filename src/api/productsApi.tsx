import axiosClient from "./axiosApi";
import queryString from 'query-string';
import { DataProductsType } from "contains/type";

const productApi = {
    getAll: (params?: object) => {
        let url = '/products/all';
        return axiosClient.get(url, { params });
    },
    getItem: (id: string | number | undefined) => {
        let url = `/products/item/${id}`;
        return axiosClient.get(url);
    },
    getListItem: (params?: object) => {
        let url = `/products`;
        return axiosClient.get(url, { params });
    },
    getCategoryItems: (category: string, params?: object) => {
        let url = `/products/category/${category}`;
        return axiosClient.get<DataProductsType>(url, { params });
    }
};

export default productApi;