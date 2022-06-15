import axiosInstance from '../../service/axios';

export const getSingleProductApi = (id) => axiosInstance.get(`/products/${id}`);
