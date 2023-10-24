import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper/modules';
import gsap from 'gsap'


import './Music.css'
import { musicDb } from '../Firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Music = () => {

  const [videos, setVideos] = useState([]);
  useLayoutEffect(() => {
    gsap.fromTo(".music-swiper", {
      yPercent: "40",
      duration: "2",
      opacity: "0"
    }, {
      opacity: "1",
      yPercent: "0",
      stagger: "0.6",
      scrollTrigger: {
        trigger: ".music-swiper",
        toggleActions: "restart pause reverse pause",
        // scrub: 5,
        scroller: "body",
      }
    })
  })
  
  useEffect(() => {
    // Reference the Firebase Storage directory where your videos are stored
    const storageRef = ref(musicDb, 'video');
    // List all items in the 'videos' directory
    listAll(storageRef)
      .then((result) => {
        // Iterate through the items and get download URLs
        const videoPromises = result.items.map((item) =>
          getDownloadURL(item).then((url) => ({ name: item.name, url }))
        );

        // Wait for all promises to resolve
        return Promise.all(videoPromises);
      })
      .then((videoData) => {
        setVideos(videoData); // Set the video data in the state
      })
      .catch((error) => {
        console.error('Error fetching video data:', error);
      });
  }, []);

  // useEffect(() => {
  //   const videoRef = ref(musicDb, "video");

  //   getDownloadURL(videoRef)
  //     .then((url) => {
  //       setVideoURL(url);
  //       console.log(url)
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching video URL:', error);
  //     });
  // }, []);

  const [currentVideo, setCurrentVideo] = useState(null);
  const videoRefs = useRef(videos.map(() => React.createRef()));
  const [isPlaying, setIsPlaying] = useState(false);

  // console.log(videoRefs.current[currentVideo].current)
  
  const playVideo = (videoId) => {
    if (currentVideo !== null) {
      // videoRefs.current[currentVideo].current.pause();
      // video.url.pause();
    }
    setCurrentVideo(videoId);
    if (isPlaying) {
      videoRefs.current[videoId].current.pause();
      setIsPlaying(false)

    } else {
      videoRefs.current[videoId].current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
    {/* <div className='music-section'>
        <div></div>
        <div></div>
    </div> */}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        // loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        
      >
        {/* {Object.keys(data).map((key) => ( */}
          {
            videos.map((video, index) => (
              <SwiperSlide className="music-swiper">
                <video
                  // ref={videoRefs.current[index]}
                
                  controls={true}
                  // onClick={() => playVideo(video.url)}
                  src={video.url}
                  className='video' />
              </SwiperSlide>
            ))
          }
        {/* ))} */}
      </Swiper>
    </>
  )
}

export default Music


