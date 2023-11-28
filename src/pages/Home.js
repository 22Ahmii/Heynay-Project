import React from 'react'
import Mainbody from '../components/Mainbody'
import Landscape from "../components/Landscape";
import IntoductionContent from '../components/IntoductionContent';
import MissionContent from '../components/MissionCotent';
import Features from '../components/Features';
import Comparisons from '../components/Comparisons';
 import Footer from '../components/Footer';
function Home() {
  return (
    <div>
         <Mainbody/>
         <Landscape/>
         <IntoductionContent/>
         <div className='md:2xl:mt-[-350px] mt-[-130px] md:lg:mt-[-250px]'>
         <MissionContent/></div>
         <Features/>
         <Comparisons/>
         <Footer/>
    </div>
  )
}

export default Home