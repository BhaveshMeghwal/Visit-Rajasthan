import React, { useLayoutEffect } from 'react'
import './Preloader.css'
import mandala from "../assets/mandala.png"
import man from "../assets/vector1.png"
import { gsap } from 'gsap';

const Preloader = () => {
    useLayoutEffect(() => {
        let tl = gsap.timeline();
        // tl.fromTo(".welcome-section h1", {
        //     yPercent: "random(90,100)",
        //     opacity: 0,
        //     duration: 5,
        // }, {
        //     yPercent: "random(70,100)",
        //     ease: "ease",
        //     opacity: 1,
        //     scale: "random(1.0,4.0)",
        //     duration: 5,
        //     // duration:"random(4,10)",
        //     stagger: 0.05
        // })

        tl.fromTo(".mandala", {
            scale: "1", height: "100%"
        }, { scale: "0", height: "0", delay: "2", duration: "0.1" })
        tl.fromTo(".welcome-container", {
            scale: "0",
        }, { scale: "1", duration: "0.3" })
        tl.fromTo(".preloader", {
            yPercent: 0,
            opacity: 1
        }, {
            yPercent: -100,
            height: 0,
            opacity: 0,
            delay: "1",
            display:"none",
            duration: '0.1'
        })

    })

    return (
        <>

            <div className='preloader'>

                <div className='mandala-container'>
                    <img className='mandala' src={mandala} alt='' />
                </div>
                <div className='welcome-container'>
                    <img src={man} alt='' />
                    <h1 className=' text-center khamma-ghani'>Khamma Ghani Saa</h1>
                </div>
                {/* <img className='welcome' src={greet} alt='' /> */}
            </div>

        </>
    )
}

export default Preloader