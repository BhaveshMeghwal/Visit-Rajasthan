import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './MusicPlayer.css'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { songsDb } from '../Firebase';
import disc from '../assets/disc.svg'

import { getDownloadURL, listAll, ref } from 'firebase/storage';

import gsap from 'gsap'

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [songs, setSongs] = useState([]);

  useLayoutEffect(() => {
    let tl =gsap.timeline()
    gsap.fromTo(".musicsthan", {
      yPercent: "100",
      opacity: "0"
    }, {
      opacity: "1",
      yPercent: "0",
      duration:"0.5",
      // stagger: "0.4",
      scrollTrigger: {
        trigger: ".player",
        toggleActions: "restart pause reverse pause",
        // scrub: 5,
        scroller: "body",
      }
    })
    gsap.fromTo(".musicsthan1", {
      yPercent: "100",
      opacity: "0"
    }, {
      opacity: "1",
      yPercent: "0",
      duration:"0.5",
      delay:"0.5",
      // stagger: "0.4",
      scrollTrigger: {
        trigger: ".player",
        toggleActions: "restart pause reverse pause",
        // scrub: 5,
        scroller: "body",
      }
    })
    
  })

  useEffect(() => {
    // Reference the Firebase Storage directory where your videos are stored
    const storageRef = ref(songsDb, 'songs');
    // List all items in the 'videos' directory
    listAll(storageRef)
      .then((result) => {
        // Iterate through the items and get download URLs
        const songPromises = result.items.map((item) =>
          getDownloadURL(item).then((url) => ({ name: item.name, url }))
        );
        console.log(songs)
        // Wait for all promises to resolve
        return Promise.all(songPromises);
      })
      .then((songData) => {
        // console.log(songData)
        setSongs(songData); // Set the video data in the state
      })
      .catch((error) => {
        console.error('Error fetching video data:', error);
      });
  }, []);


  const playPauseToggle = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const playSong = (song) => {
    setCurrentSong(song);
    audioRef.current.src = song.url;
    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <>
      <h1 className='heading_font musicsthan my-5 text-center'>Musicस्थान</h1>
      <h1 className='line_font-size musicsthan1 my-5 text-center'>Explore Rajasthan's musical soul: Feel the vibes on Visit Rajasthan!</h1>
      <div className='player-section'>
        <div className="player my-5">
          <ul>
            {songs.map((song, index) => (
              <li className='song' key={index} onClick={() => playSong(song)}>
                {song.name}
              </li>
            ))}
          </ul>

        </div>
        <div className='right'>
          <img className='disc-img' src={disc}/> 
          <p className='text-center py-5'>Now Playing: <strong>{currentSong ? currentSong.name : 'None'}</strong> </p>
          <audio ref={audioRef} controls />
          {/* <AudioPlayer
            style={{ borderRadius: "1rem", color: "green", background: "#E9FFE9" }}
            autoPlay
            // src={song.url}
            // onPlay={(e) => console.log("onPlay")}
            showSkipControls={true}
            showJumpControls={false}
            // header={`Now playing: ${musicTracks[trackIndex].name}`}
            // onClickPrevious={handleClickPrevious}
            // onClickNext={handleClickNext}
            // onEnded={handleClickNext}
          /> */}
        </div>

      </div>
    </>
  );
};

export default MusicPlayer