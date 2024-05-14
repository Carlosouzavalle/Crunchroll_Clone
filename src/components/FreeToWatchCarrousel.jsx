import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './css/CarroselCss.css';
import './css/FreeToWatchCarrousel.css'


import konosuba from '../assets/img/konosuba.jpg'
import card1 from '../assets/img/card1.jpg'
import card2 from '../assets/img/card2.jpg'
import card3 from '../assets/img/card3.jpg'
import card4 from '../assets/img/card4.jpg'
import card5 from '../assets/img/card5.jpg'
import card6 from '../assets/img/card6.jpg'

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
        <SwiperSlide className='swiperr-, anime-name'> <img  src={konosuba} alt="" /> <p>konosuba</p> </SwiperSlide>
        <SwiperSlide className='swiperr-, anime-name'> <img  src={card1} alt="" /> <p>MMO Junkie</p> </SwiperSlide>
        <SwiperSlide className='swiperr-, anime-name'> <img  src={card2} alt="" /> <p>Love is War</p> </SwiperSlide>
        <SwiperSlide className='swiperr-, anime-name'> <img  src={card3} alt="" /> <p>Bunny Girl</p></SwiperSlide>
        <SwiperSlide className='swiperr-, anime-name'> <img  src={card4} alt="" /> <p>Tonikawa</p> </SwiperSlide>
        <SwiperSlide className='swiperr-, anime-name'> <img  src={card5} alt="" /> <p>Tomo-chan</p> </SwiperSlide>
        <SwiperSlide className='swiperr-, anime-name'> <img  src={card6} alt="" /> <p>My dress-up Darling</p> </SwiperSlide>
      </Swiper>
    </>
  );
}
