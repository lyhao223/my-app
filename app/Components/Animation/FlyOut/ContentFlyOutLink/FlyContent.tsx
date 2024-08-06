"use client";
import React from 'react'

const FlyContent = () => {
  return (
    <div className='w-44 h-full p-5'>
        <ul className='flex flex-col items-start justify-start space-y-4 text-lg subpixel-antialiased'>
            <div className='w-36 rounded-lg hover:bg-purple-500 hover:duration-300 hover:transition-all hover:ease-linear p-2'>
                <li>Hotel</li>
            </div>
             <div className='w-36 rounded-lg hover:bg-purple-500 hover:duration-300 hover:transition-all hover:ease-linear p-2'>
                <li>Car Rental</li>
            </div>
             <div className='w-36 rounded-lg hover:bg-purple-500 hover:duration-300 hover:transition-all hover:ease-linear p-2'>
                <li>Taxi</li>
            </div>
             <div className='w-36 rounded-lg hover:bg-purple-500 hover:duration-300 hover:transition-all hover:ease-linear p-2'>
                <li>Attraction</li>
            </div>
             <div className='w-36 rounded-lg hover:bg-purple-500 hover:duration-300 hover:transition-all hover:ease-linear p-2'>
                <li>Flights</li>
            </div>
        </ul>
    </div>
  )
}

export default FlyContent