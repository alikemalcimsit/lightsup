import React from 'react';
import FancyText from '@carefully-coded/react-text-gradient';
import Navbar from '../components/Navbar';
import bg from "../assets/bg.png";
import Phone from './phone';
import "swiper/css";
import { Zoom, Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import react from "../assets/react.png";
import dart from "../assets/dart.png";

import firebase from "../assets/firebase.png";

import flutter from "../assets/flutter.png";

import mongodb from "../assets/mongodb.png";

import nodejs from "../assets/node.js.png";
import swift from "../assets/swift.png";
export default function HomePage() {
  let items = [react,dart,firebase,flutter,mongodb,nodejs,swift,react,dart,firebase,flutter,mongodb,nodejs,swift,react,dart,firebase,flutter,mongodb,nodejs,swift];

  return (
    <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'  }} >
      <div className='flex  m-auto w-10/12 justify-center items-center h-screen'>

<div  className=' w-[300px] h-full  mt-16 '>
  
<Phone></Phone>
</div>
        <div className=' w-3/4 text-center'>
          <h1 className="text-6xl font-bold text-white">#1 {' '}

            <FancyText
              gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
              animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
              animateDuration={2000}
            >
              Mobile App
            </FancyText>

            {' '} Development Company of Europe</h1>

          <p className='text-white w-4/5 m-auto font-extralight text-center text-2xl mb-8 mt-8 '>With a track record of 500+ delivered outsourced iOS and Android apps for 100+ clients, we shape mobile innovation.</p>

          <button className='text-white bg-[#0C5ACE] py-3 font-semibold px-6 rounded-xl'>Get a Free Quote</button>
        </div>

      </div>
      <div  className="overflow-hidden mt-40 ">
        <h6 className='text-5xl text-white text-center font-bold'>
          
          Get a Free Quote Record
          
         
          </h6>
          <FancyText className='text-5xl font-bold text-center  w-full  mb-16'
              gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
              animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
              animateDuration={2000}
            >
               Mobile App
            </FancyText>
     <div className='-rotate-6'>
        
     <Swiper 
     
          loop={true}
          zoom={true}
          slidesOffsetAfter={0}
          slidesOffsetBefore={0}
          slidesPerView={6}
          spaceBetween={50}
          freeMode={true}
          speed={2000}
          
          autoplay={{
            pauseOnMouseEnter:false,
reverseDirection:true,
            stopOnLastSlide:false,
            delay: 0,
            disableOnInteraction: false, // Allow interaction without stopping autoplay
           
            loop: true,
          }}
          // Set the speed for a smooth continuous slide transition
          modules={[Zoom, Autoplay, Pagination, Navigation]}
          className="w-screen h-full text-center flex items-center"
        >
        {items.map((item) => (
          <SwiperSlide>
            <div className=" w-36 h-36 rounded-full  bg-white    flex items-center justify-center drop-shadow-lg">
              <img
                alt="logo"
                className="object-center object-cover  h-24  "
                src={item}
              ></img>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     </div>
     <div className='-rotate-6 mt-10 mb-32'>
        
     <Swiper 
          loop={true}
          zoom={true}
          slidesOffsetAfter={0}
          slidesOffsetBefore={0}
          slidesPerView={6}
          spaceBetween={50}
          freeMode={true}
          speed={2000}
          autoplay={{
            pauseOnMouseEnter:false,

            stopOnLastSlide:false,
            delay: 0,
            disableOnInteraction: false, // Allow interaction without stopping autoplay
           
            loop: true,
          }}
          // Set the speed for a smooth continuous slide transition
          modules={[Zoom, Autoplay, Pagination, Navigation]}
          className="w-screen h-full text-center flex items-center"
        >
        {items.map((item,index) => (
          <SwiperSlide key={index} >
            <div className=" w-36 h-36 rounded-full  bg-white    flex items-center justify-center drop-shadow-lg">
              <img
                alt="logo"
                className="object-center object-cover  h-24  "
                src={item}
              ></img>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     </div>
    </div>
    </div>
  );
}
