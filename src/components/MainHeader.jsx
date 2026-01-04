import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingCart, Sun, Moon } from "lucide-react";
import { useSelector } from "react-redux";

const MainHeader = ({ onToggleSidebar }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Sync dark mode on mount
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  // Fetch user from localStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
    setCurrentUser(user);
  }, []);

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
  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
  };

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
          onClick={onToggleSidebar}
          className="p-1 sm:p-2 hover:text-amber-300 dark:hover:text-amber-400 transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu size={24} />
        </button>

        <div className="flex items-center gap-2 sm:gap-3 truncate min-w-[120px] sm:min-w-[140px]">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-400 flex items-center justify-center">
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
          onClick={toggleTheme}
          className="p-1 sm:p-2 hover:text-amber-300 dark:hover:text-amber-400 transition-colors"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default MainHeader;

