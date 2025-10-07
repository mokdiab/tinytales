'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { authApi } from '@/lib/api/auth';
import { useAuthStore } from '@/lib/store/authStore';
import { verifySchema, VerifyFormData } from '@/lib/validations/auth';
import { getErrorMessage } from '@/lib/utils';
import { Button } from '@/components/localUi/Button';
import { Input } from '@/components/localUi/Input';

export const VerifyForm = () => {
  const router = useRouter();
  const { user, login } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<VerifyFormData>({
    resolver: zodResolver(verifySchema),
  });

  const onSubmit = async (data: VerifyFormData) => {
    setIsLoading(true);
    try {
      const response = await authApi.verifyEmail(data);
      
      if (response.status && response.data) {
        login(response.data, response.data.token);
        toast.success(response.message || 'Email verified successfully!');
        router.push('/dashboard');
      }
    } catch (error: unknown) {
      const errorMessage = getErrorMessage(error);
      toast.error(errorMessage);
      
      if (error && typeof error === 'object' && 'errors' in error && error.errors) {
        Object.entries(error.errors as Record<string, unknown>).forEach(([field, messages]) => {
          if (Array.isArray(messages) && messages.length > 0) {
            setError(field as keyof VerifyFormData, {
              type: 'manual',
              message: messages[0] as string,
            });
          }
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);
    try {
      const response = await authApi.resendVerificationCode();
      if (response.status) {
        toast.success(response.message || 'Verification code sent!');
      }
    } catch (error: unknown) {
      const errorMessage = getErrorMessage(error);
      toast.error(errorMessage);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8">
      <div className="text-center mb-8">
        <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify Your Email</h1>
        <p className="text-gray-600">
          We&apos;ve sent a verification code to
          <br />
          <span className="font-medium text-gray-900">{user?.email}</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          For testing purposes, use code: <span className="font-mono font-bold">123456</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Input
          {...register('code')}
          type="text"
          label="Verification Code"
          placeholder="Enter 6-digit code"
          maxLength={6}
          error={errors.code?.message}
          className="text-center text-2xl tracking-widest font-mono"
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          }
        />

        <Button
          type="submit"
          isLoading={isLoading}
          className="w-full"
          size="lg"
        >
          Verify Email
        </Button>

        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">
            Didn&apos;t receive the code?
          </p>
          <Button
            type="button"
            variant="ghost"
            onClick={handleResendCode}
            isLoading={isResending}
            disabled={isResending}
          >
            Resend Code
          </Button>
        </div>
      </form>
    </div>
  );
};