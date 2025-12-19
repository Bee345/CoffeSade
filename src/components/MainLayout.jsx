import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import MainHeader from './MainHeader';
import MainSidebar from './MainSidebar';
import MainFooter from './MainFooter';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    window.innerWidth >= 768 // md+
  );

  const navigate = useNavigate();
  const currentUser = localStorage.getItem('currentUser');

  useEffect(() => {
    if (!currentUser) navigate('/signup');
  }, [currentUser, navigate]);

  if (!currentUser) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <>
     <div className="overflow-x-hidden">
  <MainHeader onToggleSidebar={() => setIsSidebarOpen(p => !p)} />
  <MainSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

  <main
    className={`
      pt-20 min-h-screen
      transition-transform duration-300 ease-in-out
      ${isSidebarOpen ? 'translate-x-64' : 'translate-x-0'}
    `}
  >
    <Outlet />
    {/* <MainFooter /> */}
  </main>
</div>

    </>
  );
};

export default MainLayout;
