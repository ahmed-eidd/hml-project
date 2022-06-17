import axiosInstance from '../../service/axios';

export const getSingleProductApi = (id) => axiosInstance.get(`/products/${id}`);

export const addSingleProductToCartApi = (data) => {
  const { id, quantity } = data;
  const bodyFormData = new FormData();
  bodyFormData.append('productId', id);
  bodyFormData.append('quantity', quantity);
  return axiosInstance({
    method: 'post',
    data: bodyFormData,
    url: '/cart/add',
  });
};

export const updateSingleProductToCartApi = (data) => {
  const { id, quantity } = data;
  const bodyFormData = new FormData();
  bodyFormData.append('itemId', id);
  bodyFormData.append('quantity', quantity);
  return axiosInstance({
    method: 'post',
    data: bodyFormData,
    url: '/cart/update',
  });
};

export const deleteSingleProductFromCartApi = (id) => {
  const bodyFormData = new FormData();
  bodyFormData.append('itemId', id);
  return axiosInstance({
    method: 'post',
    data: bodyFormData,
    url: '/cart/delete',
  });
};
