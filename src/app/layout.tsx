import React from 'react';
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import Header from './Header';
import Footer from './Footer';
import '@/styles/globals.css';
import { Provider } from '@Components/Shared/Provider';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Salami',
  description: 'Home-made app for curing home-made salami',
  keywords: 'salami, home cured salami, home curing, home-made salami curing',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Provider>
          <Header />
          <main className="container">
            <div>{children}</div>
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
