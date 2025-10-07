import { LoginForm } from '@/components/auth/LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Tiny Tales',
  description: 'Sign in to your account',
};

export default function LoginPage() {
  return <LoginForm />;
}