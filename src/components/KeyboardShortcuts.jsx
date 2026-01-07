import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../features/ui/uiSlice';
import {toggleTheme } from '../features/theme/themeSlice';


const KeyboardShortcuts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
        dispatch(toggleSidebar());
      }

      if(e.ctrlKey && e.key.toLowerCase() === 'd'){ 
        e.preventDefault();
        dispatch(toggleTheme());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  return (
    <> 
    null;
    </>
  )
}

export default KeyboardShortcuts;