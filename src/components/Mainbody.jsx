import React from 'react';
import Navbar from "../components/Navbar";
import main from '../assests/logo/main.png'; // Replace this with your image path

export default function Mainbody() {
    return (

        <div style={{ position: 'relative' }}>
            <img src={main} alt="Main" className='md:lg:w-full'/>
            <div style={{ position: 'absolute', top: 0 }} className='md:lg:left-[-20px]  md:2xl:left-[100px]' >
                <Navbar /></div>
            <div className=' absolute text-center top-20 md:lg:top-60 md:lg:left-[300px] md:2xl:left-[420px]'>
                <h1 className='md:text-8xl sm:text-8xl text-6xl text-white'>HOAs Made Simple</h1>
                <button className="bg-blue-400 md:lg:mt-4 mt-3  font-semibold rounded-full px-6 py-2">
                    Learn More
                </button>

            </div>
        </div>
    );
}
