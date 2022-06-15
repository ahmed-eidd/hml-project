import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://164.92.166.103/pharmacy-backend/public/api/',
  responseType: 'json',
});

let token =
  'koPYkiTVWH8uml21PPdSH8yKzUZQROM4mVLTYqzHYAPFSVWprpGtjeZuDioV3170KZAWatYdfalk0eGq';

axiosInstance.interceptors.request.use((config) => {
  const authorizedConfig = { ...config };
  authorizedConfig.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use((response) => response);

export default axiosInstance;
