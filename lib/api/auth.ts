import apiClient from './client';
import { AuthResponse, RegisterData, LoginData, VerifyData } from '@/types';

export const authApi = {
  register: async (data: RegisterData): Promise<AuthResponse> => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    
    const response = await apiClient.post<AuthResponse>('/auth/register', formData);
    return response.data;
  },

  login: async (data: LoginData): Promise<AuthResponse> => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    
    const response = await apiClient.post<AuthResponse>('/auth/login', formData);
    return response.data;
  },

  verifyEmail: async (data: VerifyData): Promise<AuthResponse> => {
    const formData = new FormData();
    formData.append('code', data.code);
    
    const response = await apiClient.post<AuthResponse>('/auth/verify-email', formData);
    return response.data;
  },

  resendVerificationCode: async (): Promise<{ status: boolean; message: string }> => {
    const response = await apiClient.post('/auth/verify-email/resend-code', new FormData());
    return response.data;
  },

  getUserData: async (): Promise<AuthResponse> => {
    const response = await apiClient.get<AuthResponse>('/auth/user-data');
    return response.data;
  },

  logout: async (): Promise<{ status: boolean; message: string }> => {
    const response = await apiClient.post('/auth/logout', new FormData());
    return response.data;
  },
};