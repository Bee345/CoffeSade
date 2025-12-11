import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import MainHeader from './MainHeader.jsx';
import MainFooter from './MainFooter.jsx';
import MainSidebar from './MainSidebar.jsx';

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state
  const navigate = useNavigate();
  const currentUser = localStorage.getItem('currentUser');

  useEffect(() => {
    if (!currentUser) {
      navigate('/signup'); // Redirect unauth to signup
    }
  }, [currentUser, navigate]);

  if (!currentUser) return <div className="flex items-center justify-center min-h-screen">Loading...</div>; // Or spinner

  return (
    <> 
      {/* Header - Fixed top, full width, highest z-index */}
      <MainHeader isOpen={isOpen} setIsOpen={setIsOpen} className="z-50" />

      {/* Sidebar - Fixed left, slides in/out with z-index */}
      <MainSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} className="z-40" />

      {/* Main Content - No shift on mobile; overlay handles blocking */}
      <main className="transition-all duration-500 ease-in-out min-h-screen pt-16 lg:ml-80">
        <Outlet />
      </main>

      {/* Footer - Full width, bottom */}
      <MainFooter />
    </>
  )
}

export default MainLayout;