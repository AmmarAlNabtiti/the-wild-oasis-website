// Components
import Navigation from '@/components/Navigation';
import Logo from '@/components/Logo';

// Fonts
import { Josefin_Sans } from 'next/font/google';
const josefinSans = Josefin_Sans({ subsets: ['latin'], display: 'swap' });

// Styles
import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: {
    default: 'Welcome to The Wild Oasis',
    template: '%s | The Wild Oasis',
  },
  description: 'Luxury Cabins hotel in the Italian Dolomites',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen antialiased bg-primary-950 text-primary-100 ${josefinSans.className}`}
      >
        <>
          <Header />
          <main className="px-8 py-12 mx-auto max-w-7xl">{children}</main>
        </>
      </body>
    </html>
  );
}
