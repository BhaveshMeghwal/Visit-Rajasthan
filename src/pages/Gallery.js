import React, { useEffect, useState } from 'react'
import './Gallery.css';
import { imageDb } from '../Firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Gallery = () => {
  const src = "https://www.youtube.com/watch?v=MBv6Q07o_7c";
  const [images, setImages] = useState([]);

  useEffect(() => {
    const storageRef = ref(imageDb, 'images');
    listAll(storageRef)
      .then((result) => {
        const videoPromises = result.items.map((item) =>
          getDownloadURL(item).then((url) => ({ name: item.name, url }))
        );

        return Promise.all(videoPromises);
      })
      .then((videoData) => {
        setImages(videoData); 
      })
      .catch((error) => {
        console.error('Error fetching video data:', error);
      });
  }, []);
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (

    <div className="gallery-section">
      <Navbar />
      <video preload='auto' muted="muted" autoPlay="autoplay" loop="loop" >
        <source src={src} type="video/mp4" />
      </video>
      <h1 className=' text-center heading_font'>Gallery</h1>

      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
        
      >

        {
          images.map((image, index) => (
            <a href={image.url} key={index}>
              <img alt={image.alt} className='gallery-img' src={image.url} />
            </a>
          ))
        }

      </LightGallery>

      <Footer />

    </div>
  )
}

export default Gallery