import React from 'react'
import FirstALayer from "@/components/allFirstLayer/FirstALayer.jsx";
import FirstBLayer from "@/components/allFirstLayer/FirstBLayer.jsx";
import FirstCLayer from "@/components/allFirstLayer/FirstCLayer.jsx";
import FirstDLayer from "@/components/allFirstLayer/FirstDLayer.jsx"


const FirstMainLayer = () => {
  return (
    <> 
    <section className="flex flex-col justify-center items-center gap-20 bg-[ffffff] w-[100%] h-[fit] py-10 px-30">
      <FirstALayer />
      <FirstBLayer />
      <FirstCLayer />
      <FirstDLayer />
    </section>
    </>
  )
}

export default FirstMainLayer;