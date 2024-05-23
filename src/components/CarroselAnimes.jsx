import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './css/CarroselCss.css';


import godgames from '../assets/img/godgamess.avif'
import kaiju8 from '../assets/img/kaiju8.jpg'
import prince from '../assets/img/7prince.jpg'
import hero from '../assets/img/hero.jpg'
import chillin from '../assets/img/chillin.jpg'
import studio from '../assets/img/studio.jpg'
import salad from '../assets/img/salad.jpg'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { TbBackground } from 'react-icons/tb';

export default function CarroselAnimes() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="swiperr mySwiper"
      >
        <SwiperSlide className='swiperr-slide anime-name '> <img  src={godgames} alt="" /> <p>God Game</p> </SwiperSlide>
        <SwiperSlide className='swiperr-slide anime-name '> <img  src={kaiju8} alt="" /> <p>Kaiju no 8</p> </SwiperSlide>
        <SwiperSlide className='swiperr-slide anime-name '> <img  src={prince} alt="" /> <p>7 Prince</p> </SwiperSlide>
        <SwiperSlide className='swiperr-slide anime-name '> <img  src={hero} alt="" /> <p>The Banished Former Hero</p> </SwiperSlide>
        <SwiperSlide className='swiperr-slide anime-name '> <img  src={chillin} alt="" /> <p>Chillin'g in another world</p> </SwiperSlide>
        <SwiperSlide className='swiperr-slide anime-name '> <img  src={salad} alt="" /> <p>Bow sald</p> </SwiperSlide>
        <SwiperSlide className='swiperr-slide anime-name '> <img  src={studio} alt="" /> <p>Studio apartment</p> </SwiperSlide>
     </Swiper>
    </>
  );
}
