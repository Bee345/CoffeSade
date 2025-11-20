import React from 'react'
import FirstALayer from "@/components/allFirstLayer/FirstALayer.jsx";;
import FirstBLayer from "@/components/allFirstLayer/FirstBLayer.jsx";;


const FirstMainLayer = () => {
  return (
    <> 
    <section className="flex flex-col justify-center items-center gap-20 bg-[ffffff] w-[100%] h-[fit] py-10 px-30">
      <FirstALayer />
      <FirstBLayer />
    </section>
    </>
  )
}

export default FirstMainLayer;