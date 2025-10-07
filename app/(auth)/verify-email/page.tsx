import { VerifyForm } from '@/components/auth/VerifyForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verify Email | Tiny Tales',
  description: 'Verify your email address',
};

export default function VerifyEmailPage() {
  return <VerifyForm />;
}