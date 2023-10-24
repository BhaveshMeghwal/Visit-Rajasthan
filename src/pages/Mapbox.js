import React, {useRef, useCallback, useLayoutEffect,useState,useEffect } from 'react'
import './Mapbox.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import gsap from 'gsap'

import 'swiper/css';
import 'swiper/css/free-mode';
// import { FreeMode } from 'swiper/modules';

import { database, ref, onValue } from '../Firebase'
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Places from '../assets/Places.js'

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Mapbox = () => {

  const [data, setData] = useState({});
    const dataRef = ref(database, '/places');

    useEffect(() => {
        // Attach a listener to the database reference
        const unsubscribe = onValue(dataRef, (snapshot) => {
            // Retrieve and update data in real-time
            if (snapshot.exists()) {
                setData(snapshot.val());
            }
        });

        // Clean up the listener when the component unmounts
        return () => {
            unsubscribe();
        };
    }, []);
  const mapRef = useRef(null);
  useLayoutEffect(() => {
    gsap.fromTo(".locate-destination", {
      yPercent: "100",
      opacity: "0"
    }, {
      opacity: "1",
      yPercent: "0",
      duration:"0.5",
      // stagger: "0.4",
      scrollTrigger: {
        trigger: ".locate-destination",
        toggleActions: "restart pause reverse pause",
        // scrub: 5,
        scroller: "body",
      }
    })
    gsap.fromTo(".card2", {
      yPercent: "80",
      // duration: "2",
      opacity: "0"
    }, {
      opacity: "1",
      yPercent: "0",
      stagger: "0.3",
      scrollTrigger: {
        trigger: ".card2",
        toggleActions: "restart pause reverse pause",
        // scrub: 5,
        scroller: "body",
      }
    })
  })

  const onSelectCity = useCallback((coordinates) => {
    mapRef.current.flyTo({
      ...coordinates,
      center: [coordinates[1], coordinates[0]],
      zoom: 12,
      pitch: 40,
      duration: 2000,
      steps:1000
    });
  }, []);

  return (
    <div className='map-section'>
      <div className='text-center locate-destination heading_font'>Plan Your Journey: Map View</div>
      <Map className='map'
        mapboxAccessToken='pk.eyJ1IjoiYmhhdmVzaDA2IiwiYSI6ImNsbGt0N3ZodDI1Y2czZ21nbmlzcjVvZ2MifQ.mJvOjne2AKUKQ8w6fDXS1Q'
        ref={mapRef}
        // mapStyle="mapbox://styles/mapbox/streets-v12"
        initialViewState={{
          longitude: 74.2179,
          latitude: 27.0238,
          zoom: 6,
          pitch: 60
        }}
        style={{ width: '100vw', height: "70vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        
        {/* <Marker latitude={26.9124} longitude={75.7873} offsetLeft={-20} offsetTop={-10}>
          <img className='marker' src='-map-marker-heart-logo-color-thumbnail.png' alt='/' />
        </Marker> */}
      </Map>

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        // freeMode={true}
        // modules={[FreeMode]}
        // loop={true}
        className="mySwiper swiper_container"
      >
        {Places.map((place, index) => (
          <SwiperSlide>
            <div className='card2'
              onClick={() => onSelectCity(place.coordinates)}
            >
              <img src={place.image} alt='' />
              <h1 className='text-center font-bold card-content2'>{place.city}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Mapbox