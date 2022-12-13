import axiosClient from "./axiosApi";

const productApi = {
    getAll: (params?: any) => {
        let url = '/products/all';
        return axiosClient.get(url, { params });
    },
    getItem: (id: string | number | undefined) => {
        let url = `/products/item/${id}`;
        return axiosClient.get(url);
    }
};

export default productApi;