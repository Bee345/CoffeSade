// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import './index.css'
import LHeader from './components/LHeader';
import LSHeader from './components/LSHeader.jsx';
import Banner from './components/Banner.jsx'
import FirstMainLayer from './components/FirstMainLayer.jsx';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <LSHeader/>
      <Banner />
      <FirstMainLayer/>
    </>
  )
}


export default App;


