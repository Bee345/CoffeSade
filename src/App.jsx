import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
// import LHeader from './components/LHeader';
import WelcomeLayout from './components/WelcomeLayout.jsx';
import MainLayout from './components/MainLayout.jsx';
import Dashboard from './pages/users/Dashboard.jsx';
import UserMenu from './pages/users/UserMenu.jsx';
import Orders from './pages/users/Orders.jsx';
import Cart from './pages/users/Carts.jsx';
import UserCheckout from './pages/users/Checkout.jsx';
import Favorites from './pages/users/Favorites.jsx';
import Profile from './pages/users/Profile.jsx';
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


      {/* Protected User Routes under MainLayout */}
      <Route path="/app" element={<MainLayout />}>
        <Route index element={<Dashboard />} /> {/* /app → Dashboard */}
        <Route path="userMenu" element={<UserMenu />} /> {/* /app/userMenu → Browse Menu */}
        <Route path="orders" element={<Orders />} /> {/* /app/orders */}
        <Route path="cart" element={<Cart />} /> {/* /app/cart */}
        <Route path="checkout" element={<UserCheckout />} /> {/* /app/checkout */}
        <Route path="favorites" element={<Favorites />} /> {/* /app/favorites */}
        <Route path="profile" element={<Profile />} /> {/* /app/profile */}
        {/* Add more as needed, e.g., <Route path="settings" element={<Settings />} /> */}
      </Route>
    </Routes>
  )
}


export default App;


