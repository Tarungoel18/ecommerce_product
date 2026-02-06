import axiosInstance from "../../services/axiosInstance";

export const getProduct = async () => {
    return axiosInstance.get(`/products/1`);
}