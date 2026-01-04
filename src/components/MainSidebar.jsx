import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Home, Coffee, Clock, ShoppingCart,
  Heart, User, LogOut, X, Receipt
} from 'lucide-react';
import { useSelector } from 'react-redux';

const MainSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity || 0);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    onClose();
    navigate('/signup');
  };

  return (
    <>
      {/* Mobile overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/50 z-30 transition-opacity duration-500
          md:hidden
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* Sidebar */}
      <aside
  className={`
    fixed top-0 left-0 z-40 h-full w-64
    bg-gradient-to-t from-[#F6F1EB] to-[#E3D5C6]
    dark:from-[#1C1C1E] dark:to-[#2A1F1A]
    text-gray-900 dark:text-gray-100
    shadow-lg
    transform transition-transform duration-500 ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
  `}
>

        {/* Close button (mobile only) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:hidden hover:text-amber-400 transition-colors"
          aria-label="Close sidebar"
        >
          <X size={24} />
        </button>

        <div className="pt-20 px-4 flex flex-col h-full">
          <nav className="space-y-1 flex-1">
            <SidebarLink to="/app" icon={<Home size={20} />} label="Dashboard" onClick={onClose} />
            <SidebarLink to="/app/userMenu" icon={<Coffee size={20} />} label="Browse Menu" onClick={onClose} />
            <SidebarLink to="/app/ordersHistory" icon={<Clock size={20} />} label="Order History" onClick={onClose} />
            <SidebarLink
              to="/app/cart"
              icon={<ShoppingCart size={20} />}
              label="Cart"
              onClick={onClose}
              totalQuantity={totalQuantity}
            />
            <SidebarLink to="/app/checkout" icon={<Receipt size={20} />} label="Checkout" onClick={onClose} />
            <SidebarLink to="/app/favorites" icon={<Heart size={20} />} label="Favorites" onClick={onClose} />
            <SidebarLink to="/app/profile" icon={<User size={20} />} label="Profile" onClick={onClose} />
          </nav>

          {/* Logout */}
          <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
            <button
              onClick={handleLogout}
              className="
                flex items-center gap-3 w-full p-4 rounded-lg
                text-red-600 dark:text-red-400
                hover:bg-red-100 dark:hover:bg-red-900/40
                transition-colors
              "
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

const SidebarLink = ({ to, icon, label, onClick, totalQuantity = 0 }) => (
  <Link
    to={to}
    onClick={onClick}
    className="
      flex items-center gap-3 p-4 rounded-lg relative
      text-gray-800 dark:text-gray-200
      hover:bg-amber-100 hover:text-amber-600
      dark:hover:bg-black/30 dark:hover:text-amber-400
      transition-colors
    "
  >
    {icon}
    <span className="truncate">{label}</span>

    {label === 'Cart' && totalQuantity > 0 && (
      <span className="absolute top-2 right-2 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
        {totalQuantity}
      </span>
    )}
  </Link>
);

export default MainSidebar;


