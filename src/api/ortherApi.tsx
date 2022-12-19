import axiosClient from "./axiosApi";

const ortherApi = {
    getAll: () => {
        let url = '/orther';
        return axiosClient.get(url);
    }
};

export default ortherApi;