import React from 'react';
import rectangle25 from '../assests/images/rectangle25.png';
import { FaUsers, FaCopy, FaCheckSquare} from "react-icons/fa";
export default function MissionContent() {
  return (
    <div className="relative lg:p-10">
      <div className="relative">
        <img
          src={rectangle25}
          className="md:lg:h-[600px] top-[1400px] md:lg:top-[2130px] md:2xl:top-[2300px] w-full h-[300px]"
          alt="Mission Background"
        />
        <div className="absolute md:lg:top-1/4 left-1/2 top-[100px] transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Our Mission
          </h2>
          <p className="text-white px-4 md:px-10 md:mt-4  text-xs md:text-sm">
          To provide a secure, easy-to-use platform that helps HOAs improve <br/> communication, streamline administrative tasks, and increase <br/> community engagement and safety
          </p>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <div className="flex space-x-14 md:space-x-[280px] justify-center mt-40  md:mt-40">
        <div className="text-white text-xs">
          <FaUsers className="text-white h-12 w-12 md:h-16 md:w-16" />
          <p className="mt-1">Community</p>
        </div>
        <div className="text-white  text-xs">
          <FaCopy  className="text-white h-12 w-12 md:h-16 md:w-16" />
          <p className="mt-1 ">Organized</p>
        </div>
        <div className="text-white text-xs">
          <FaCheckSquare     className="text-white h-12 w-12 md:h-16 md:w-16" />
          <p className="mt-1">Secure</p>
        </div>
      </div>
    </div>
    </div>
  );
}
