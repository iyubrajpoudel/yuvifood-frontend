"use client"
import React, { useState } from 'react'
import Image from 'next/image';

// contexts
import { useMyContext } from '@/contexts/context'

// assets {
    
import { images } from '@/constants/assets';

// } assets

// components {

import Button from '@/components/Button';

// } components

const filterButtons = [
    {
        name: "All",
        filter: "all"
    },
    {
        name: "Breakfast",
        filter: "breakfast"
    },
    {
        name: "Lunch",
        filter: "lunch"
    },
    {
        name: "Dinner",
        filter: "dinner"
    },
]


const TopSection = () => {

    const { query, setQuery, filter, setFilter } = useMyContext();
    console.log();

    // const [searchQuery, setSearchQuery] = useState(null);
    // const [filter, setFilter] = useState("all");

  return (
    <div className="wrapper bg-dark-soft py-8">
        <div className="container p-2">
            <div className="row flex flex-col gap-8">
                <div className="row flex justify-center md:justify-between items-center gap-4 flex-wrap">
                    <div className="col">
                        <div className="logo-wrapper">
                            <Image src={images.logo} width="200" height="0"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-wrapper">
                            <input type="text" name="search" id="searchInput" value={query} onChange={(e)=>setQuery(e.target.value)}
                            className='w-[15rem] bg-transparent border border-red-500 outline-none rounded-sm px-4 py-2 placeholder-gray-300 text-white' placeholder='Search for food' />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="filter-buttons-wrappper flex justify-center gap-4 flex-wrap">
                        {filterButtons.map((filterButton) => <Button className={`${filter === filterButton.filter ? `bg-red-700` : `bg-red-500` } hover:bg-red-700 text-white`} handleClick={()=>setFilter(filterButton.filter)}>{filterButton.name}</Button>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopSection