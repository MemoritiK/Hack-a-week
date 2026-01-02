import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-12">
          <a className="text-xl font-bold text-blue-400">App ko naam</a>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/" className="text-gray-300 hover:text-blue-400">Home</a>
            <a href="/about" className="text-gray-300 hover:text-blue-400">.....</a>
            <a href="/login" className="text-gray-300 hover:text-blue-400">Login</a>
            <a href="/register" className="text-gray-300 hover:text-blue-400">Register</a>
          </div>
        </div>
      </nav>
 <main className="container mx-auto px-4 mt-6">
        {children}
      </main>
    </div>

  );
}
