// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import './index.css'
import LHeader from './components/LHeader';
import LSHeader from './components/LSHeader.jsx';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

     {/* <LHeader/> */}
      <LSHeader/>
      <section>
        <h1 className='bg-amber-600 text-center font-bold'>Welcome, I hope this one won't be a problem to face</h1> 

        <div className="displayBox bg-gradient-to-t from-[#fd4] via-[#3d4] to-[#d5b] w-[80%] h-[200px] mx-auto my-8 flex justify-center gap-20 text-center items-center flex-wrap rounded-2xl"><p>We re good on out own but w e need to make it cool off </p> <p>Sensing the change in the energy will make u go better to the adaptability</p></div>
      </section>
    </>
  )
}


export default App;


