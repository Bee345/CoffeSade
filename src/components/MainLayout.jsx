import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import MainHeader from './MainHeader.jsx';
import MainSidebar from './MainSidebar.jsx';

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state
  const navigate = useNavigate();
  const currentUser = localStorage.getItem('currentUser');

  // Set sidebar open by default on PC screens (lg+)
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1024); // lg breakpoint
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!currentUser) {
      navigate('/signup'); // Redirect unauthenticated users
    }
  }, [currentUser, navigate]);

  if (!currentUser) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;

  return (
    <>
      {/* Header */}
      <MainHeader onToggleSidebar={() => setIsOpen(!isOpen)} className="z-50" />

      {/* Sidebar */}
      <MainSidebar 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />

      {/* Main content */}
      <main
        className={`
          transition-all duration-500 ease-in-out
          min-h-screen pt-20 lg:pt-20 lg:pb-52
          ${isOpen ? 'lg:ml-64' : 'lg:ml-0'}
        `}
      >
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
