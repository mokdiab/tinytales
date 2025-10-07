import { RegisterForm } from '@/components/auth/RegisterForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register | Tiny Tales',
  description: 'Create a new account',
};

export default function RegisterPage() {
  return <RegisterForm />;
}