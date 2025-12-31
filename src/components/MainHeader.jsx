import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart, User, Sun, Moon } from 'lucide-react'; // lucide-react icons
import { useSelector } from 'react-redux'; // For cart quantity

const MainHeader = ({ onToggleSidebar }) => { // Pass onToggleSidebar prop for parent to handle sidebar state
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); // State for user data

  // Fetch user from localStorage on mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
    setCurrentUser(user);
  }, []);

  // Select totalQuantity from Redux cart
  const totalQuantity = useSelector((state) => state.cart.totalQuantity || 0);

  // console.log('====================================');
  // console.log(currentUser);
  // console.log('====================================');
  // Generate initials from first and last name
  const getUserInitials = (user) => {
  if (!user) return "U";

  // Case 1: firstName + lastName
  if (user.firstname && user.lastname) {
    return (
      user.firstname.charAt(0) + user.lastname.charAt(0)
    ).toUpperCase();
  }

  // Case 2: username like "John Doe"
  if (user.username) {
    const parts = user.username.trim().split(" ");
    if (parts.length >= 2) {
      return (
        parts[0].charAt(0) + parts[1].charAt(0)
      ).toUpperCase();
    }
    return parts[0].charAt(0).toUpperCase();
  }

  return "U";
};

  const toggleTheme = () => {
  setIsDarkMode((prev) => !prev);

  if (typeof window !== "undefined") {
    document.documentElement.classList.toggle("dark");
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
          <Menu size={24} className="sm:size-24 md:size-10" />
        </button>
        
        {/* User Profile */}
        <div className="flex items-center gap-2 sm:gap-3 truncate min-w-[120px] sm:min-w-[140px]">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-400 flex items-center justify-center overflow-hidden">
            <span className="text-white font-bold text-sm sm:text-base leading-none">
              {getUserInitials(currentUser)}
            </span>
          </div>
          <h2 className="text-sm sm:text-base lg:text-lg font-medium truncate">
            Welcome, {currentUser ? currentUser.username : 'User'}
          </h2>
        </div>
      </div>

      {/* Right Side: Cart + Theme Toggle */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Cart Icon */}
        <Link
          to="/app/cart"
          className="p-1 sm:p-2 text-[#ede6df] hover:text-amber-300 dark:hover:text-amber-400 transition-colors duration-200 relative"
          aria-label="View cart"
        >
          <ShoppingCart size={20} className="sm:size-28 md:size-10" />
          {/* Optional: Dynamic Badge for cart count from Redux */}
          {totalQuantity > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
              {totalQuantity}
            </span>
          )}
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-1 sm:p-2 text-[#ede6df] hover:text-amber-300 dark:hover:text-amber-400 transition-colors duration-200"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <Sun size={20} className="sm:size-28 md:size-10" /> : <Moon size={20} className="sm:size-28 md:size-10" />}
        </button>
      </div>
    </header>
  );
};

export default MainHeader;