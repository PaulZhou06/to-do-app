import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'A full stack todo application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          {children}
        </main>
      </body>
    </html>
  );
}
