import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 m-4'>
                <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl'>Want tips & tricks to optimize your flow?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="m-4">
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type="text" className='p-3 px-5 flex w-full rounded-md text-black' placeholder='Enter email' />
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] m-6 p-3'>Notify me</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter