import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, Film, MessageSquare, ShoppingCart, Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const user = {
    name: "Pankaj Sharma",
    avatar: "https://thumbs.dreamstime.com/b/head-shot-portrait-happy-indian-businessman-company-executive-manager-dressed-casual-shirt-posing-camera-standing-377659928.jpg"
  };

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://pbs.twimg.com/profile_images/1966113235117166592/yV1jcTwe_400x400.jpg" alt="Jharkhand Logo" className="h-8 w-8" />
              <span className="font-bold text-xl">Arnaya</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/chat" className="flex items-center hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                <MessageSquare size={20} className="mr-2"/> Multilingual Chat
              </Link>
              <Link to="/tour" className="flex items-center hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                <Film size={20} className="mr-2"/> Virtual Tour
              </Link>
              <Link to="/markets" className="flex items-center hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                <ShoppingCart size={20} className="mr-2"/> Marketplaces
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src={user.avatar} alt={user.name} />
                </button>
                {isProfileOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">Signed in as <br/><strong className="font-bold">{user.name}</strong></div>
                    <Link to="/logout" className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <LogOut size={16} className="mr-2"/> Logout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
              <Menu />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/chat" className="nav-link-mobile"><MessageSquare size={18} className="mr-2"/> Multilingual Chat</Link>
            <Link to="/tour" className="nav-link-mobile"><Film size={18} className="mr-2"/> Virtual Tour</Link>
            <Link to="/markets" className="nav-link-mobile"><ShoppingCart size={18} className="mr-2"/> Marketplaces</Link>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0"><img className="h-10 w-10 rounded-full" src={user.avatar} alt="" /></div>
                <div className="ml-3"><div className="text-base font-medium leading-none text-white">{user.name}</div></div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <Link to="/logout" className="nav-link-mobile mt-2"><LogOut size={16} className="mr-2"/> Logout</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
