import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, Users, Store, BarChart3, Menu, Shield,Sticker } from 'lucide-react';
import Logo from "../assets/Logo.png"

const GovNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-filter backdrop-blur-lg bg-black border-b border-white/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <Link to="/govt-coin-dash" className="flex items-center space-x-2 gap-3">
              <img 
                src={Logo} 
                alt="Jharkhand Logo" 
                className="h-8 w-8 rounded-lg scale-180" 
              />
              <span className="font-bold text-2xl text-white">Aranya</span>
              <span className="text-sm text-blue-400 bg-blue-400/20 px-2 py-1 rounded-full">Gov Console</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-[4rem]">
              <Link 
                to="/govt-coin-dash" 
                className="flex items-center text-white/90 hover:text-white hover:bg-white/20 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              >
                <BarChart3 size={20} className="mr-2"/> Analytics Dashboard
              </Link>
              <Link 
                to="/sentiments" 
                className="flex items-center text-white/90 hover:text-white hover:bg-white/20 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              >
                <Sticker size={20} className="mr-2"/> Emotion Lens
              </Link>
            </div>
          </div>
          
          {/* Desktop Logout */}
          <div className="hidden md:block">
            <Link 
              to="/logout" 
              className="flex items-center text-white/90 hover:text-red-400 hover:bg-red-400/20 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200"
            >
              <LogOut size={16} className="mr-2"/> Logout
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="bg-white/20 inline-flex items-center justify-center p-2 rounded-xl text-white hover:text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu with Glassmorphism */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/10 backdrop-filter backdrop-blur-sm border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/govt-coin-dash" 
              className="flex items-center text-white/90 hover:text-white hover:bg-white/20 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200"
            >
              <BarChart3 size={18} className="mr-2"/> Analytics Dashboard
            </Link>
            
            <Link 
              to="/user-management" 
              className="flex items-center text-white/90 hover:text-white hover:bg-white/20 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200"
            >
              <Users size={18} className="mr-2"/> User Management
            </Link>
            <Link 
              to="/sentiments" 
              className="flex items-center text-white/90 hover:text-white hover:bg-white/20 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200"
            >
              <Sticker size={18} className="mr-2"/> Emotion Lens
            </Link>
            
            {/* Mobile Logout Section */}
            <div className="border-t border-white/20 pt-4 pb-3">
              <Link 
                to="/logout" 
                className="flex items-center text-white/90 hover:text-red-400 hover:bg-red-400/20 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              >
                <LogOut size={16} className="mr-2"/> Logout
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default GovNavbar;
