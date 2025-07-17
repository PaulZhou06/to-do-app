import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'A full stack todo application',
};

export default function RootLayout({
  children,
}: {
  children: any;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <AuthProvider children={
          <>
            <Navbar />
            <main className="container mx-auto px-4 py-8 max-w-4xl">
              {children}
            </main>
          </>
        } />
      </body>
    </html>
  );
}
