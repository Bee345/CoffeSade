import React from 'react'

import LSHeader from './LSHeader.jsx';
import LFooter from './LFooter.jsx'
import { Outlet } from "react-router-dom"

const WelcomeLayout = () => {
  return (
    <> 
    <LSHeader />
    <section className="min-h-screen w-full "> 
        <Outlet />
        {/* {children} */}
    </section>
    <LFooter />
    </>
  )
}

export default WelcomeLayout;