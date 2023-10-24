import React, { useLayoutEffect, useState } from 'react'
import './Navbar.css'
import gsap from 'gsap'
import logo from '../assets/logo.png'

export const Navbar = (props) => {
  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    console.log(showNavbar)
    setShowNavbar(!showNavbar)
  }
  useLayoutEffect(() => {
    let tl = gsap.timeline();
    gsap.fromTo(".logo", {
      y: "-50px",
      xPercent: "-50",
      duration: "1.5",
      opacity: ".5"
    }, {
      opacity: "1",
      y: "0px",
      duration: "1.5",
      xPercent: "-50"
    })

  })

  return (
    <header>

      <img className='logo' src={logo}></img>
      <nav className='navbar' style={{ background: props.bgColor, color: props.color }}>
        <ul className='flex'>
          <li><a href='/'>Home</a></li>
          <li><a href='/destination'>Destinations</a></li>
          <li><a href='/gallery'>Gallery</a></li>
        </ul>

        <ul>
          <li><a href='/forts'>Forts</a></li>
          <li><a href='/fairs'>Fairs & Festivals</a></li>
          <li><a href='/wildlife'>Wildlife</a></li>
        </ul>
        <img className='navbar_icon' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp' onClick={handleShowNavbar} href="/" />
      </nav>
      <div className={` flex-col items-center justify-center nav_mobile ${showNavbar && 'active'}`}>
        
        <ul className='flex-col items-center justify-center'>
          <li><a href='/'>Home</a></li>
          <li><a href='/destination'>Destinations</a></li>
          <li><a href='/gallery'>Gallery</a></li>
          <li><a href='/fairs'>Fairs & Festivals</a></li>
          <li><a href='/forts'>Forts</a></li>
          <li><a href='/wildlife'>Wildlife</a></li>
        </ul>
      </div>

    </header>

  )
}
export default Navbar