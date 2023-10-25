import React, { useState, useEffect } from 'react'
import './Forts.css'
import Card from '../components/Card'
import { database, ref, onValue } from '../Firebase'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"

const Cuisine = () => {

    const [data, setData] = useState({});
    const dataRef = ref(database, '/museum');

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
    return (
        <> 
        <Navbar bgColor={"#FF9933"} color={"#ffd354"} />
            <div className='cuisine_section'>
                <div className='image_container'>
                    {/* <img src='https://img.freepik.com/free-photo/camel-caravan-desert-sunrise-ai-generated-image_511042-1678.jpg?t=st=1695893847~exp=1695897447~hmac=3477f0f3eb28d67846f4162d34be9af15c327edd997053e58c83ce773412566c&w=1380' alt='' /> */}
                    <h1 className='text-center font-bold'>Walls That Whisper Tales: <br /> Rajasthan's Fortresses</h1>
                    {/* <video src={vid} muted autoPlay/> */}
                    {/* <iframe width="100%" height="00%" src="https://www.youtube.com/embed/RmxaeW-abNk?si=zdJKt5hyhTVlnih-&amp;controls=0&amp;start=138" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen></iframe> */}
                </div>
                <div className='forts_section'>
                    <h1 className='heading_font forts_text text-center py-10'>Museum</h1>
                    <p>
                    Rajasthan, a land steeped in history and culture, boasts an array of museums that offer a captivating journey through the state's rich heritage. Rajasthan's museums serve as repositories of art, history, and culture, showcasing a diverse tapestry of artifacts, manuscripts, and exhibits that narrate the tales of this princely state. From the Albert Hall Museum in Jaipur, a magnificent architectural gem, to the City Palace Museum in Udaipur, brimming with royal artifacts, these institutions provide an immersive exploration of Rajasthan's opulent past. The museums also spotlight the traditional arts and crafts of the region, preserving the intricate work of skilled artisans. In addition to housing invaluable relics, many museums are housed in palatial structures, making the visit an aesthetic delight. Rajasthan's museums are windows to the past, offering visitors a chance to delve into the vibrant history and culture that have shaped this splendid state.

                    </p>

                    <div className='forts_card '>
                        {/* {JSON.stringify(data, null, 2)} */}
                        {Object.keys(data).map((key) => (
                            <Card key={data[key]}
                                name={data[key].name} img={data[key].image_url} destination={data[key].city} />
                        ))}

                    </div>
                </div>
                <Footer/>
            </div>
            
        </>
    )
}

export default Cuisine