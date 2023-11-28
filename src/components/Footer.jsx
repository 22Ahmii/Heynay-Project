import React from 'react'
import rectangle32  from '../assests/images/rectangle32.png'
import group  from '../assests/images/group.png'
export default function Footer() {
  return (
    
    <div className='relative'>
  <img src={rectangle32} className='mt-20 w-full h-[300px] lg:h-[700px]' alt="Rectangle" />
  <img src ={group} className=' absolute  lg:h-20 h-10 mt-[-280px] ml-[200px] lg:mt-[-600px]  lg:ml-[650px] 2xl:ml-[840px] '/>
  <h1 className='absolute lg:text-7xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-2xl'>
    Ready to Heynay<br/> Your HOA?
    <h5 className='lg:text-lg lg:mt-6 mt-3 text-lg '>Join the waitlist!</h5>
  </h1>
   <div className='  lg:block mt-[-67px] ml-16 lg:ml-[487px] 2xl:ml-[666px] absolute lg:mt-[-210px]'>
    <div className='border-2 lg:pr-2 pr-4 bg-white border-white rounded-full lg:px-[95px] mr- text-black'>
      <input
        type='text'
        placeholder='jennyschumaker@email.com'
        className='border lg:ml-[-90px] border-white rounded-full lg:px-16 lg:py-1 text-black'
      />
      <button className=' bg-blue-300 text-black rounded-full px-4 p-2 '>
        Submit
      </button></div>
    </div> 
</div>
  )
}
