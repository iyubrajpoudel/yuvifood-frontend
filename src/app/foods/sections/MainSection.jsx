import React from 'react'
import Image from 'next/image'

// assets {

import foodImage from "@/assets/foods.jpg"
// import foodImage from '../../../assets/foods.jpg';

// console.log(foodImage);

// } assets

const MainSection = () => {
  return (
    <div 
      className="wrappper bg-cover bg-center min-h-screen" 
      style={{ background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${foodImage.src})` }}
      >

    </div>

  )
}

export default MainSection