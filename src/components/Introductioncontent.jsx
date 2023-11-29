import React from 'react'
import rectangle from '../assests/logo/rectangle.png';
import vector from '../assests/logo/vector.png';
import rectangle2  from '../assests/images/rectangle29.png'
import desktop  from '../assests/images/desktop.png'
import cycle  from '../assests/images/cycle.png'
import vector1  from '../assests/logo/vector1.png'
import image1  from '../assests/logo/image1.png'
import iphone  from '../assests/images/iphone.png'
import frame from '../assests/images/frame.png'
import card from '../assests/images/card.png'
export default function Introductioncontent() {
    return (
        <div className="relative ">
            <img src={rectangle} alt="rectangle" className="block md:lg:h-auto h-[700px] md:lg:p-4 mx-auto" />
            <img src={vector} alt="vector" className="absolute  md:lg:p-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <img src={vector1} alt="vector" className="absolute h-7 md:lg:h-12 md:lg:p-0 top-[-260px] md:lg:top-[-510px] md:2xl:top-[-630px] left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <img src={image1} alt="image1" className="absolute h-4  md:lg:h-6 md:lg:p-0   top-[-260px] md:lg:top-[-510px]  md:2xl:top-[-630px] left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <h1 className="md:lg:text-6xl text-1xl mb-[-30px] font-xs font-bold mt-[-240px]  md:lg:mt-[-460px] md:lg:mb-[-20px] md:2xl:mt-[-580px] md:lg:font-semibold text-blue-950 mb-4">Introducing Heynay</h1>
                <p className="text-blue-950 p-10 mb-[100px] font-semibold text-xs"> A platform specifically designed to cater to the unique needs of HOA associations<br/>offering a customized solution that addresses their communication challenges and<br/> provides features essential for effective community management</p>
                   <img src={rectangle2} alt="vector" className="absolute top-[100px] md:lg:p-0 md:lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                   <img src={cycle} alt="vector" className="absolute  h-20 md:lg:p-20 md:lg:h-[290px] mt-[90px] top-[-28px] md:lg:top-[-70px]  left-40 md:lg:left-2/3 md:lg:mt-[-30px] transform -translate-x-2/2 -translate-y-1/2" />
                   <img src={desktop} alt="vector" className="absolute  md:lg:p-0 top-[150px] md:lg:top-[115px] left-1/2 transform -translate-x-2/2 -translate-y-1/2" />
                   <img src={iphone} alt="vector" className="absolute h-20 md:lg:h-60 right-[50px] top-[170px] md:lg:top-[140px] md:lg:p-0 md:lg:top-[170px] md:lg:right-[110px] transform -translate-x-2/2 -translate-y-1/2" />
                   <img src={frame} alt="vector" className="absolute h-20  md:lg:h-40 right-[120px] top-[80px] md:lg:p-0 md:lg:top-[-50px] md:lg:right-[340px] transform -translate-x-2/2 -translate-y-1/2" />
                   <img src={card} alt="vector" className="absolute h-10  md:lg:h-40 right-[190px] top-[50px] md:lg:p-0 md:lg:top-[-140px] md:lg:right-[390px] transform -translate-x-2/2 -translate-y-1/2" />
            </div>
        </div>
    )
}
