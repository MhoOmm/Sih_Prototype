import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-950 text-white">
      <Navbar />
      <main>
        {/* The Outlet renders the specific page component for the current route */}
        <Outlet />
      </main>
      <footer className="bg-gray-900/50 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          © 2025 Jharkhand Tourism. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
