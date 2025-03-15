import Header from '@/components/layout/header';

export default function Layout({ children }) {
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
