import React from 'react'
import vector1 from '../assests/logo/vector1.png'
import image2 from '../assests/logo/image2.png'
import rectangle26 from '../assests/images/rectangle26.png'
import circle1 from '../assests/images/circle1.png'
import card2 from '../assests/images/card2.png'
import card3 from '../assests/images/card3.png'
import ellipse1 from '../assests/images/ellipse1.png'
import image3 from '../assests/images/image3.png'
import rectangle30 from '../assests/images/rectangle30.png'
import rectangle28 from '../assests/images/rectangle28.png'
import card4 from '../assests/images/card4.png'
import circle2 from '../assests/images/circle2.png'
import image4 from '../assests/images/image4.png'
import rectangle34 from '../assests/images/rectangle34.png'
import ellipse2 from '../assests/images/ellipse2.png'
import image5 from '../assests/images/image5.png'
import rectangle33 from '../assests/images/rectangle33.png'
export default function Features() {
    return (
        <>
            <div className=" top-1/2  -translate-y-1/2 text-center">
                <img src={vector1} alt="vector" className="h-10 ml-[200px] mt-[160px] lg:h-12 lg:mt-[200px] lg:ml-[663px] 2xl:ml-[832px] " />
                <img src={image2} alt="image2" className=" h-7 ml-[210px] mt-[-26px] lg:h-7  lg:ml-[682px] 2xl:ml-[849px]  lg:mt-[-26px] " />
                <h1 className=" md:lg:text-6xl md:2xl:text-8xl text-5xl mb-[-30px] font-normal  mt-[20px]  lg:mb-[-20px] lg:mt-[40px] lg:font-normal  text-blue-950 mb-4">Features</h1>
            </div>
            <div className="lg:flex lg:items-center lg:justify-center">
                {/* For larger screens, heading and paragraph on the left */}
                <div className="lg:order-2 lg:ml-8">
                    <h2 className="lg:text-4xl text-4xl hidden lg:block font-semibold text-blue-950">Connection Platform</h2>
                    {/* For larger screens, the paragraph is displayed here */}
                    <p className="text-xs hidden lg:block text-blue-950 mt-4">
                        Heynay allows residents and HOA board members to communicate<br /> effectively through localized discussions, important announcements <br />and updates, and group messages within the community.
                    </p>
                </div>

                {/* For larger screens, image on the right */}
                <img
                    src={rectangle26}
                    className="h-[260px] lg:h-[500px] ml-14 lg:ml-[-270px] mt-10 lg:order-1 lg:mr-8"
                    alt="Connection Platform"
                />
                <img
                    src={circle1}
                    className="absolute h-[90px] mt-[-110px] lg:h-[200px] lg:ml-[-980px] lg:mt-60 lg:order-1 lg:mr-80"
                    alt="Connection Platform"
                />
                <img
                    src={card2}
                    className="absolute h-[80px] mt-[-150px]  ml-14 lg:h-[145px] lg:ml-[-690px] lg:mt-[85px]  lg:order-1 lg:mr-80"
                    alt="Connection Platform"
                />
                <img
                    src={card3}
                    className="absolute h-[90px] mt-[-70px]  ml-[270px] lg:h-[145px] lg:ml-[200px] lg:mt-[455px]  lg:order-1 lg:mr-80"
                    alt="Connection Platform"
                />
                <img
                    src={ellipse1}
                    className="absolute h-[80px] mt-[-210px] ml-[300px] lg:h-[90px] lg:ml-[160px] lg:mt-[-175px]  lg:order-1 lg:mr-80"
                    alt="Connection Platform"
                />
                <img
                    src={image3}
                    className="absolute h-[50px] mt-[-195px]  ml-[315px] lg:h-[60px] lg:ml-[160px] lg:mt-[-175px]  lg:order-1 lg:mr-80"
                    alt="Connection Platform"
                />
                {/* For mobile screens, the paragraph is displayed below the image */}
                <div className="lg:hidden">
                    <h2 className="lg:text-4xl text-4xl ml-8  mt-14 font-semibold  text-blue-950">Connection Platform</h2>
                    <p className="text-xs text-blue-950 ml-8 mt-4">
                        Heynay allows residents and HOA board members to communicate <br />effectively through localized discussions, important announcements<br />and updates, and group messages within the community.
                    </p>
                </div>
            </div>
            <div className="lg:flex lg:items-center lg:mt-16 lg:justify-center">
                <div className="lg:order-2 lg:mr-[-20px]">
                    <img
                        src={rectangle30}
                        className="h-[260px] lg:h-[350px] ml-14 lg:ml-[190px] mt-10 lg:order-1 lg:mr-8"
                        alt="Connection Platform"
                    />
                      <img
                        src={rectangle28}
                        className=" absolute h-[110px] lg:h-[160px] ml-8 lg:ml-[150px] lg:mt-[-130px] mt-[-80px] lg:order-1 lg:mr-8"
                        alt="Connection Platform"
                    />
                     <img
                        src={card4}
                        className=" absolute h-[80px] lg:h-[150px] ml-[200px] lg:ml-[310px] lg:mt-[-430px] mt-[-294px] lg:order-1 lg:mr-8"
                        alt="Connection Platform"
                    />
                     <img
                        src={circle2}
                        className=" absolute h-[50px] lg:h-[70px] ml-10 lg:ml-[160px] lg:mt-[-280px] mt-[-200px] lg:order-1 lg:mr-8"
                        alt="Connection Platform"
                    />
                        <img
                        src={image4}
                        className=" absolute h-[30px] lg:h-[44px] ml-12 lg:ml-[177px] lg:mt-[-270px] mt-[-190px] lg:order-1 lg:mr-8"
                        alt="Connection Platform"
                    />
                </div>
                <div className="lg:ml-[-20px]">
                    <h2 className="lg:text-4xl lg:ml-[-220px] text-4xl hidden lg:block font-semibold text-blue-950 mt-4">Event Management</h2>
                    {/* For larger screens, the paragraph is displayed here */}
                    <p className="text-xs lg:ml-[-220px] hidden lg:block text-blue-950 mt-4">
                        Schedule and manage community events, such as neighborhood
                        gatherings,  <br />ocial activities, board meetings, and maintenance work, ensuring everyone <br /> stays
                        informed and engaged.
                    </p>
                </div>
                {/* For mobile screens, the paragraph is displayed below the image */}
                <div className="lg:hidden">
                    <h2 className="lg:text-4xl text-4xl ml-8 mt-14 font-semibold  text-blue-950">Event Management</h2>
                    <p className="text-xs text-blue-950 ml-8 mt-4">
                        Schedule and manage community events, such as neighborhood
                        gatherings,  <br />ocial activities, board meetings, and maintenance work, ensuring everyone <br /> stays
                        informed and engaged.
                    </p>
                </div>
            </div>
            <div className="lg:flex lg:items-center lg:mt-20 lg:justify-center">
                {/* For larger screens, heading and paragraph on the left */}
                <div className="lg:order-2 lg:ml-8">
                    <h2 className="lg:text-4xl text-4xl hidden lg:block font-semibold text-blue-950">Community Polls<br/>and Surveys</h2>
                    {/* For larger screens, the paragraph is displayed here */}
                    <p className="text-xs hidden lg:block text-blue-950 mt-4">
                    Create and distribute polls and surveys to empower residents to voice<br /> their opinions, provide feedback, and participate in community  <br />decision-making processes.
                    </p>
                </div>

                {/* For larger screens, image on the right */}
                <img
                    src={rectangle34}
                    className="h-[280px] lg:h-[500px] ml-14 lg:ml-[-270px] mt-10 lg:order-1 lg:mr-8"
                    alt="Connection Platform"
                />
                 {/* <img
                    src={rectangle33}
                    className="absolute h-[90px] mt-[-110px] lg:h-[250px] lg:ml-[-610px] lg:mt-[-360px] lg:order-1 lg:mr-80"
                    alt="Connection Platform"
                />   
                <img
                    src={ellipse2}
                    className="absolute h-[80px] mt-[-110px] ml-[300px] lg:h-[90px] lg:ml-[160px] lg:mt-[210px]  lg:order-1 lg:mr-80"
                    alt="Connection Platform"
                />
                <img
                    src={image5}
                    className="absolute h-[50px] mt-[-98px]  ml-[315px] lg:h-[60px] lg:ml-[160px] lg:mt-[210px]  lg:order-1 lg:mr-80"
                    alt="Connection Platform"
                /> */}
                {/* For mobile screens, the paragraph is displayed below the image */}
                <div className="lg:hidden">
                    <h2 className="lg:text-4xl text-4xl ml-8  mt-14 font-semibold text-blue-950">Community Polls<br/>and Surveys</h2>
                    <p className="text-xs text-blue-950 ml-8 mt-4">
                    Create and distribute polls and surveys to empower residents to voice <br />their opinions, provide feedback, and participate in community  <br />decision-making processes.
                    </p>
                </div>
            </div>
        </>



    )
}
