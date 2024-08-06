import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Nav from './components/Nav';
import { gsap } from 'gsap';``

import myImage from '/images/Group 1.png';
import myImage1 from '/images/Group 1.png';
import myimg4 from '/images/24.jpeg';
import myimg5 from '/images/2.jpeg' ;
import myimg6 from '/images/3.jpeg' ;
import myimg7 from '/images/4.jpeg' ;
import myimg8 from '/images/5.jpeg' ;
import myimg9 from '/images/6.jpeg';
import arrow from '/images/Arrow up-circle.png';

export default function App() {
  const boxRef2 = useRef(null);
  const boxRef1 = useRef(null);
  const boxRef3 = useRef(null);
  useEffect(() => {
    
    gsap.fromTo(boxRef2.current, 
      { x: -900 }, // Initial state
      { x: 40, duration: 2 } // Final state and duration
    );
    gsap.to(boxRef1.current, { rotation: 360, duration: 2 });
    gsap.to(boxRef3.current, { scale: 1.8, duration: 2});

  }, []);
  return (
    <div className="w-full">
      <div className="w-full absolute z-30  sm:pt-0 flex justify-center  bg-gradient-to-r from-black to-gray-600 ">
          <Nav />
        </div>
        
        
     <section className=" bg-gradient-to-r from-black to-gray-600 min-h-screen flex items-center xl:flex-row sm:flex-col sm:justify-center " id='home'>
     <div ref={boxRef2} className=''>
      <a href='#how'>
       <div className="  grid grid-cols-2  xl:space-x-8 sm:space-x-8 sm:pb-10 xl:p-0   ">
    <div className=" row-span-2 flex justify-center">
      <h1 className="  sm:text-6xl xl:text-9xl -px-6 text-white font-sans   ">AUTUMN</h1>
    </div>
    <div className=" xl:py-2 xl:w-1/2 flex justify-start items-center">
  <h1 className="xl:text-5xl sm:text-xl text-white font-sans">D E S I I G N</h1>
</div>
    <div className=" xl:w-1/2 sm:w-full flex justify-start align-middle">
      <h1 className="xl:text-5xl sm:text-xl text-white font-sans">S T U D I O</h1>
    </div >
    
  </div>
  <div className=' flex px-0 '>
    <h1 className='text-slate-300 font-thin xl:text-3xl sm:hidden '>Home Interiors & Renovations</h1>
    </div>
  </a>
   
    </div>

   
  <div className='flex xl:justify-end sm:justify-center  sm:pt-24 xl:p-0'>
  <div ref={boxRef3} className=' mx-6'>
    <img src={myImage} alt="Description of image" className='xl:w-[450px]  sm:w-[200px]' />
    <h1 className='text-center text-slate-500 xl:text-lg sm:text-sm '> A Venture of Autumn Interiors</h1>
    </div>
  </div>
</section>

<section className=' bg-[#958f8c] p-6' id='qual'>
 <h1 className='  text-6xl text-white font-thin py-6  sm:text-center xl:text-start ' > Product & Services</h1>
<div className='min-h-[50vh]  flex  sm:flex-col xl:flex-row space-x-4 py-2'>
 
  <div className=' xl:w-1/5  sm:w-9.5 text-center text-xl bg-white  grid sm:grid-cols-2 xl:grid-cols-1 bg-opacity-40 rounded-lg'>
    
    <h1>Turn Key Projects</h1>
    <h1>sofa</h1>
    <h1>bed</h1>
    <h1 >furniture</h1>
    <h1>sofa</h1>
    <h1>bed</h1>
    <h1>sofa</h1>
    <h1>bed</h1>
    <h1 >furniture</h1>
    <h1>sofa</h1>
    
  </div>
  <div className='xl:w-4/5  sm:w-9.5  rounded-lg border-emerald-700 overflow-x-auto whitespace-nowrap space-x-3 sm:py-4'>
  <img src={myimg9} alt="Description of image1" style={{ width: '450px', height: '450px' }} className="inline-block rounded-xl" />
  <img src={myimg9} alt="Description of image1" style={{ width: '450px', height: '450px' }} className="inline-block rounded-xl" />
  <img src={myimg9} alt="Description of image1" style={{ width: '450px', height: '450px' }} className="inline-block rounded-xl" />
  <img src={myimg9} alt="Description of image1" style={{ width: '450px', height: '450px' }} className="inline-block rounded-xl" />

</div>
</div>
</section>

<section className='bg-slate-500 p-6 ' id='how'>
  <h1 className='text-6xl px-2 py-5 text-white font-serif text-center'>HOW IT WORKS ?</h1>
  <div className='flex justify-center py-6'>
  <div className='grid xl:grid-cols-3 sm:grid-cols-2  gap-3  sm:gap-3 xl:w-3/4 sm:w-full'>
  <div className=' p-3 flex flex-col justify-center items-center border-2 rounded-lg hover:shadow-2xl hover:shadow-white'>
  <img src={myimg4} alt="Description of image" className="w-full h-auto object-cover" />
  <h1 className='text-center text-xl  text-white pt-16'>MEET & DESIGN</h1> <p1>Site Information <br />  Personal Requirements <br />Preferences theme</p1></div>

  <div className=' p-3 flex flex-col justify-center items-center border-2 rounded-lg hover:shadow-2xl hover:shadow-white'>
  <img src={myimg6} alt="Description of image" className="w-full h-auto object-cover" />
  <h1 className='text-center text-xl pt-2 text-white'>SPACE PLANNING</h1><p>2D Layout <br /> Collabrorate & Design <br /> Client Approvals</p></div>
    
  <div className=' p-3 flex flex-col justify-center items-center border-2 rounded-lg hover:shadow-2xl hover:shadow-white'>
  <img src={myimg5} alt="Description of image" className="w-full h-auto object-cover" />
  <h1 className='text-center text-xl pt-16 text-white'>DESIGN CONCEPT</h1> <p1> Working Drawings <br /> 3D Perspectives <br /> Material Selection</p1></div>
    
  <div className=' p-3 flex flex-col justify-center items-center border-2 rounded-lg hover:shadow-2xl hover:shadow-white'>
  <img src={myimg7} alt="Description of image" className="w-full h-auto object-cover " />
  <h1 className='text-center text-xl pt-16 text-white'>CONFIRMATION</h1> <p1> Estimate <br /> Workflow Plan <br />  Checklist</p1></div>
    
  <div className=' p-3 flex flex-col justify-center items-center border-2 rounded-lg hover:shadow-2xl hover:shadow-white'>
  <img src={myimg8} alt="Description of image" className="w-full h-auto object-cover" />
  <h1 className='text-center text-xl pt-2 text-white'>EXECUTION</h1> <p1>Manufacturing <br />Quality Control <br />Delivery & Installation</p1></div>
    
  <div className=' p-3 flex flex-col justify-center items-center border-2 rounded-lg hover:shadow-2xl hover:shadow-white'>
  <img src={myimg9} alt="Description of image" className="w-full h-auto object-cover" />
  <h1 className='text-center text-xl pt-16 text-white'>HAND OVER</h1> <p1>Confirm CHeklist <br /> Transperncy <br /> Quality Promise</p1></div>
    
  </div>
    
</div>
</section >
 
 
<section className='bg-[#958f8c] h-auto xl:p-24 sm:p-16' id='prod'>
  <h1 className='text-center text-6xl text-white font-thin pb-12'>product gallery</h1>
  <div className='flex justify-center items-center h-auto '>
    <Carousel className='xl:w-[500px] sm:w-[300px] ' autoPlay>
      <div>
        <img src={myimg9} className="h-auto max-w-full rounded-lg object-cover object-center" alt=""/>
      </div>
      <div>
        <img src={myimg8} className="h-auto max-w-full rounded-lg object-cover object-center" alt=""/>
      </div>
      <div>
        <img src={myimg7} className="h-auto max-w-full rounded-lg object-cover object-center" alt=""/>
      </div>
      <div>
        <img src={myimg6} className="h-auto max-w-full rounded-lg object-cover object-center" alt=""/>
      </div>
      <div>
        <img src={myimg4} className="h-auto max-w-full rounded-lg object-cover object-center" alt=""/>
      </div>
      <div>
        <img src={myimg9} className="h-auto max-w-full rounded-lg object-cover object-center" alt=""/>
      </div>
      <div>
        <img src={myimg8} className="h-auto max-w-full rounded-lg object-cover object-center" alt=""/>
      </div>
      <div>
        <img src={myimg7} className="h-auto max-w-full rounded-lg object-cover object-center" alt=""/>
      </div>
      <div>
        <img src={myimg6} className="h-auto max-w-full rounded-lg object-cover object-center" alt=""/>
      </div>
      <div>
        <img src={myimg5} className="h-auto max-w-full rounded-lg object-cover object-center" alt=""/>
      </div>
      <div>
        <img src={myimg4} className="h-auto max-w-full rounded-lg object-cover object-center" alt=""/>
      </div>
    </Carousel>
  </div>
</section>

<section className='bg-black h-auto' id='abt'>
<div className="  flex justify-center  ">
          <div className="grid xl:grid-cols-4 sm:grid-cols-1 sm:py-5 space-x-2  sm:space-y-6 xl:space-y-0  xl:w-3/4  xl:py-20">
            <div className="  text-white text-3xl">
              <div className=' flex sm:justify-center xl:justify-start'>
            <img src={myImage1} alt="Description of image" style={{ width: '90px', height: '90px' }} className='' />
            </div>
              <h1 className=" sm:text-center xl:text-start ">Autumn</h1>
            </div>
            <div className=" text-white grid grid-cols-1 space-y-2 justify-center ">
              <h1 className="text-xl text-gray-400 text-center xl:text-start" >links</h1>
              <a href="#how" className="text-center xl:text-start">how it works</a>
              <a href="#qual" className="text-center xl:text-start">quality</a>
              <a href="#prod" className="text-center xl:text-start">gallery</a>
              <a href="https://wa.me/+91 98505 40400"className="text-center xl:text-start">contact</a>
            </div>
            <div className=" text-white">
              <h1 className="text-xl text-gray-400 sm:text-center xl:text-start ">contact</h1>
              <h1 className="py-2 sm:text-center xl:text-start underline">+91 98505 40400</h1>
              <h1 className="sm:text-center xl:text-start underline">Autumninteriorsgoa@gmail.com</h1>
            </div>
            <div className="  text-white xl:flex xl:flex-col sm:justify-center  sm:align-middle  ">
              <h1 className=" sm:text-center xl:text-center text-xl font-semibold">ADRESS</h1>
               <h1 className='xl:text-center py-2 px-2'>Autumn Design Studio
D. S. Harmony, Shop No. 2, Opp. Chowgule College, Gogol
Margao - Salcete - Goa.</h1>
            </div>
          </div>
        </div>
        <a href="#home">
  <div className="flex xl:justify-end sm:justify-center px-6 b pb-6">
    <img src={arrow}style={{ width: '80px', height: '80px' }} className='bg-[#958f8c] bg-opacity-20 rounded-full'/>

  </div>
</a>
        <div className="border-2 border-cyan-500"></div>
        <div className="flex justify-between py-6">
          <h1 className="text-white p-2 ">
            © 2024 autumn. All rights reserved.
          </h1>
          <h1 className="text-white p-2">Privacy Pefolicy</h1>
        </div>
</section>
    </div>
  )
}