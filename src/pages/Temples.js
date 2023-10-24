import React, { useState, useEffect } from 'react'
import './Forts.css'
import Card from '../components/Card'
import { database, ref, onValue } from '../Firebase'
import Navbar from '../components/Navbar'


const Temples = () => {

    const [data, setData] = useState({});
    const dataRef = ref(database, '/religion_places');

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
        <Navbar bgColor={"#FF7722"} color={"#ffd354"}/>
            <div className='temple_section'>
                <div className='image_container'>
                    {/* <img src='https://images.unsplash.com/photo-1661703307198-a96950927014?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80' alt='' /> */}
                    {/* <h1 className='text-center font-bold'>Walls That Whisper Tales: <br /> Rajasthan's Fortresses</h1> */}
                    {/* <video src={vid} muted autoPlay/> */}
                    {/* <iframe width="100%" height="00%" src="https://www.youtube.com/embed/RmxaeW-abNk?si=zdJKt5hyhTVlnih-&amp;controls=0&amp;start=138" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen></iframe> */}
                </div>
                <div className='forts_section'>
                    <h1 className='heading_font text-center py-5'>Religion Places</h1>
                    <p>
                    Rajasthan, a land of diverse cultures and traditions, is home to numerous religious places that hold deep spiritual significance.


                    </p>

                    <div className='forts_card '>
                        {/* {JSON.stringify(data, null, 2)} */}
                        {Object.keys(data).map((key) => (
                            <Card key={data[key]}
                                name={data[key].name} destination="Amer fort" />
                        ))}
                        <Card />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Temples