'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store/authStore';
import { authApi } from '@/lib/api/auth';
import toast from 'react-hot-toast';
import { Button } from '@/components/localUi/Button';
import Image from 'next/image';

export default function DashboardPage() {
  const router = useRouter();
  const { user, logout, isLoading } = useAuthStore();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  const handleLogout = async () => {
    try {
      await authApi.logout();
      logout();
      toast.success('Logged out successfully');
      router.push('/login');
    } catch {
      toast.error('Failed to logout');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold text-gray-900">Tiny tales</h1>
            <Button onClick={handleLogout} variant="outline" size="sm">
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Account Type</h3>
              <p className="text-gray-700 capitalize">{user.type}</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Email Status</h3>
              <p className="text-gray-700">
                {user.email_verified_at ? (
                  <span className="text-green-600 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </span>
                ) : (
                  <span className="text-yellow-600">Not Verified</span>
                )}
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Phone Number</h3>
              <p className="text-gray-700">+{user.mobile_country_code} {user.mobile}</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Account ID</h3>
              <p className="text-gray-700">#{user.id}</p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => router.push('/products')} 
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Browse Products
              </Button>
              <Button 
                variant="outline" 
                onClick={() => router.push('/profile')}
              >
                Edit Profile
              </Button>
              <Button 
                variant="outline" 
                onClick={() => router.push('/settings')}
              >
                Settings
              </Button>
            </div>
          </div>

          {!user.email_verified_at && (
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Please verify your email address to access all features
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}