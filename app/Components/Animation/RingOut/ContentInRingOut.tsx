import React from 'react'

const ContentInRingOut = () => {
  return (
    <div className='flex flex-col items-start justify-start space-y-3 px-3 py-2'>
        <div className='flex flex-row items-center justify-between space-x-10'>
            <div className='flex flex-row items-center justify-center space-x-2'>
                <h1 className='text-xl subpixel-antialiased tracking-tight font-bold text-white'>Notifications</h1>
                <div className='px-4 rounded-md bg-red-200'>
                    <span className='text-red-600 font-medium'>4 new</span>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center py-2'>
               <span className='text-purple-700 tracking-tight font-normal text-lg'>Clear all</span>
            </div>
        </div>
        <div className='border-b-2 w-full'/>
        <div className='flex flex-col items-start justify-start space-y-3 bg-slate-200 p-2 rounded-lg'>
            <h1 className='text-stone-800 text-lg font-medium tracking-tight'>Booking flights from New York ✈️</h1>
            <p className='text-xs font-light'>Find the flexible ticket on flights around the world. Start searching today.</p>
            <p className='text-lg text-stone-500 font-medium'>05 Feb 2024</p>
        </div>
        <div className='flex flex-col items-start justify-start space-y-2 bg-slate-200 p-2 rounded-lg'>
            <h1 className='text-stone-800 text-lg font-medium tracking-tight'>Sunshine saving are here 🌞 save 30% or more on a stay</h1>
            <p className='text-lg text-stone-500 font-medium'>24 Aug 2024</p>        
        </div>
    </div>
  )
}

export default ContentInRingOut
