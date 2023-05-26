import React from 'react'
import Image from 'next/image'

// assets {

import foodImage from "@/assets/foods.jpg"
import placeholderImage from "@/assets/image-placeholder.png"
// import foodImage from '../../../assets/foods.jpg';

// console.log(foodImage);

// } assets

const FoodItemCard = ({image, name, description, price}) => {
  return(
    <>
    <div className="wrapper">
      <div className="card bg-cyan-50 bg-opacity-5 backdrop-blur-md rounded-lg px-2 py-4 shadow-md">
        <div className="row flex gap-4">
          <div className="col">
            <Image src={placeholderImage} width={0} height={0} className='max-w-[120px] h-[120px] rounded-full'/>
          </div>
          <div className="col text-white flex flex-col justify-between gap-4">
            <div className="row flex flex-col gap-2">
              <h2 className='text-2xl font-semibold'>Food Name</h2>
              <p className='text-base'>Lorem ipsum  Molestias, deleniti libero nemo nulla sit odio aut earum aspernatur iste expedita!</p>
            </div>
            <div className="row text-right">
              <span className="price px-2 py-1 text-lg bg-primary rounded-md ml-auto">$20.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

const MainSection = () => {
  return (
    <div 
      className="wrappper py-8 bg-cover bg-center min-h-screen" 
      style={{ background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${foodImage.src})` }}
      >
        <div className="container p-2">
            <FoodItemCard/>
          <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
            <FoodItemCard/>
            <FoodItemCard/>
            <FoodItemCard/>
          </div>
        </div>
    </div>

  )
}

export default MainSection