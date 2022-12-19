import axiosClient from "./axiosApi";

const postsApi = {
    getListPost: (params?: object) => {
        let url = `/posts`;
        return axiosClient.get(url, { params })
    },
    getPost: (id: string | number | undefined) => {
        let url = `/posts/${id}`;
        return axiosClient.get(url);
    },
};

export default postsApi