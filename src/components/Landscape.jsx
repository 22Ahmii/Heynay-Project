import React from 'react'
import home from '../assests/logo/home.png';
import vector1  from '../assests/logo/vector1.png'
import image1  from '../assests/logo/image1.png'
export default function Landscape() {
    return (
        <div className="flex flex-col lg:flex-row mt-10 items-center justify-center lg:justify-start">
            <div className="text-center lg:text-left-20">
           < img src={vector1} alt="vector" className=" h-7 ml-[170px] md:lg:ml-[160px] md:2xl:ml-[320px] md:lg:h-10 md:lg:p-0 top-[-100px] md:lg:top-[-630px]  " />
            <img src={image1} alt="image1" className=" h-4 mt-[-20px] ml-[175px]  md:lg:ml-[170px]  md:2xl:ml-[330px] md:lg:h-6 md:lg:p-0 md:lg:mt-[-30px] md:2xl:mt-[-30px] top-[-200px] md:lg:top-[-630px] " />
                <h2 className="md:lg:text-7xl text-4xl font-normal md:lg:ml-40 md:2xl:ml-80 text-blue-950 mb-4"><span className='md:lg:ml-[-150px]'>Current</span> <br/><span className='md:lg:ml-[-50px]'>Landscape</span> </h2>
                <p className="text-sm text-blue-950 md:lg:ml-40  md:2xl:ml-80 md:lg:font-semibold ">
                     We noticed that while there are many different social media<br/>
                     apps out there,tere isn't a dedicated localized platform for<br/>
                     HOAs to allow their residents to communicate and engage <br/>
                     with each other in a privatr and organized manner.
                </p>
            </div>
            <img src={home} alt="Home" className="h-80 mt-6 lg:ml-[400px] mb-8 lg:mr-8" />

        </div>

    )
}
