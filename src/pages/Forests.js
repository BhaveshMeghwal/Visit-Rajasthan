import React, { useState, useEffect } from 'react'
import './Forts.css'
import Card from '../components/Card'
import { database, ref, onValue } from '../Firebase'
import Navbar from '../components/Navbar'

const Forests = () => {
    const [data, setData] = useState({});
    const dataRef = ref(database, '/wildlife');

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
        <Navbar bgColor={"#29AB87"} color={"#000"} />
            <div className='forest_section'>
                <div className='image_container'>
                    {/* <img src='https://images.unsplash.com/photo-1630577303708-c50de21cf8ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1859&q=80' alt='' /> */}
                    {/* <h1 className='text-center font-bold'>Walls That Whisper Tales: <br /> Rajasthan's Fortresses</h1> */}
                    {/* <video src={vid} muted autoPlay/> */}
                    {/* <iframe width="100%" height="00%" src="https://www.youtube.com/embed/RmxaeW-abNk?si=zdJKt5hyhTVlnih-&amp;controls=0&amp;start=138" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe> */}
                </div>
                <div className='forts_section'>
                    <h1 className=' heading_font text-center font-bold'>Walls That Whisper Tales: <br /> Rajasthan's Fortresses</h1>
                    <p>
                        Rajasthan, often referred to as the "Land of Forts," boasts a stunning collection of historic fortifications that are not only architectural
                        marvels but also repositories of the state's rich history and culture.<br />
                        Architecturally, Rajasthan's forts are breathtaking. They feature intricately carved facades, imposing gateways, delicate jharokhas (balconies),
                        and robust fortifications, all made from the region's signature sandstone. Inside these forts lie opulent palaces, lush courtyards, and regal
                        chambers that once hosted royal courts and nobility.<br />
                        Beyond their historical and architectural significance, these forts are living testaments to Rajasthan's cultural heritage. They serve as venues
                        for festivals, performances, and cultural events, allowing visitors to immerse themselves in the state's traditions and vibrant culture. Some,
                        such as Chittorgarh Fort and Kumbhalgarh Fort, have even earned UNESCO World Heritage Site status, highlighting their global importance.<br />
                        Today, Rajasthan's forts continue to be major tourist attractions, drawing travelers from around the world who come to explore their rich history,
                        awe-inspiring architecture, and cultural heritage. These forts are more than just historic monuments; they are timeless symbols of Rajasthan's valor,
                        resilience, and the enduring legacy of its rulers.

                    </p>

                    <div className='forts_card '>
                    {Object.keys(data).map((key) => (
                                    <Card key={data[key]}
                                        name={data[key].name} img={data[key].image_url} destination="Amer fort" />

                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forests