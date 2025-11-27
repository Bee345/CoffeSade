import React from 'react'
import FirstALayer from "@/components/allFirstLayerHome/FirstALayer.jsx";
import FirstBLayer from "@/components/allFirstLayerHome/FirstBLayer.jsx";
import FirstCLayer from "@/components/allFirstLayerHome/FirstCLayer.jsx";
import FirstDLayer from "@/components/allFirstLayerHome/FirstDLayer.jsx";
import FirstELayer from '@/components/allFirstLayerHome/FirstELayer.jsx';


const FirstMainLayer = () => {
  return (
    <> 
    <section className="flex flex-col justify-center items-center gap-20 bg-[ffffff] w-[100%] h-[fit] py-10 px-30">
      <FirstALayer />
      <FirstBLayer />
      <FirstCLayer />
      <FirstDLayer />
      <FirstELayer />
    </section>
    </>
  )
}

export default FirstMainLayer;