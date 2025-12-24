import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Home, Coffee, Clock, ShoppingCart,
  Heart, User, LogOut, X
} from 'lucide-react';

const MainSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

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
          fixed inset-0 bg-black/50 z-30
          transition-opacity duration-300
          md:hidden
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40
          h-full w-64
          bg-white dark:bg-gray-900
          text-gray-800 dark:text-gray-200
          shadow-lg
          transition-transform duration-300 ease-in-out

          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Close button (mobile only) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:hidden"
          aria-label="Close sidebar"
        >
          <X size={24} />
        </button>

        <div className="pt-20 px-4 flex flex-col h-full">
          <nav className="space-y-1 flex-1">
            <SidebarLink to="/app" icon={<Home size={20} />} label="Dashboard" onClick={onClose} />
            <SidebarLink to="/app/userMenu" icon={<Coffee size={20} />} label="Browse Menu" onClick={onClose} />
            <SidebarLink to="orders" icon={<Clock size={20} />} label="Order History" onClick={onClose} />
            <SidebarLink to="cart" icon={<ShoppingCart size={20} />} label="Cart" onClick={onClose} />
            <SidebarLink to="favorites" icon={<Heart size={20} />} label="Favorites" onClick={onClose} />
            <SidebarLink to="profile" icon={<User size={20} />} label="Profile" onClick={onClose} />
          </nav>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full p-4 rounded-lg
                hover:bg-red-100 dark:hover:bg-red-900
                text-red-600 dark:text-red-400"
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

const SidebarLink = ({ to, icon, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center gap-3 p-4 rounded-lg
      hover:bg-amber-100 dark:hover:bg-gray-700"
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default MainSidebar;
