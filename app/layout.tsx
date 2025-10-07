import { poppins } from '@/lib/fonts';
import AuthInitializer from '@/components/auth/AuthInitializer';
import ToasterProvider from '@/components/layout/ToasterProvider';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tiny Tales - Your Shopping Destination',
  description: 'Discover amazing products at Tiny Tales. Shop the latest trends with great deals and fast delivery.',
  keywords: 'shopping, ecommerce, products, deals, online store',
  authors: [{ name: 'Tiny Tales Team' }],
  creator: 'Tiny Tales',
  publisher: 'Tiny Tales',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tinytales.com',
    title: 'Tiny Tales - Your Shopping Destination',
    description: 'Discover amazing products at Tiny Tales. Shop the latest trends with great deals and fast delivery.',
    siteName: 'Tiny Tales',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiny Tales - Your Shopping Destination',
    description: 'Discover amazing products at Tiny Tales. Shop the latest trends with great deals and fast delivery.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.variable} suppressHydrationWarning>
        <AuthInitializer />
        {children}
        <ToasterProvider />
      </body>
    </html>
  );
}