import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart, User, Sun, Moon } from 'lucide-react'; // lucide-react icons

const MainHeader = ({ onToggleSidebar }) => { // Pass onToggleSidebar prop for parent to handle sidebar state
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, toggle 'dark' class on html/document.body
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark');
    }
  };

  return (
    <header className="w-full min-h-[60px] sm:min-h-[70px] lg:min-h-[80px] fixed top-0 left-0 right-0 flex items-center justify-between px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12 bg-[#455238] dark:bg-gray-900 text-[#ede6df] dark:text-gray-200 shadow-lg z-50">
      {/* Left Side: Toggle + User Profile */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        {/* Sidebar Toggle Button */}
        <button
          onClick={onToggleSidebar}
          className="p-1 sm:p-2 text-[#ede6df] hover:text-amber-300 dark:hover:text-amber-400 transition-colors duration-200"
          aria-label="Toggle sidebar"
        >
          <Menu size={20} className="sm:size-24" />
        </button>
        
        {/* User Profile */}
        <div className="flex items-center gap-2 sm:gap-3 truncate min-w-[120px] sm:min-w-[140px]">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-400 flex items-center justify-center overflow-hidden">
            <User size={16} className="text-white" /> {/* Placeholder; replace with <img src={userImg} /> */}
          </div>
          <h2 className="text-sm sm:text-base lg:text-lg font-medium truncate">Welcome, User</h2>
        </div>
      </div>

      {/* Right Side: Cart + Theme Toggle */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Cart Icon */}
        <Link
          to="/cart"
          className="p-1 sm:p-2 text-[#ede6df] hover:text-amber-300 dark:hover:text-amber-400 transition-colors duration-200 relative"
          aria-label="View cart"
        >
          <ShoppingCart size={15} className="sm:size-24" />
          {/* Optional: Badge for cart count */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">0</span>
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-1 sm:p-2 text-[#ede6df] hover:text-amber-300 dark:hover:text-amber-400 transition-colors duration-200"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <Sun size={20} className="sm:size-24" /> : <Moon size={20} className="sm:size-24" />}
        </button>
      </div>
    </header>
  );
};

export default MainHeader;