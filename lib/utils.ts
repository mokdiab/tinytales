import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const countryCodes = [
  { code: '1', country: 'USA/Canada', flag: '🇺🇸' },
  { code: '20', country: 'Egypt', flag: '🇪🇬' },
  { code: '44', country: 'UK', flag: '🇬🇧' },
  { code: '966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '971', country: 'UAE', flag: '🇦🇪' },
  { code: '965', country: 'Kuwait', flag: '🇰🇼' },
  { code: '973', country: 'Bahrain', flag: '🇧🇭' },
  { code: '974', country: 'Qatar', flag: '🇶🇦' },
  { code: '968', country: 'Oman', flag: '🇴🇲' },
  { code: '962', country: 'Jordan', flag: '🇯🇴' },
  { code: '961', country: 'Lebanon', flag: '🇱🇧' },
];

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
}

export function getErrorMessage(error: unknown): string {
  if (error && typeof error === 'object' && 'message' in error) {
    return (error as { message: string }).message;
  }
  if (error && typeof error === 'object' && 'errors' in error) {
    const errorObj = error as { errors: Record<string, unknown> };
    if (typeof errorObj.errors === 'object') {
      const firstError = Object.values(errorObj.errors)[0];
      if (Array.isArray(firstError) && firstError.length > 0) {
        return firstError[0] as string;
      }
    }
  }
  return 'An unexpected error occurred';
}