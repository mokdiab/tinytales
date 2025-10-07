import { poppins } from '@/lib/fonts';
import AuthInitializer from '@/components/auth/AuthInitializer';
import ToasterProvider from '@/components/layout/ToasterProvider';
import './globals.css';


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