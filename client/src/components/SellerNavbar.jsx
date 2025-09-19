import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, Plus, Package, BarChart3, Menu, Home, Eye } from 'lucide-react';
import Logo from "../assets/Logo.png"

const SellerNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const user = {
    name: "Pankaj Sharma",
    avatar: "https://thumbs.dreamstime.com/b/head-shot-portrait-happy-indian-businessman-company-executive-manager-dressed-casual-shirt-posing-camera-standing-377659928.jpg",
    role: "Artisan"
  };

  return (
    <div className=" bg-black text-white">
        <nav className="sticky top-0 z-50 w-full backdrop-filter backdrop-blur-lg border-b border-white/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <Link to="/seller-dashboard" className="flex items-center space-x-2 gap-3">
              <img 
                src={Logo} 
                alt="Jharkhand Logo" 
                className="h-8 w-8 rounded-lg scale-180" 
              />
              <span className="font-bold text-2xl text-white">Aranya</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="/seller-dashboard" 
                className="flex items-center text-white/90 hover:text-white hover:bg-white/20 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              >
                <BarChart3 size={20} className="mr-2"/> Dashboard
              </Link>
              <Link 
                to="/showcase-craft" 
                className="flex items-center text-white/90 hover:text-white hover:bg-green-500/30 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 bg-green-600/20"
              >
                <Plus size={20} className="mr-2"/> Showcase Craft
              </Link>
              <Link 
                to="/my-crafts" 
                className="flex items-center text-white/90 hover:text-white hover:bg-white/20 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              >
                <Package size={20} className="mr-2"/> My Crafts
              </Link>
              <Link 
                to="/marketplace-view" 
                className="flex items-center text-white/90 hover:text-white hover:bg-white/20 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              >
                <Eye size={20} className="mr-2"/> Marketplace View
              </Link>
            </div>
          </div>
          
          {/* Desktop Profile */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)} 
                  className="bg-white/20 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-white/50 hover:bg-white/30 transition-all duration-200 p-1"
                >
                  <span className="sr-only">Open user menu</span>
                  <img 
                    className="h-8 w-8 rounded-full border-2 border-white/30" 
                    src={user.avatar} 
                    alt={user.name} 
                  />
                </button>
                
                {/* Profile Dropdown with Glassmorphism */}
                {isProfileOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-xl shadow-lg bg-white/20 backdrop-filter backdrop-blur-md border border-white/30">
                    <div className="px-4 py-3 text-sm text-white border-b border-white/20">
                      <div className="font-bold">{user.name}</div>
                      <div className="text-green-400 text-xs">{user.role}</div>
                    </div>
                    <Link 
                      to="/seller-idcard" 
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-white/90 hover:bg-white/20 hover:text-white transition-all duration-200"
                    >
                      Aranya ID
                    </Link>
                    <Link 
                      to="/logout" 
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-white/90 hover:bg-white/20 hover:text-white rounded-b-xl transition-all duration-200"
                    >
                      <LogOut size={16} className="mr-2"/> Logout
                    </Link>
                  </div>
                )}
              </div>
            </div>
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
              to="/dashboard" 
              className="flex items-center text-white/90 hover:text-white hover:bg-white/20 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200"
            >
              <BarChart3 size={18} className="mr-2"/> Dashboard
            </Link>
            <Link 
              to="/showcase-craft" 
              className="flex items-center text-white/90 hover:text-white hover:bg-green-500/30 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 bg-green-600/20"
            >
              <Plus size={18} className="mr-2"/> Showcase Craft
            </Link>
            <Link 
              to="/my-crafts" 
              className="flex items-center text-white/90 hover:text-white hover:bg-white/20 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200"
            >
              <Package size={18} className="mr-2"/> My Crafts
            </Link>
            <Link 
              to="/marketplace-view" 
              className="flex items-center text-white/90 hover:text-white hover:bg-white/20 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200"
            >
              <Eye size={18} className="mr-2"/> Marketplace View
            </Link>
            
            {/* Mobile Profile Section */}
            <div className="border-t border-white/20 pt-4 pb-3">
              <div className="flex items-center px-3">
                <div className="flex-shrink-0">
                  <img 
                    className="h-10 w-10 rounded-full border-2 border-white/30" 
                    src={user.avatar} 
                    alt="" 
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">{user.name}</div>
                  <div className="text-sm text-green-400 mt-1">{user.role}</div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <Link 
                  to="/seller-idcard" 
                  className="flex items-center text-white/90 hover:text-white hover:bg-white/20 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                >
                  Aranya ID
                </Link>
                <Link 
                  to="/logout" 
                  className="flex items-center text-white/90 hover:text-white hover:bg-white/20 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                >
                  <LogOut size={16} className="mr-2"/> Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
    </div>
  );
};

export default SellerNavbar;
