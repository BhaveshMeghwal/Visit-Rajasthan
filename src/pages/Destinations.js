import React, { useEffect, useState } from 'react'
import './Destinations.css'
import { database, ref, onValue } from '../Firebase'
import Card from '../components/Card'
import TravelerExp from '../components/TravelerExp'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Destinations = () => {
  const [destinations, setDestination] = useState({});
  const dataRef = ref(database, '/top_destination');

  useEffect(() => {
   
    const unsubscribe = onValue(dataRef, (snapshot) => {
      if (snapshot.exists()) {
        setDestination(snapshot.val());
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>

      <Navbar />
      <div className='destination-section'>

        <div className='image_container1'>
          {/* <img src='https://www.bwallpaperhd.com/wp-content/uploads/2018/08/JaisalmerFort.jpg' alt='' /> */}
          {/* <h1 className='text-center font-bold'>{data.main_heading}</h1> */}
          {/* <video src={vid} muted autoPlay/> */}
          {/* <iframe width="100%" height="00%" src="https://www.youtube.com/embed/RmxaeW-abNk?si=zdJKt5hyhTVlnih-&amp;controls=0&amp;start=138" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe> */}
        </div>
        <div className='destination-card1'>
          
        </div>

        {Object.keys(destinations).map((key) => (
          
          <div className='destination-card'>
            {console.log(destinations)}
            <div className='destination-image'>
              <img src={destinations[key].image_url} alt='' />
            </div>
            <div className='destination-content'>
              {/* <h1>{destinations[key]}</h1> */}
              <h1 className='destination-name heading_font'>{destinations[key].name}</h1>
              <p className='destination-description my-2'>{destinations[key].description}</p>
            </div>
          </div>
        ))}
<Footer/>
      </div>
      
    </>
  )
}

export default Destinations