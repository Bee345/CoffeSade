// BrowserRouter as
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
// import LHeader from './components/LHeader';
import WelcomeLayout from './components/WelcomeLayout.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import About from './pages/About.jsx';
import Reviews from './pages/Reviews.jsx';


function App() {
  
  return (
       <Routes>
      {/* Layout route */}
      <Route path='/' element={<WelcomeLayout />}>
        {/* Child pages */}
        <Route index element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/reviews' element={<Reviews />} />
      </Route>
    </Routes>
  )
}


export default App;


