// "use client"

import React from 'react'
import Image from 'next/image'

// assets {

import foodImage from "@/assets/foods.jpg"
import placeholderImage from "@/assets/image-placeholder.png"
// import foodImage from '../../../assets/foods.jpg';

// console.log(foodImage);

// } assets

import { BASE_URL } from '@/config/backend';
import { fetchData } from '@/utils/fetchData';


const FoodItemCard = ({image, name, description, price}) => {
  return(
    <>
    <div className="wrapper">
      <div className="card bg-cyan-50 bg-opacity-5 backdrop-blur-md rounded-lg px-2 py-4 shadow-md">
        <div className="row flex justify-between gap-4">
          <div className="col">
            { !image && <Image src={placeholderImage} width={0} height={0} alt='food_image' className='max-w-[120px] h-[120px] rounded-full'/> }
            { image && <Image src={`${BASE_URL}${image}`} width={0} height={0} alt='food_image' className='max-w-[120px] h-[120px] rounded-full'/>}
          </div>
          <div className="col text-white flex flex-col justify-between gap-4">
            <div className="row flex flex-col gap-2">
              <h2 className='text-2xl font-semibold'>{name}</h2>
              <p className='text-base'>{description}</p>
            </div>
            <div className="row text-right">
              <span className="price px-2 py-1 text-lg bg-primary rounded-md ml-auto">$ {price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

// Set default prop values
FoodItemCard.defaultProps = {
  image: null,
  name: "Food Name",
  description: "Food Description",
  price: '0.00'
};

const MainSection = async () => {

  const url = `${BASE_URL}/foods` 
  const options = {
    // fetch options
    method: "GET"
  }

  let foodsData = null;
  try {
    // const foodsData = await fetchData(url, options); // foodsData can't be accessible in jSX if defined inside try { 0 block}
    foodsData = await fetchData(url, options);
    console.log(foodsData);
  } catch (error) {
    console.log(error);
  }

  return (
    <div 
      className="wrappper py-8 bg-cover bg-center min-h-screen" 
      style={{ background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${foodImage.src})` }}
      >
        <div className="container p-2">
            <FoodItemCard/>
          <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
            {foodsData?.map((food) => <FoodItemCard name={food.name} description={food.text} price={(food.price).toFixed(2)} />)}
            <FoodItemCard/>
            <FoodItemCard/>
            <FoodItemCard/>
          </div>
        </div>
    </div>

  )
}

export default MainSection