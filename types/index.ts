export interface User {
    id: number;
    type: 'client' | 'restaurant';
    name: string;
    email: string;
    mobile_country_code: string;
    mobile: string;
    image: string;
    email_verified_at: boolean;
    is_complete: boolean;
    is_approved: boolean;
    status_docs: string;
  }
  
  export interface AuthResponse {
    status: boolean;
    status_code: number;
    data: User & { token: string };
    message: string;
  }
  
  export interface RegisterData {
    name: string;
    email: string;
    mobile: string;
    password: string;
    password_confirmation: string;
    mobile_country_code: string;
  }
  
  export interface LoginData {
    email: string;
    password: string;
  }
  
  export interface VerifyData {
    code: string;
  }
  
  export interface ApiError {
    status: boolean;
    status_code: number;
    message: string;
    errors?: Record<string, string[]>;
  }