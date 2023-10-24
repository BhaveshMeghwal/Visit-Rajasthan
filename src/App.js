import './App.css';
import Music from './components/Music';
// import Card from './components/Card';
import Home from './pages/Home';
import Forts from './pages/Forts';
import { Route, Routes } from 'react-router-dom';
import Temples from './pages/Temples';
import Forests from './pages/Forests';
import Cuisine from './pages/Cuisine';
import Lakes from './pages/Lakes';
import Fairs from './pages/Fairs';
// import Post from './components/Post';

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from 'react';
import Preloader from './components/Preloader';
import Gallery from './pages/Gallery';
import Destinations from './pages/Destinations';
gsap.registerPlugin(ScrollTrigger);



function App() {

  useLayoutEffect(() => {
    // gsap.fromTo(".heading_font", {
    //   yPercent: "40",
    //   duration: "2",
    //   opacity: "0"
    // }, {
    //   opacity: "1",
    //   yPercent: "0",
    //   stagger: "0.2",
    //   scrollTrigger: {
    //     trigger: ".heading_font",
    //     toggleActions: "restart pause reverse pause",
    //     // scrub: 5,
    //     scroller: "body",
    //   }
    // })
  })
  return (
    <div className="App">
      <Preloader />
      <Routes>


        <Route index element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path='/destination' element={<Destinations />} />
        <Route path="/forts" element={<Forts />} />
        {/* <Route path="/forts/:id" element={<Forts />} /> */}
        <Route path="/temples" element={<Temples />} />
        <Route path="/wildlife" element={<Forests />} />
        <Route path="/museum" element={<Cuisine />} />
        <Route path="/lakes" element={<Lakes />} />
        <Route path="/fairs" element={<Fairs />} />
      </Routes>
    </div>
  );
}

export default App;
