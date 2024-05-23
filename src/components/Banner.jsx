import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../components/css/Banner.css';
import '../components/ClassRoomName'

import thestrongest from'../assets/img/thestrongest.jpg'
import banishedHero from'../assets/img/banishedHero.jpg'
import classRoom from'../assets/img/classRoom.jpg'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

//import animeName img
import ClassRoomName from '../components/ClassRoomName';
import BanishedHeroName from '../components/BanishedHeroName';
import TheStrongestName from './TheStrongestName';


export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide><img src={thestrongest } alt="" /> < TheStrongestName/>   </SwiperSlide>
        <SwiperSlide><img src={banishedHero} alt="" /> <BanishedHeroName/>  </SwiperSlide> */}
        <SwiperSlide><img src={classRoom} alt="" />  <ClassRoomName/>  </SwiperSlide>
      </Swiper>
      
    </>
  );
}
