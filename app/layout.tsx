import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../styles/globals.css';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Find Your Future',
  description: 'A global education and career guidance platform.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
