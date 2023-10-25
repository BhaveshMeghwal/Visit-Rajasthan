import React from 'react'
import './Footer.css'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Footer = () => {

  return (
    <div className='footer'>
      {/* <div className='footer-logo'>
            <img src='https://i.pinimg.com/736x/c5/0e/d7/c50ed7881c2768b703540a780e58ad44.jpg' alt='' />
        </div> */}
      <div className='footer-content'>
        <div>
          <h1 className='font-bold my-1'>Discover</h1>
          <ul>
            <li><a href='/forts'>Forts</a></li>
            
            <li><a href='/'>Museums</a></li>
            <li><a href='/lakes'>Lakes</a></li>
            <li><a href='/temples'>Religious Places</a></li>
            <li><a href='/wildlife'>Wildlife</a></li>
            <li><a href='/'>Palaces</a></li>
            {/* <li><a href='/'>Fairs & Festivals</a></li> */}
          </ul>
        </div>
        {/* <div>
          <h1>Experience</h1>
          <ul>
            <li><a href='/'>fairs & Festival </a></li>
            <li><a href='/'>Luxury on wheels</a></li>
            <li><a href='/'>Adventures</a></li> 
            <li><a href='/'>Heritage Properties</a></li>
            <li><a href='/'>Travel Diaries</a></li>

          </ul>
        </div> */}
        <div>
          <h1 className='font-bold my-1'>Plan & Experience</h1>
          <ul>
            <li><a href='/gallery'>Gallery</a></li>
            {/* <li><a href='/'>How to get there</a></li>
            <li><a href='/'>Foreign Tourists</a></li> */}
            <li><a href='/destination'>Destinations</a></li>
            <li><a href='/fairs'>fairs & Festival </a></li>
            <li><a href='/'>Luxury on wheels</a></li>
            <li><a href='/'>Suggested Iteneries</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer