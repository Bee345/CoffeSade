import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import MainHeader from './MainHeader.jsx';
import MainFooter from './MainFooter.jsx';
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
      navigate('/signup'); // Redirect unauth to signup
    }
  }, [currentUser, navigate]);

  if (!currentUser) return <div className="flex items-center justify-center min-h-screen">Loading...</div>; // Or spinner

  return (
    <> 
      {/* Header - Fixed top, full width, highest z-index */}
      <MainHeader onToggleSidebar={() => setIsOpen(!isOpen)} className="z-50" />

      {/* Sidebar - Fixed left, slides in/out with z-index, height between header/footer */}
      <MainSidebar 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        className="z-30 top-[80px] lg:top-[80px] h-[calc(100vh-80px-200px)] lg:h-[calc(100vh-80px)]" 
      />

      {/* Main Content - Adjust for sidebar and footer */}
      <main className={`transition-all duration-500 ease-in-out min-h-screen pt-20 lg:pt-20 ${isOpen ? 'lg:ml-64' : 'lg:ml-80'} lg:pb-52`}>
        <Outlet />
      </main>

      {/* Footer - Full width, bottom */}
      <MainFooter  className="z-40"/>
    </>
  )
}

export default MainLayout;