import React, { useState } from 'react';
import navlogo from '../assests/logo/navlogo.png';
export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <nav  className="flex justify-between mt-6 ml-6 md:ml-80 60 mr-6 md:mr-80 h-14 items-center rounded-full shadow-lg border border-gray-300 bg-white">
            <div className="max-w-7xl mx-auto md:ml-[-84px] md:pr-10 md:w-[900px]">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <img className='h-8 cursor-pointer ml-[20px] md:hidden' src={navlogo} alt="Logo" onClick={toggleSidebar} />
                    </div>
                    <div className="hidden md:flex space-x-4 items-center">
                        <img className='h-12 ' src={navlogo} alt="Logo" />{" "}
                        {/* Your desktop navbar links */}
                        <a href="#" className="text-blue-900 hover:bg-blue-300 hover:text-gray-900 px-3 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out">Introduction</a>
                        <a href="#" className="text-blue-900 hover:bg-blue-300 hover:text-gray-900 px-3 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out">Our Mission</a>
                        <a href="#"className="text-blue-900 hover:bg-blue-300 hover:text-gray-900 px-3 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out">Features</a>
                        <a href="#" className="text-blue-900 hover:bg-blue-300 hover:text-gray-900 px-3 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out">Comparisons</a>
                        <a href="#" className="text-blue-900 px-3 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out hover:bg-blue-300 hover:text-gray-900 focus:bg-blue-300 focus:text-gray-900 active:bg-blue-300 active:text-gray-900">Join waitlist</a>
                    </div>
                </div>
            </div>

            {/* Mobile sidebar */}
            <div className={`fixed inset-y-0 right-0 z-10 bg-white md:hidden transform transition duration-300 ease-in-out ${showSidebar ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4 w-48">
                    <div className="flex justify-end">
                        <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-900">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <a href="#" className="block text-blue-900 hover:bg-blue-300  hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium mb-2 ">Introduction</a>
                    <a href="#" className="block text-blue-900 hover:bg-blue-300  hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium mb-2">Our Mission</a>
                    <a href="#" className="block text-blue-900 hover:bg-blue-300  hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium mb-2">Features</a>
                    <a href="#" className="block text-blue-900 hover:bg-blue-300  hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium mb-2">Comparisons</a>
                    <a href="#" className="block text-blue-900 hover:bg-blue-300  hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium mb-2">Join waitlist</a>
                </div>
            </div>
        </nav>
    );
}
