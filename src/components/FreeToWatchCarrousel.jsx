import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './css/CarroselCss.css';
import './css/FreeToWatchCarrousel.css'


import godgames from '../assets/img/godgamess.avif'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function CarroselAnimes() {
  return (
    <>
        <span className='Free-to-Watch'>
            <h2>Free-to-Watch First Seasons!</h2>
            <p>Watch some of our most popular titles right here!</p>
        </span>

      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="swiperrr mySwiper"
      >
        <SwiperSlide className='swiperr-slide'> <img  src={godgames} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiperr-slide'> <img  src={godgames} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiperr-slide'> <img  src={godgames} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiperr-slide'> <img  src={godgames} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiperr-slide'> <img  src={godgames} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiperr-slide'> <img  src={godgames} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiperr-slide'> <img  src={godgames} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiperr-slide'> <img  src={godgames} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiperr-slide'> <img  src={godgames} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiperr-slide'> <img  src={godgames} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiperr-slide'> <img  src={godgames} alt="" /> </SwiperSlide>
      </Swiper>
    </>
  );
}
