import axios, { AxiosError, AxiosInstance } from 'axios';
import { ApiError } from '@/types';

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data',
  },
});
apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiError>) => {
    if (error.response) {
      if (error.response.status === 401 && typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        window.location.href = '/login';
      }
      
      return Promise.reject({
        message: error.response.data?.message || 'An error occurred',
        errors: error.response.data?.errors || {},
        status_code: error.response.data?.status_code || error.response.status,
      });
    }
    return Promise.reject({
      message: 'Network error. Please check your connection.',
      errors: {},
      status_code: 0,
    });
  }
);

export default apiClient;