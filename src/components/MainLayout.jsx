import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import MainHeader from './MainHeader.jsx';
import { toggleSidebar, closeSidebar } from '../features/ui/uiSlice.js';
import Skeleton from './Skeleton.jsx';
import {setUILoading, startUILoading, stopUILoading } from '../features/ui/uiSlice.js';
import MainSidebar from './MainSidebar.jsx';
import KeyboardShortcuts from './KeyboardShortcuts.jsx';

const MainLayout = ({children}) => {
  const isOpen = useSelector((state) => state.ui.sidebarOpen);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.ui.isLoading);
  const loading = useSelector((state) => state.ui.loading)
  const currentUser = localStorage.getItem('currentUser');


  // Dark Mode Toggle Functionality
  useEffect(() => {
  const root = document.documentElement; // <html> element
  if (isDarkMode) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}, [isDarkMode]); // run whenever isDarkMode changes

useEffect(() => {
  dispatch(setUILoading());
}, [dispatch, navigate]);

  const handleClose = () => dispatch(closeSidebar());
 

const hanadleNavigate = (path) => { 
  dispatch(startUILoading());
  navigate(path);

  setTimeout(() => { 
    dispatch(stopUILoading());
  }, 400);
}

  useEffect(() => {
    if (!currentUser) {
      navigate('/signup'); // Redirect unauthenticated users
    }
  }, [currentUser, navigate]);

  if (!currentUser) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;

  return (
    <>
      {/* Header */}
      <MainHeader onToggleSidebar={() => dispatch(toggleSidebar())} className="z-50" />

      {/* Sidebar */}
      <MainSidebar 
        isOpen={isOpen} 
        handleClose={() => dispatch(closeSidebar())} 
      />

<KeyboardShortcuts />
      {/* Main content */}
      <main
        className={`
          transition-main
          min-h-screen pt-20 lg:pt-20 lg:pb-52 bg-gradient-to-b from-[#F6F1EB] to-[#EDE5DC]
dark:from-[#1C1C1E] dark:to-[#2A1F1A]
          ${isOpen ? 'lg:ml-64' : 'lg:ml-0'}
        `}
      >
        
        {loading && ( 
          <div className="p-6"> 
          <Skeleton className={`h-6 w-1/3 mb-4`} />
          <Skeleton className={`h-24 w-full mb-4`} />
          <Skeleton className={`h-24 w-full`} />
          </div>
        )}
    {isLoading ? (
    <div className="p-6 space-y-4">
      <Skeleton className="h-8 w-1/3" />
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-32 w-full" />
    </div>
      ) : (
       <Outlet />
      )}
      </main>
      </>
  )
};

export default MainLayout;
