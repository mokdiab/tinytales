import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name must contain only letters and spaces'),
  
  email: z.string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .toLowerCase(),
  
  mobile: z.string()
    .min(9, 'Phone number must be at least 9 digits')
    .max(15, 'Phone number must not exceed 15 digits')
    .regex(/^[0-9]+$/, 'Phone number must contain only digits'),
  
  mobile_country_code: z.string()
    .min(1, 'Country code is required')
    .regex(/^[0-9]+$/, 'Country code must contain only digits'),
  
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must not exceed 50 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
  
  password_confirmation: z.string()
    .min(1, 'Please confirm your password'),
}).refine((data) => data.password === data.password_confirmation, {
  message: "Passwords don't match",
  path: ['password_confirmation'],
});

export const loginSchema = z.object({
  email: z.string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .toLowerCase(),
  
  password: z.string()
    .min(1, 'Password is required'),
});

export const verifySchema = z.object({
  code: z.string()
    .length(6, 'Verification code must be 6 digits')
    .regex(/^[0-9]+$/, 'Verification code must contain only digits'),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type VerifyFormData = z.infer<typeof verifySchema>;