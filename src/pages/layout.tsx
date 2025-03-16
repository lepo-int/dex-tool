import Header from '@/components/layout/header';
import { ReactNode } from 'react';

interface LayoutProps {
  children:ReactNode
}
export default function Layout({ children } : LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-violet-800">{children}</main>
      <footer className="bg-violet-800 text-center text-white p-4">
        © {new Date().getFullYear()} Bounty Swap. All rights reserved.
      </footer>
    </div>
  );
}
