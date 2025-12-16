import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Coffee, Clock, ShoppingCart, Heart, User, LogOut, X } from 'lucide-react';

const MainSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleLogout = () => {
    // Clear auth (e.g., localStorage/JWT)
    localStorage.removeItem('currentUser'); // Matches your AuthPage storage
    console.log('Logging out...');
    onClose(); // Close sidebar
    navigate('/signup'); // Redirect to login/signup page
  };

  return (
    <>
      {/* Mobile Overlay - Dark overlay works in both modes */}
      <div
        className={`fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar - Full dark/light mode support, thinner width */}
      <nav
        className={`fixed left-0 top-0 h-full w-48 lg:w-64 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-lg dark:shadow-gray-800/50 z-30 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        {/* Mobile Close Button - Dark mode colors */}
        <button
          onClick={onClose}
          className="lg:hidden absolute right-4 top-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
          aria-label="Close sidebar"
        >
          <X size={24} />
        </button>

        {/* Sidebar Content */}
        <div className="flex flex-col h-full pt-16 lg:pt-0 px-4 py-4 mt-4 overflow-y-auto">
          {/* Navigation Links - Consistent dark hovers */}
          <div className="space-y-1 flex-1">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-amber-100 dark:hover:bg-gray-700 transition-colors duration-200"
              onClick={onClose}
            >
              <Home size={20} />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/menu"
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-amber-100 dark:hover:bg-gray-700 transition-colors duration-200"
              onClick={onClose}
            >
              <Coffee size={20} />
              <span>Browse Menu</span>
            </Link>

            <Link
              to="/orders"
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-amber-100 dark:hover:bg-gray-700 transition-colors duration-200"
              onClick={onClose}
            >
              <Clock size={20} />
              <span>Order History</span>
            </Link>

            <Link
              to="/cart"
              className="relative flex items-center gap-3 p-4 rounded-lg hover:bg-amber-100 dark:hover:bg-gray-700 transition-colors duration-200"
              onClick={onClose}
            >
              <ShoppingCart size={20} />
              <span>Cart</span>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 dark:bg-red-600 rounded-full flex items-center justify-center text-xs text-white">
                3 {/* Dynamic cart count */}
              </span>
            </Link>

            <Link
              to="/favorites"
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-amber-100 dark:hover:bg-gray-700 transition-colors duration-200"
              onClick={onClose}
            >
              <Heart size={20} />
              <span>Favorites</span>
            </Link>

            <Link
              to="/profile"
              className="flex items-center gap-3 p-4 rounded-lg hover:bg-amber-100 dark:hover:bg-gray-700 transition-colors duration-200"
              onClick={onClose}
            >
              <User size={20} />
              <span>Profile</span>
            </Link>
          </div>

          {/* Logout at Bottom - Dark mode variants */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-auto">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full p-4 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 text-red-600 dark:text-red-400 transition-colors duration-200"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainSidebar;