import React, { useLayoutEffect } from 'react'
import Card from './Card'
import './Explore.css'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




const Explore = () => {
  useLayoutEffect(() => {
    
    gsap.fromTo(".explore", {
      yPercent: "100",
      opacity: "0"
    }, {
      opacity: "1",
      yPercent: "0",
      // duration:"0.5",
      // stagger: "0.4",
      scrollTrigger: {
        trigger: ".explore",
        toggleActions: "restart pause reverse pause",
        // scrub: 5,
        scroller: "body",
      }
    })
    gsap.fromTo(".top-destination", {
      yPercent: "100",
      opacity: "0"
    }, {
      opacity: "1",
      yPercent: "0",
      
      // duration:"0.5",
      // stagger: "0.4",
      scrollTrigger: {
        trigger: ".top-destination",
        toggleActions: "restart pause reverse pause",
        // scrub: 5,
        scroller: "body",
      }
    })
    gsap.fromTo(".explore_swiperSlide", {
      yPercent: "40",
      duration: "2",
      opacity: "0"
    }, {
      opacity: "1",
      yPercent: "0",
      delay:"0.5",
      stagger: "0.2",
      scrollTrigger: {
        trigger: ".explore_swiperSlide",
        toggleActions: "restart pause reverse pause",
        // scrub: 5,
        scroller: "body",
      }
    })
    gsap.fromTo(".card1", {
      yPercent: "40",
      duration: "2",
      opacity: "0"
    }, {
      opacity: "1",
      yPercent: "0",
      stagger: "0.2",
      delay:"0.5",
      scrollTrigger: {
        trigger: ".card1",
        toggleActions: "restart pause reverse pause",
        // scrub: 5,
        scroller: "body",
      }
    })
  })
  return (
    <div className='top-destinations'>
      <h1 className='heading heading_font text-center text-6xl py-10 top-destination'>Discover Top Destinations</h1>

      {/* <div className='card-container'> */}
      <Swiper
        slidesPerView={'auto'}
        // centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        className="mySwiper_destination"
      >
        
        <SwiperSlide className='explore_swiperSlide'>
          <Card img="https://industrialvisits.in/wp-content/uploads/2018/10/udaipur.jpg"
            name="Udaipur" destination="Pichola Lake" />
        </SwiperSlide>
        <SwiperSlide className='explore_swiperSlide'>
          <Card img="https://media.tacdn.com/media/attractions-splice-spp-674x446/0e/ee/43/23.jpg"
            name="Jaipur" destination="jal Mahal" />
        </SwiperSlide>
        <SwiperSlide className='explore_swiperSlide'>
          <Card img="https://firebasestorage.googleapis.com/v0/b/rajasthan-tourism-ffd3e.appspot.com/o/images%2Fkhimsar.webp?alt=media&token=085dd299-39ab-44b6-9cef-7d74891ee492"
            name="Nagaur" destination="Khimsar" />
        </SwiperSlide>
        <SwiperSlide className='explore_swiperSlide'>
          <Card img="https://images.bhaskarassets.com/web2images/521/2021/04/07/orig_58_1617749362.jpg"
            name="Kishangarh" destination="Dumping Yard" />
        </SwiperSlide>
        <SwiperSlide className='explore_swiperSlide'>
          <Card img="https://images.unsplash.com/photo-1582998451055-08fafb4679ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
            name="Bikaner" destination="Rampuria Haveli" borderImg="../assets/red.png" />
        </SwiperSlide>
        <SwiperSlide className='explore_swiperSlide'>
          <Card img="https://images.unsplash.com/photo-1586612438666-ffd0ae97ad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            name="Udaipur" destination="Kumbhalgarh fort" />
        </SwiperSlide>
        
      </Swiper>

      {/* </div> */}

      <div className='page2 my-40'>
        <h1 className='text-center heading_font text-6xl my-10 explore'>Explore</h1>
        <div className='card-container1'>
          <div className='card1'>
            <a href='/forts'>
              <img className='card1-img' src='https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt=''></img>
              <h1 className='text-center font-bold'>Forts</h1>
            </a>

          </div>
          <div className='card1'>
            <a href='/temples'>
              <img className='card1-img' src='https://www.thebharatah.in/wp-content/uploads/2023/05/architecture-building-monument-travel-journey-asia-456905-pxhere.com_-1-scaled.jpg' alt=''></img>
              <h1 className='text-center font-bold'>Religion Places</h1>
            </a>

          </div>
          <div className='card1'>
            <a href='/museum'>
              <img className='card1-img' src='https://img.veenaworld.com/wp-content/uploads/2021/07/Albert-Hall-Museum-Jaipur-Ticket-Price-History-and-Timings-scaled.jpg' alt=''></img>
              <h1 className='text-center font-bold'>Museum</h1>
            </a>

          </div>
          <div className='card1'>
            <a href='/wildlife'>
              <img className='card1-img' src='https://images.unsplash.com/photo-1661769212734-67877c79deff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80' alt=''></img>
              <h1 className='text-center font-bold'>Wildlife</h1>
            </a>

          </div>
          <div className='card1'>
            <a href='/lakes'>
              <img className='card1-img' src='https://images.unsplash.com/photo-1645713150004-bda76a6699ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' alt=''></img>
              <h1 className='text-center font-bold'>Lakes & Waterbodies</h1>
            </a>

          </div>
          <div className='card1'>
            <a href='/fairs'>
              <img className='card1-img' src='https://deramasuda.com/wp-content/uploads/2018/10/pushkar-fair-2.jpg' alt=''></img>
              <h1 className='text-center font-bold'>Fairs & Festivals</h1>
            </a>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Explore