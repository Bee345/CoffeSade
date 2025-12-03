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
import Gallery from './pages/Gallery.jsx';
import Location from './pages/Location.jsx';
import Contact from './pages/Contact.jsx';
import SignUp from './pages/SignUp.jsx';


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
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/location' element={<Location />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
      </Route>
    </Routes>
  )
}


export default App;


