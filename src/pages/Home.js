import React, { useLayoutEffect } from 'react'
import './Home.css'
import img2 from '../assets/33.png'
import img3 from '../assets/5.png'
import Explore from '../components/Explore'
import Mapbox from '../pages/Mapbox'
import gsap from 'gsap'
import Footer from '../components/Footer'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Music from '../components/Music'
import { Navbar } from '../components/Navbar'
import MusicPlayer from '../components/MusicPlayer'
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useLayoutEffect(() => {
    let tl = gsap.timeline();
    // gsap.from('.title',{
    //   // scale:"2.5",
    //   y:-30,
    //   duration:"1"
    // })
    gsap.fromTo(".visit-rajasthan", {
      yPercent: "100",
      opacity: "0"
    }, {
      opacity: "1",
      yPercent: "0",
      duration:"0.5",
      // stagger: "0.4",
      scrollTrigger: {
        trigger: ".visit-rajasthan",
        toggleActions: "restart pause reverse pause",
        // scrub: 5,
        scroller: "body",
      }
    })
    gsap.fromTo(".luxury", {
      yPercent: "100",
      opacity: "0"
    }, {
      opacity: "1",
      yPercent: "0",
      duration:"0.5",
      // stagger: "0.4",
      scrollTrigger: {
        trigger: ".luxury",
        toggleActions: "restart pause reverse pause",
        // scrub: 5,
        scroller: "body",
      }
    })
    gsap.fromTo(".sky-img",{
      scale:"1"
    }, {
      scale: "3.5",
      // delay:"4",
      // duration:"2",
      scrollTrigger: {
          trigger: ".sky-img",
          toggleActions: "restart pause reverse pause",
          scrub: 5,
          scroller: "body",
      }
    })

    gsap.fromTo(".card3", {
      yPercent: "100",
      opacity: "0"
    }, {
      opacity: "1",
      yPercent: "0",
      stagger: "0.4",
      scrollTrigger: {
        trigger: ".page-center",
        toggleActions: "restart pause reverse pause",
        // scrub: 5,
        scroller: "body",
      }
    })
    gsap.fromTo(".ele-left", {
      xPercent: "-100",
      opacity: "0"
    }, {
      opacity: "1",
      xPercent: "0",
      scrollTrigger: {
        trigger: ".ele-left",
        toggleActions: "restart pause reverse pause",
        // scrub: 5,
        scroller: "body",
      }
    })
    gsap.fromTo(".ele-right", {
      xPercent: "90",
      opacity: "0"
    }, {
      opacity: "1",
      xPercent: "0",
      scrollTrigger: {
        trigger: ".ele-right",
        toggleActions: "restart pause reverse pause",
        // scrub: 5,
        scroller: "body",
      }
    })
  })


  return (
    <>

      <div className='home-section'>
        <Navbar />
        <div className='hero-img'>
          {/* <img className='desert-img ' src={img2} alt=''></img> */}
          <div className='title heading_font text-center'>Rajasthan</div>
          <div className='heading_font text-center tag-line'> Discover the Jewel of India</div>
          <div className='shadow'></div>
          {/* <img className='camel-img'
          src={img1}
          // src='https://images.unsplash.com/photo-1602858659965-ea6f743b7679?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1693&q=80'
          alt=''></img> */}
          {/* <img className='sky-img' src={img3} alt=''></img> */}
          <div className='desert-img '></div>
          <div className='sky-img'></div>
        </div>
        <div className='top-destinations'>
          <h1 className='text-center visit-rajasthan heading_font my-10'>Visit Rajasthan</h1>
          <div className='flex flex-col '>
            {/* items-center w-screen justify-center */}
            <div className='flex flex-row justify-around'>
              <img className='elephant-img ele-left' src='https://chokhidhani.com/ethnic-resort-jaipur/wp-content/uploads/2022/07/ele-1.png' href='/' />
              <img className='elephant-img ele-right' src='https://chokhidhani.com/ethnic-resort-jaipur/wp-content/uploads/2022/07/image-1.png' href='/' />
            </div>

            <p className='text-center rajasthan-text'>
              Rajasthan, India's crown jewel, is a land where history comes alive, and every corner tells a tale of valor,
              grandeur, and timeless traditions. From the majestic forts that rise from the golden sands of the Thar Desert
              to the vibrant tapestry of Rajasthani culture and traditions, this enchanting state offers a journey like no other.
              Witness the resplendent colors of turbans and sarees, the rhythm of folk music and dance, and savor the flavorful Rajasthani cuisine.
              The state's calendar is punctuated by lively festivals like Diwali and Holi, offering a glimpse into the fervent spirit of Rajasthan.
              <br />
              Rajasthan is also a treasure trove of artisanal craftsmanship. Explore local markets for intricate textiles, exquisite jewelry,
              and traditional handicrafts that reflect the state's rich artistic heritage. Whether you're exploring ancient cities like Udaipur or
              encountering wildlife in its natural habitat, every moment in Rajasthan is a blend of history, culture, and unmatched beauty.
            </p>

          </div>

        </div>


        <Explore />
        {/* <Gallery /> */}

        <div className='page-center'>
          <h1 className='heading3 heading_font text-7xl luxury'>Luxury<br />स्थान</h1>
          <div className='swiper-wrapper card3_container'>
            <div href='/' className='card3'>
              <img src='https://thesujanlife.com/documents/35366/93624/srmp+Image+3+mob.jpg/ad2b1a8f-12ab-bda4-3455-4459018de818?t=1572844903031' alt='' />
              <h6 className='card-heading3'>Luxury Hotels</h6>
            </div>
            <div href='/' className='card3'>
              <img src='https://static.toiimg.com/thumb/61202140/1654443_571243823004699_5679366923847528427_n.jpg?width=1200&height=900' alt='' />
              <h6 className='card-heading3'>Luxury Train</h6>
            </div>
            <div href='/' className='card3'>
              <img src='https://w0.peakpx.com/wallpaper/785/148/HD-wallpaper-gaitore-cenotaphs-near-jaipur-rajasthan-gaitore-cenotaphs-place-thumbnail.jpg' alt='' />
              <h6 className='card-heading3'>Luxury Palace</h6>
            </div>
          </div>
        </div>

        <Mapbox />
        {/* <video className='video my-40 p-5 rounded-2xl' preload='auto' muted="muted" autoPlay="autoplay" loop="loop">
          <source src={vid1} ></source>
        </video> */}
        <MusicPlayer/>
        <Music />
        <Footer />
      </div>
      
    </>
  )
}

export default Home