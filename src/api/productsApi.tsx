import axiosClient from "./axiosApi";

const productApi = {
    getAll: (params?: any) => {
        let url = '/products/all';
        return axiosClient.get(url, { params });
    },
};

export default productApi;