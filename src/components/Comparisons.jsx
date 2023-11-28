import React from 'react'
import vector1 from '../assests/logo/vector1.png'
import eyes1 from '../assests/images/eyes1.png'
import image6 from '../assests/images/image6.png'
import { FaCheck } from "react-icons/fa";
export default function Comparisons() {
    return (
        <>
        <div className=" top-1/2  -translate-y-1/2 text-center">
                <img src={vector1} alt="vector" className="h-10 ml-[200px] mt-[160px] lg:h-12 lg:mt-[200px] lg:ml-[663px] 2xl:ml-[832px] " />
                <img src={eyes1} alt="image2" className=" h-7 ml-[210px] mt-[-26px] lg:h-7  lg:ml-[682px] 2xl:ml-[849px]  lg:mt-[-26px] " />
                <h1 className=" md:lg:text-6xl md:2xl:text-8xl text-5xl mb-[-160px] font-normal  mt-[20px]  lg:mb-[-90px] lg:mt-[40px] lg:font-normal  text-blue-950 ">Comparisons</h1>
            </div>
        <div className='lg:w-[1000px] p-[40px] lg:p-0 lg:ml-[200px]  2xl:ml-[380px] '>
            <div className="relative mt-40  p-10 overflow-x-auto shadow-md sm:rounded-lg bg-blue-50 2xl:p-16">
                <table className="lg:w-[900px] 2xl:ml-[-40px]  text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead class="text-xs text-blue-950 uppercase   dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                               
                            </th>
                            
                            <th scope="col" class="px-6 rounded-lg  py-3 bg-white">
                            <img src={image6} className='h-12 lg:ml-4'/>
                                <span className='lg:ml-3'>Heynay</span>
                            </th>
                            <th scope="col" class="px-6 py-3">
                            Social Media
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Chat Apps
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email/SMS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className="border-b border-b-white">
                            <th scope="row" class="px-6 py-4 font-medium text-blue-950 whitespace-nowrap dark:text-white">
                                Cost
                            </th>
                            <td class="px-8 py-4 text-blue-900 bg-white">
                               <span className='lg:ml-3'> Free</span>
                            </td>
                            <td class="px-12 py-4 text-blue-900">
                               Free
                            </td>
                            <td class="px-10 py-4 text-blue-900">
                            Free
                            </td>
                            <td class="px-10 py-4 text-blue-900">
                            Free
                            </td>
                        </tr>
                        <tr className="border-b border-b-white">
                            <th scope="row" class="px-6 py-4 font-medium text-blue-950 whitespace-nowrap dark:text-white">
                                Direct Messaging
                            </th>
                            <td className="px-6 text-blue-900 py-2 bg-white">
                            <FaCheck className='lg:ml-6 ml-3 ' style={{ fontSize: '1.5em'}} />
                              </td>
                            <td class="px-12  text-blue-900 py-4">
                            <FaCheck />
                            </td>
                            <td class="px-10 text-blue-900 py-4">
                            <FaCheck />
                            </td>
                            <td class="px-10 text-blue-900 py-4">
                            <FaCheck />
                            </td>
                        </tr>
                        <tr className="border-b border-b-white">
                            <th scope="row" class="px-6 py-4 font-medium text-blue-950 whitespace-nowrap dark:text-white">
                               Event Scheduling
                            </th>
                            <td className="px-6 text-blue-900 py-2 bg-white">
                            <FaCheck className='lg:ml-6 ml-3 ' style={{ fontSize: '1.5em'}} />
                              </td>
                            <td class="px-12  text-blue-900 py-4">
                            <FaCheck />
                            </td>
                            <td class="px-6 py-4">
                             
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr className="border-b border-b-white">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Polls & Surveys
                            </th>
                            <td className="px-6 text-blue-900 py-2 bg-white">
                            <FaCheck className='lg:ml-6 ml-3 ' style={{ fontSize: '1.5em'}} />
                              </td>

                            <td class="px-12  text-blue-900 py-4">
                            <FaCheck />
                            </td>
                            <td class="px-10  text-blue-900 py-4">
                            <FaCheck />
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                        </tr>
                        <tr className="border-b border-b-white">
                            <th scope="row" class="px-6 py-4 font-medium text-blue-950 whitespace-nowrap dark:text-white">
                                Organized Message Board/Feed
                            </th>
                            <td className="px-6 text-blue-900 py-2 bg-white">
                            <FaCheck className='lg:ml-6 ml-3 ' style={{ fontSize: '1.5em'}} />
                              </td>
                            <td class="px-6 py-4">
                              
                            </td>
                            <td class="px-6 py-4">
                                
                            </td>
                            <td class="px-6 py-4">
                               
                            </td>
                        </tr>
                        <tr className="border-b border-b-white">
                            <th scope="row" class="px-6 py-4 font-medium text-blue-950 whitespace-nowrap dark:text-white">
                                Customization and Branding
                            </th>
                            <td className="px-6 text-blue-900 py-2 bg-white">
                            <FaCheck className='lg:ml-6 ml-3 ' style={{ fontSize: '1.5em'}} />
                              </td>
                            <td class="px-6 py-4">
                             
                            </td>
                            <td class="px-6 py-4">
                           
                            </td>
                            <td class="px-6 py-4">
                               
                            </td>
                        </tr>
                        <tr className="border-b border-b-white">
                            <th scope="row" class="px-6 py-4 font-medium text-blue-950 whitespace-nowrap dark:text-white">
                                Privacy & Security
                            </th>
                            <td className="px-6 text-blue-900 py-2 bg-white">
                            <FaCheck className='lg:ml-6 ml-3 ' style={{ fontSize: '1.5em'}} />
                              </td>
                            <td class="px-6 py-4">
                               
                            </td>
                            <td class="px-6 py-4">
                           
                            </td>
                            <td class="px-6 py-4">
                         
                            </td>
                        </tr>
                        <tr className="border-b border-b-white">
                            <th scope="row" class="px-6 py-4 font-medium text-blue-950 whitespace-nowrap dark:text-white">
                                Dedicated HOA Support
                            </th>
                            <td className="px-6 text-blue-900 rounded-lg bg-white">
                            <FaCheck className='lg:ml-6 ml-3 ' style={{ fontSize: '1.5em'}} />
                              </td>
                            <td class="px-6 py-4">
                             
                            </td>
                            <td class="px-6 py-4">
                           
                            </td>
                            <td class="px-6 py-4">
                            
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div></>
    )
}
