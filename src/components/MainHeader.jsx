import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingCart, Sun, Moon } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";
import {toggleSidebar} from '../features/ui/uiSlice';

const MainHeader = ({ onToggleSidebar }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();



  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  // Fetch user from localStorage
  let currentUser = useSelector((state) => state.auth.user);

  // Redux cart quantity
  const totalQuantity = useSelector((state) => state.cart.totalQuantity || 0);

  // Generate initials
  const getUserInitials = (user) => {
    if (!user) return "U";
    if (user.firstname && user.lastname) {
      return (user.firstname[0] + user.lastname[0]).toUpperCase();
    }
    if (user.username) {
      const parts = user.username.trim().split(" ");
      return parts.length >= 2
        ? (parts[0][0] + parts[1][0]).toUpperCase()
        : parts[0][0].toUpperCase();
    }
    return "U";
  };

  // Toggle dark mode
  const handleToggleTheme = () => { 
    dispatch(toggleTheme())
  }

  return (
    <header className="
      w-full min-h-[60px] sm:min-h-[70px] lg:min-h-[80px]
      fixed top-0 left-0 right-0
      flex items-center justify-between
      px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12
      bg-gradient-to-r from-[#F6F1EB] to-[#E3D5C6]
      dark:from-[#1C1C1E] dark:to-[#2A1F1A]
      text-gray-900 dark:text-gray-100
      shadow-lg z-50
    ">
      {/* Left */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="p-1 sm:p-2 hover:text-amber-300 dark:hover:text-amber-400 transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu size={24} />
        </button>

        <div className="flex items-center gap-2 sm:gap-3 truncate min-w-[120px] sm:min-w-[140px]">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-400 dark:bg-amber-800 flex items-center justify-center">
            <span className="text-white font-bold text-sm sm:text-base">
              {getUserInitials(currentUser)}
            </span>
          </div>

          <h2 className="text-sm sm:text-base lg:text-lg font-medium truncate">
            Welcome, {currentUser ? currentUser.username : "User"}
          </h2>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Link
          to="/app/cart"
          className="p-1 sm:p-2 relative hover:text-amber-300 dark:hover:text-amber-400 transition-colors"
          aria-label="View cart"
        >
          <ShoppingCart size={20} />
          {totalQuantity > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
              {totalQuantity}
            </span>
          )}
        </Link>

        <button
  onClick={handleToggleTheme}
  className="relative p-2 rounded-full
             hover:bg-black/10 dark:hover:bg-white/10
             transition-all duration-300 cursor-pointer"
  aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
>
  <span
    className={`absolute inset-0 flex items-center justify-center
      transition-all duration-300
      ${isDarkMode ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"}
    `}
  >
    <Sun size={20} />
  </span>

  <span
    className={`flex items-center justify-center
      transition-all duration-300
      ${isDarkMode ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
    `}
  >
    <Moon size={20} />
  </span>
</button>

      </div>
    </header>
  );
};

export default MainHeader;

