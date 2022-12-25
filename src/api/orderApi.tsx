import axiosClient from "./axiosApi";

const orderApi = {
    postOrder: (data: object) => {
        let url = '/order';
        return axiosClient.post(url, {data});
    }
};

export default orderApi;